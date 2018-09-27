import * as t from '../actions/UserActions';

const initialState = {
  name: '',
  error: '', // добавили для сохранения текста ошибки
  isFetching: false // добавили для реакции на статус "загружаю" или нет
}

export function userReduser(state = initialState, action) {
  switch(action.type) {
    case t.LOGIN_REQUEST:
    case t.LOGIN_STATUS_REQUEST:
    case t.LOGOUT_REQUEST:
      return { ...state, isFetching: true, error: '' }
      /* когда мы начали делать запрос (LOGIN_REQUEST) 
      мы очищаем error. Например, была ошибка, мы стали делать новый запрос - 
      ошибка очистилась */

    case t.LOGIN_SUCCESS:
    case t.LOGIN_STATUS_SUCCESS:
      return { ...state, isFetching: false, name: action.payload }
     /* если случился LOGIN_SUCCESS - мы в name записываем action.payload 
      (там мы передаем в строке имя пользователя) и ставим статус 
      загрузки - false (то есть, не загружается, ибо загрузилось) */

    case t.LOGIN_FAIL:
    case t.LOGOUT_FAIL:
      return { ...state, isFetching: false, error: action.payload.message }
      /* если случился LOGIN_FAIL - опять же, загружаю? 
      Нет, значит isFetching - false. Ошибка? 
      Да - запиши в поле error */

    case t.LOGIN_STATUS_FAIL:
      return { ...state, isFetching: false}

    case t.LOGOUT_SUCCESS:
      return initialState

    default: 
      return state
  }
}