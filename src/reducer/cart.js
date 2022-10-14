const cartDetails = {

}

const cartReducer = (state = cartDetails,action)=>{
    switch(action.type){
        case "ADD_INCREMENT":
            return {...state,}
        default:
        return state
    }
}

export default cartReducer