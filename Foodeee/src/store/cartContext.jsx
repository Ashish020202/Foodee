import { createContext,useReducer } from "react";

const cartContext= createContext({
    items:[],
    addItem:(item)=>{},
    removeItem:(item)=>{},
})

function cartReducer(state,action){
    if(action.type=='ADD_ITEM'){
        const existingCartItemIndex = state.item.findIndex(
            (item)=>item.id==action.item.id);

        const updatedItems = [...state]; 

        if(existingCartItemIndex > -1){
           const existingItem = state.item[existingCartItemIndex];
           const updatedItem={
            ...existingItem,
            quantity:existingItem.quantity+1,
           }

           updatedItems[existingCartItemIndex]=updatedItem;
      
        }else{
            updatedItems.push({...action.item,quantity:1})
        }

        return {...state, items:updatedItems}

    }
    if(action.type=='REMOVE_ITEM'){
       
    }

    return state
}

export function cartContextProvider({children}){
    return <cartContextProvider>{children}</cartContextProvider>
    useReducer(cartReducer,{item:[]});
}

export default cartContext;