import { configureStore } from '@reduxjs/toolkit'
import registerReducer  from './src/redux/features/RegisterSlice'
import signInReducer from './src/redux/features/LoginSlices'
import listReducer from './src/redux/features/ShoppingListSlice'
import profileReducer from './src/redux/features/ProfileSlices'
import itemsReducer from './src/redux/features/ShoppingItemSlices'


export const store = configureStore({
  reducer: { 
    signUp: registerReducer,
    signIn: signInReducer,
    addCategory: listReducer,
    profile: profileReducer,
    addItem: itemsReducer,
}
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch