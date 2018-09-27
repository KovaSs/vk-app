import { makeYearPhotos } from '../utils/makeYearPhotos';
import { GET_PHOTOS_SUCCESS, GET_PHOTOS_FAIL } from '../actions/PageActions';

let photosArr = []
let cached = false

export function getMorePhotos(offset, count, year, dispatch) {
  //eslint-disable-next-line no-undef
  VK.Api.call(
    'photos.getAll',
    { extended: 1, count: count, offset: offset, v: '5.80' },
    r => {
      try {
        photosArr = photosArr.concat(r.response.items)
        if (offset <= r.response.count) {
          offset += 200 // максимальное количество фото которое можно получить за 1 запрос
          getMorePhotos(offset, count, year, dispatch)
        } else {
          let photos = makeYearPhotos(photosArr, year)
          cached = true
          dispatch({
            type: GET_PHOTOS_SUCCESS,
            payload: photos,
          })
        }
      } catch (e) {
        dispatch({
          type: GET_PHOTOS_FAIL,
          error: true,
          payload: new Error(e),
        })
      }
    }
  )
}