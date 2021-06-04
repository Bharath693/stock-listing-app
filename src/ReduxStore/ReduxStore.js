import {   combineReducers , applyMiddleware, createStore} from 'redux'
import thunk from 'redux-thunk'
import { persistReducer , persistStore} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
// import { devToolsEnhancer } from 'redux-devtools-extension'
import   { HomeReducer }   from '../reducers/HomeReducer'
// import { CartReducer } from '../Redux/Reducers/CartReducer'

 const rootReducer = combineReducers({
     HomeR: HomeReducer,
    //  Cart: CartReducer
 })
 
const persistConfig = {
    key:"root",
    storage,
}

const persistedReducer = persistReducer(persistConfig , rootReducer)

const middleWare = [thunk]

export const store = createStore(persistedReducer , applyMiddleware(...middleWare))

export const persistedStore = persistStore(store)

