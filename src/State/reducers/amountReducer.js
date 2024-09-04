const  reducer=(state=[],action)=>{
  if(action.type=="set_name"){
    return [...state,action.payload]
  }
 
  else{
    return state
  }
}
export default reducer;