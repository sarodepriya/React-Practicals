const redux = require('redux')

console.log('Welcome To Redux.');

//Create a State. Initial state
let initialState = {
    quantity: 100
}

//Action: 
function byeMobile() {
    console.log('buy mobile action');
    return {
        type: 'BUY_MOBILE',
    };
}
//Reducer
const reducer = (state = initialState, action) => {
    console.log('reducer function')
    if (state.quantity > 0) {
        switch (action.type) {
            case 'BUY_MOBILE':
                return {
                    ...state,
                    quantity: state.quantity - 1
                }
            default:
                return state;
        }
    } else {
        return state;
    }
}

//Store - Define Redux Store
const createStore = redux.createStore
const store = createStore(reducer);

store.subscribe(() => {
    console.log(`updated quanity: ${JSON.stringify(store.getState())}`)
});

store.dispatch(byeMobile());
store.dispatch(byeMobile());
store.dispatch(byeMobile());
store.dispatch(byeMobile());
store.dispatch({ type: 'BUY_MOBILE' });
