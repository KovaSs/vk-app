export const LOGIN_REQUEST = 'LOGIN_REQUEST'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_FAIL = 'LOGIN_FAIL'

export function heandleLogin() {
  return function (dispatch) {
    //XXX_REQUEST - диспатчим непосредственно перед стартом реального запроса (для юзера это выглядит, как будто во время запроса)
    dispatch({
      type: LOGIN_REQUEST
    })

    //eslint-disable-next-line no-undef
    VK.Auth.login(r => {
      if (r.session) {
        let username = r.session.user.first_name
        // XXX_SUCCESS + данные - если все прошло успешно добавляем данные
        dispatch({
          type: LOGIN_SUCCESS,
          payload: username
        })
      } else {
        // ХХХ_FAIL + ошибка - если что-то пошло не так
        dispatch({
          type: LOGIN_FAIL,
          error: true,
          payload: new Error('Ошибка авторизации')
        })
      }
    }, 4) // Запрос прав на доступ к фото
  }
}