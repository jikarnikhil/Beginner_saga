// import { combineReducers, createStore } from "redux"
// import { cakeReducer, iceReducer } from './reducers/reducers'


//  const store = createStore (combineReducers({
//     cakeReducer,
//     iceReducer
// }))


// export default store;



import { combineReducers, createStore } from "redux"
import { cakeReducer, iceReducer } from './reducers/reducers'

const rootReducer = combineReducers({
    cake:   cakeReducer,
    ice :   iceReducer
})

const store = createStore(rootReducer);


export default store;