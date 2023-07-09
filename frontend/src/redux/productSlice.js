import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-hot-toast";

const initialState={
productList: [],
cartItem:[],
}

export const productSlice=createSlice({
    name:"product",
    initialState,
    reducers:{
        setDataProduct:(state,action)=>{
            state.productList=[...action.payload]
        },
        addCartItem:(state,action)=>{
       const index=state.cartItem.findIndex(el=>el._id===action.payload._id)
        if(index>=0)
        {
            toast("Item already added in the cart")
        }
        else{
            toast("Item added successfully in the cart")

            const total=action.payload.price
            state.cartItem=[...state.cartItem,{...action.payload,qty:1,total:total}]
        }
        },
        deleteCartItem:(state,action)=>{
                //   console.log(action.payload)
                  toast("One item is Deleted successfully")
                  const index=state.cartItem.findIndex(el=>el._id===action.payload)
                //   console.log(index)
                  state.cartItem.splice(index,1)
        },
        increaseQty:(state,action)=>{
            const index=state.cartItem.findIndex(el=>el._id===action.payload)
            let qty=state.cartItem[index].qty
            state.cartItem[index].qty=++qty
            state.cartItem[index].total=qty*state.cartItem[index].price

        },
        decreaseQty:(state,action)=>{
const index=state.cartItem.findIndex(el=>el._id===action.payload)
            let qty=state.cartItem[index].qty
          if(qty>1){
            state.cartItem[index].qty=--qty
            state.cartItem[index].total=qty*state.cartItem[index].price
          }
        },
    }
})

export const {  setDataProduct,addCartItem,deleteCartItem,increaseQty,decreaseQty} =productSlice.actions  
    export default productSlice.reducer