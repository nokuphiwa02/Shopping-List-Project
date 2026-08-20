import { createSlice } from '@reduxjs/toolkit'
// import { PayloadAction } from '@reduxjs/toolkit' 


interface User{
id:string,
email: string,
password: string
}

//authentication
interface LoginState{
user: User | null,
isLoading: boolean,
error: string | null
}

const initialState: LoginState = {
user: null,
isLoading: false,
error: null,
}

export const LoginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {

    }
})