import { createAsyncThunk } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from '@reduxjs/toolkit'

export interface Items {
    id? :string;
    name: string;
    quantity:number;
    optionalNote: string;
}

interface itemsState extends Items {
    items: Items[],
    isLoading: boolean,
    error: string | null
}

const initialState: itemsState= {
    items: [],
    name: '',
    quantity: 0,
    optionalNote: '',
    isLoading: false,
    error: null
};

export const ItemsThunk = createAsyncThunk(
   "Items/ItemsThunk",
    async (newItem: Omit<Items, "id">) => {
    const response = await fetch("http://localhost:3000/items",{
        method: "POST",
        headers: {
            "content-Type": "application/json",
        },
        body: JSON.stringify(newItem) 
    });

    if (!response.ok) {
        throw new Error("failed to add item")
    }
       const data = await response.json();
       return data;
    },
);


export const ItemSlice = createSlice({
    name: 'addItem',
    initialState,
    reducers:{
        addName: (state,action:PayloadAction<string>) => {
            state.name = action.payload
        },
        addQuantity: (state, action: PayloadAction<number>) => {
        state.quantity =action.payload
        },
        addOptionalnote: (state, action: PayloadAction<string>) => {
            state.optionalNote =action.payload
        },
    },
    extraReducers:(builder) => {
        builder.addCase(ItemsThunk.pending, (state) =>{
            state.isLoading =true;
            state.error =null
        });
        builder.addCase(ItemsThunk.fulfilled, (state) => {
            state.isLoading = false;
        });
         builder.addCase(ItemsThunk.rejected, ( state, action) => {
            state.isLoading = false
            state.error = action.payload as string
         })
    }
})

export const { addName, addQuantity, addOptionalnote } = ItemSlice.actions

export default ItemSlice.reducer