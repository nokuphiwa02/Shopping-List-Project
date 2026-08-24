import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'


export interface List{
id?: number,
category: string,

}

interface ListState extends List{
    isLoading: boolean,
    error: string | null,
}

const initialState: ListState = {
    id: 0,
    category: '',
    isLoading: false,
    error: null
}

export const ListThunk = createAsyncThunk("List/ListThunk",
    async(newList: Omit<List, "id"> ) => {
        const response = await fetch ("http://localhost:3000/list",
            {
                method: "POST",
                headers: {
                    "contene-Type": "application/json"
                },
                body:JSON.stringify(newList),
            });
             if (!response.ok){
                throw new Error("failed to add list")
             }
             const data = await response.json();
             return data
    }
)


   export const ListSlice = createSlice ({
   name: 'addCategory',
   initialState,
   reducers: {
    updateCategory: (state,action: PayloadAction<string>) => {
        state.category= action.payload
    }
},
extraReducers: (builder) => {
    builder.addCase(ListThunk.pending, (state) =>{
        state.isLoading = true;
        state.error =null
    });
    builder.addCase(ListThunk.fulfilled, (state) =>{
       state.isLoading = false;
    });

    builder.addCase(ListThunk.fulfilled, (state, action) => {
        state.isLoading = false
        state.error = action.payload as string
    })

}

})

export const {  updateCategory } = ListSlice.actions

export default ListSlice.reducer