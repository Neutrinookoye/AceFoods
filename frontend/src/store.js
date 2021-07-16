import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import { menuListReducer , menuDetailsReducer } from './reducers/menuReducers'

import { cartReducer  } from './reducers/cartReducers'

import { 
    userLoginReducer , 
    userDetailsReducer , 
    userRegisterReducer ,
    userUpdateProfileReducer 
} from './reducers/userReducers'

import { 
    orderCreateReducer ,
    orderDetailsReducer
} from './reducers/orderReducers'


const reducer = combineReducers({
    menuList : menuListReducer ,
    menuDetails : menuDetailsReducer ,
    cart : cartReducer , 

    userLogin : userLoginReducer ,
    userRegister : userRegisterReducer ,
    userDetails : userDetailsReducer ,
    userUpdateProfile : userUpdateProfileReducer ,
    orderCreate : orderCreateReducer ,
    orderDetails : orderDetailsReducer ,
})

const cartItemsFromLocalStorage = localStorage.getItem('cartItems')
    ? JSON.parse(localStorage.getItem('cartItems'))
    : []

const userInfoFromStorage = localStorage.getItem('userInfo') 
    ? JSON.parse(localStorage.getItem('userInfo')) 
    : null

const deliveryAddressFromStorage = localStorage.getItem('deliveryAddress') 
    ? JSON.parse(localStorage.getItem('deliveryAddress')) 
    : {}

const paymentMethodFromStorage = localStorage.getItem('paymentMethod') 
    ? JSON.parse(localStorage.getItem('paymentMethod')) 
    : {}

const initialState = {
    cart : {
        cartItems : cartItemsFromLocalStorage ,
        deliveryAddress :deliveryAddressFromStorage ,
        paymentMethod : paymentMethodFromStorage
    } ,
    userLogin : {
        userInfo : userInfoFromStorage
    } 
}

const middleware = [thunk]

const store = createStore(reducer , initialState , composeWithDevTools(applyMiddleware(...middleware)))

export default store
