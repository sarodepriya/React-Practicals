import redux from 'redux;'
const createStore = redux.createStore


const BUY_MOBILE = 'BUY_MOBILE'

//actioncreator-function 
//which returns action object

function buyMobile(){
    return{
        type:BUY_MOBILE,
        info:'First redux action'
    }
}

//(previosState, action) => newState

const initialState = {
    numOfMobiles: 10
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case BUY_MOBILE : return{
            ...state,
            numOfMobiles : state.numOfMobiles - 1
        }

        default : return state
    }
}

const store = createStore(reducer)
console.log('Initial State', store.getState())
const unsubscribe = store.subscribe(() => console.log('Updated State', store.getState()))
store.dispatch(buyMobile());
store.dispatch(buyMobile());
store.dispatch(buyMobile());
