import Custom_Reducer from './reducers';
import { createStore } from 'redux'

export const store = createStore( Custom_Reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() );