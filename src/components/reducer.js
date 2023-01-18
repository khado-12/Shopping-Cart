import { type } from "@testing-library/user-event/dist/type"

export const reducer=(state,action)=>{
    
    if(type.action == 'REMOVE_ITEM'){
     console.log("type")
     return({
          
          ...state,
          item:state.item.filter((currentItem)=>{
              return(
               currentItem.id !== action.payload
               
              )
              console.log(state)
          })
     }
     )
    }
}