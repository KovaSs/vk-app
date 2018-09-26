import { createStore, applyMiddleware } from 'redux';
import { rootReduser } from '../reducers';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

// удалили "начальное состояние = initial state"
// так как теперь наш редьюсер составной,
// и нам нужны initialState каждого редьюсера.
// Это будет сделано автоматически.

export const store = createStore(rootReduser, applyMiddleware(thunk, logger)) // <-- добавляем его в цепочку middleware'ов