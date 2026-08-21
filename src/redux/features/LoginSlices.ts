import { createSlice } from '@reduxjs/toolkit'
import {type PayloadAction } from '@reduxjs/toolkit'
import { createAsyncThunk } from '@reduxjs/toolkit'


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

export const LoginThunk = createAsyncThunk("users/LoginThunk",
    async(newUser: Omit<User, "id"> ) => {
        const response = await fetch("http://localhost:3000/users",
            {
                method: "GET",
                headers: {
                    "Contene-Type": "application/json"
                },
                body: JSON.stringify(newUser),
            });
            if(!response.ok){
                throw new Error("failed to get server")
            }
            const data = await response.json();
            return data;
    }
)

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
    },
          extraReducers: (builder) => {
            builder.addCase(LoginThunk.pending, (state) =>{
                state.isLoading = true;
                state.error =null
            });
            builder.addCase(LoginThunk.fulfilled, (state) => {
                state.isLoading = false;
    
            });
            builder.addCase(LoginThunk.rejected, (state ,action)=> {
                state.isLoading=false
                state.error= action.payload as string
            })
        }
})


export const {updateEmailAddress, updatePassword} = LoginSlice.actions 

export default LoginSlice.reducer