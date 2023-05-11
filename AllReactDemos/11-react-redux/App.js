const redux = require('redux')
console.log('Welcome to Redux...')

// Define Action - Action is function that returns a object which must have type property
function byeMobile() {
    console.log('buy mobile action');
    return {
        type: 'BUY_MOBILE',
    };
}

// Initial state
let initialState = {
    quantity: 100
}

// Define Reducer
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
// Define Redux Store
const createStore = redux.createStore
const store = createStore(reducer);
store.subscribe(() => {
    console.log(`updated quanity: ${JSON.stringify(store.getState())}`)
});

// Then app will triggers the action that will dispatch state change
store.dispatch(byeMobile());
store.dispatch(byeMobile());
store.dispatch({ type: 'BUY_MOBILE' })
