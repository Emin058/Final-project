const initialState = JSON.parse(localStorage.getItem("Blog") || []);

export const BlogReducer =(state=initialState,action)=>{
  switch(action.type){
    case "ADD_BLOG":
      return[...state,action.payload]
    case "REMOVE_BLOG":
      return state.filter((item)=>item.id !==action.payload)
      case "EDIT_BLOG":
      const updatedArray =state.filter((item)=>{
        if(item.id === action.payload.id){
          return action.payload
        }
        else{
          return item
        }
      });
      return (state = updatedArray )
      default:
        return state
  }
} 