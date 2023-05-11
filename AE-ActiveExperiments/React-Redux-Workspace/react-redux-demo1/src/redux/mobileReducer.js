let initialState = {
    "quantity":100
}

//Reducer (preState, action) => newState
function mobileReducer(state = initialState, action){
    if(action.type == 'BUY_MOBILE'){
        return{
            "quantity": state.quantity-1
        }
    }
    return state;
}
export default mobileReducer;
