import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    email:"",
    firstName:"",
    lastName:"",
    _id:"",
    password:"",
    confirmpassword:""
};
 export const  userSlice=createSlice({
    name:"user",
    initialState,
    reducers:{
        loginRedux:(state,action)=>{
            // console.log(action.payload.data)
            state._id=action.payload.data._id
            state.firstName=action.payload.data.firstName
            state.lastName=action.payload.data.lastName
            state.email=action.payload.data.email
            state.password=action.payload.data.password
            state.confirmpassword=action.payload.data.confirmpassword

        },
        logoutRedux:(state,action)=>{
            state._id=""
            state.firstName=""
            state.lastName=""
            state.email=""
            state.password=""
            state.confirmpassword=""
        }
    }

 })

 export const  { loginRedux ,logoutRedux} = userSlice.actions
 export default userSlice.reducer;