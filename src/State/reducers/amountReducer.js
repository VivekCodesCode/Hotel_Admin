const  reducer=(state=[],action)=>{
  if(action.type=="set_name"){
    return [action.payload]
  }
 
  else{
    return state
  }
}
export default reducer;