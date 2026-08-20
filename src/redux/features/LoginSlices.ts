import { createSlice } from '@reduxjs/toolkit'
import {type PayloadAction } from '@reduxjs/toolkit'


export interface User{
id?:number,
email: string,
password: string
}

interface LoginState extends User{
isLoading: boolean,
error: string | null
}

const initialState: LoginState = {
 email:'',
 password:'', 
  isLoading: false,
  error: null
}

export const LoginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
    updateEmailAddress: (state,action:PayloadAction<string>) => {
     state.email= action.payload
     },
      updatePassword: (state,action:PayloadAction<string>) => {
     state.password= action.payload
     },
    }
})


export const {updateEmailAddress, updatePassword} = LoginSlice.actions 

export default LoginSlice.reducer