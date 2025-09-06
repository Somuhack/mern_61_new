function MyReduser(state,action){
    switch (action.type) {
        case "add":
            return state+=1
        case "sub":
            return state-=1
        case "byvalue":
             return state+=action.payload
        default:
          return state
    }

}
export default MyReduser