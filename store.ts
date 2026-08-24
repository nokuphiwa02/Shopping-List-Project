import { configureStore } from '@reduxjs/toolkit'
import registerReducer  from './src/redux/features/RegisterSlice'
import loginReducer from './src/redux/features/LoginSlices'
import listReducer from './src/redux/features/ShoppingListSlice'
import profileReducer from './src/redux/features/ProfileSlices'

export const store = configureStore({
  reducer: { 
    signUp: registerReducer,
    signIn: loginReducer,
    addCategory: listReducer,
    profile: profileReducer,

}
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch