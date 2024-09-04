import { type } from "@testing-library/user-event/dist/type"

export const set_name=(amount)=>{
return (dispatch)=>{
  dispatch({
    type:'set_name',
    payload:amount
  })
}
}

export const withdrawMoney=(amount)=>{
    return (dispatch)=>{
        dispatch({
          type:'withdraw',
          payload:amount
        })
      }
}