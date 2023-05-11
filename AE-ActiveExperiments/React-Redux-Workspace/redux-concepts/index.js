console.log('Welcome to Redux.')

//state
let initialState = {
    "quantity" :100
}
//Action
function buyMobile(){
    return {
        "type": "BUY_MOBILE"
    }
}
//Reducer (preState, action) => newState
function reducer(state = initialState, action){
    if(action.type == 'BUY_MOBILE'){
        state.quantity = state.quantity-1
    }
    return state;
}

//just like we are importing redux package
const redux = require('redux');
const store = redux.createStore(reducer);

//this will call when your state modified from store
store.subscribe(() => { 
    console.log('state changed :'+JSON.stringify(store.getState()));
})

//this function call will call the reducer and reducer function will take place your state transfer.
store.dispatch(buyMobile());
store.dispatch(buyMobile());
store.dispatch(buyMobile());
store.dispatch({"type":"BUY_MOBILE"});
console.log(JSON.stringify(store.getState()));



//---------------------Another way of same example--------------------------------------
//import redux from 'redux;'
// const redux = require('redux')
// const createStore = redux.createStore


// const BUY_MOBILE = 'BUY_MOBILE'

// //actioncreator-function 
// //which returns action object

// function buyMobile(){
//     return{
//         type:BUY_MOBILE,
//         info:'First redux action'
//     }
// }

// //(previosState, action) => newState

// const initialState = {
//     numOfMobiles: 10
// }

// const reducer = (state = initialState, action) => {
//     switch(action.type){
//         case BUY_MOBILE : return{
//             ...state,
//             numOfMobiles : state.numOfMobiles - 1
//         }

//         default : return state
//     }
// }

// const store = createStore(reducer)
// console.log('Initial State', store.getState())
// const unsubscribe = store.subscribe(() => console.log('Updated State', store.getState()))
// store.dispatch(buyMobile());
// store.dispatch(buyMobile());
// store.dispatch(buyMobile());