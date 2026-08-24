import { createSlice } from '@reduxjs/toolkit'
import {type PayloadAction } from '@reduxjs/toolkit'
import { createAsyncThunk } from '@reduxjs/toolkit'


export interface User{
// id?:number,
email: string,
password: string
}

interface LoginState extends User{
isLoading: boolean,
error: string | null
isAuthenticated: boolean,
}

const initialState: LoginState = {
 email:'',
 password:'', 
  isLoading: false,
  error: null,
  isAuthenticated:false,
}

export const LoginThunk = createAsyncThunk(
  "users/LoginThunk",
  async (login: User, { rejectWithValue }) => { 
    try {
      const response = await fetch(`http://localhost:3000/users?email=${encodeURIComponent(login.email)}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        }
      });

      if (!response.ok) {
        throw new Error("Failed to connect to the server");
      }

      const users: User[] = await response.json(); // ngyabonga

      const user = users.find(u => u.password === login.password);

      if (!user) {
        return rejectWithValue("Invalid email or password.");
      }

      return user; 
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : "An unknown error occurred";
      return rejectWithValue(errorMessage);
}
  }
);


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