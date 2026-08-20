import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'


export interface User{

    name:string,
    surname: string,
    emailAddress: string,
    password: string,
    contact: string,
    confirmPassword: string
}

const initialState: User = {
    name:'',
    surname: '',
    emailAddress: '',
    password: '',
    contact:'',
    confirmPassword: '',
}

export const RegisterSlice = createSlice({
    name: 'signUp',
    initialState,
    reducers:{
    //  registerUser: (state,action: PayloadAction<User>) => {
    //  },
     updateName: (state,action:PayloadAction<string>) => {
     state.name= action.payload
     },
     updateSurname: (state,action:PayloadAction<string>) => {
     state.surname= action.payload
     },
      updateEmailAddress: (state,action:PayloadAction<string>) => {
     state.emailAddress= action.payload
     },
      updatePassword: (state,action:PayloadAction<string>) => {
     state.password= action.payload
     },
      updateContact: (state,action:PayloadAction<string>) => {
     state.contact= action.payload
     },
      updateConfirmPassword: (state,action:PayloadAction<string>) => {
     state.confirmPassword= action.payload
     },
    }
})

export const { updateName, updateSurname, updateEmailAddress, updatePassword, 
             updateContact, updateConfirmPassword
            } = RegisterSlice.actions 


            export default RegisterSlice.reducer