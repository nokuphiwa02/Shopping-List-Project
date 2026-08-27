import { createAsyncThunk } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

export interface Items {
  id?: string;
  name: string;
  quantity: number;
  optionalNote: string;
}

interface itemsState extends Items {
  items: Items[];
  isLoading: boolean;
  error: string | null;
}

const initialState: itemsState = {
  items: [],
  name: "",
  quantity: 0,
  optionalNote: "",
  isLoading: false,
  error: null,
};

export const ItemsThunk = createAsyncThunk(
  "Items/ItemsThunk",
  async (newItem: Omit<Items, "id">) => {
    const response = await fetch("http://localhost:3000/items", {
      method: "POST",
      headers: {
        "content-Type": "application/json",
      },
      body: JSON.stringify(newItem),
    });

    if (!response.ok) {
      throw new Error("failed to add item");
    }
    const data = await response.json();
    console.log(data)
    return data;
  },
);

export const getItemsThunk = createAsyncThunk(
  "Items/getItemsThunk",
  async () => {
    const response = await fetch("http://localhost:3000/items", {
      method: "GET",
      headers: {
        "content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error("failed to add item");
    }
    const data = await response.json();
    console.log(data)
    return data;
  },
);

export const deleteItemThunk = createAsyncThunk(
  "Items/deleteItemThunk",
  async (id: string, { rejectWithValue }) => {
    try {
      const response = await fetch(`http://localhost:3000/items/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Failed to delete item from the list");
      }

      return id;
    } catch (error) {
      return rejectWithValue((error as Error).message);
    }
  },
);



export const ItemSlice = createSlice({
  name: "addItem",
  initialState,
  reducers: {
    addName: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
    addQuantity: (state, action: PayloadAction<number>) => {
      state.quantity = action.payload;
    },
    addOptionalnote: (state, action: PayloadAction<string>) => {
      state.optionalNote = action.payload;
      
    },
    addItem: (state, action: PayloadAction<Items>) => {
      state.items.push(action.payload)
    }
  },
  extraReducers: (builder) => {
    builder.addCase(ItemsThunk.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(ItemsThunk.fulfilled, (state) => {
      state.isLoading = false;
    });
    builder.addCase(ItemsThunk.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload as string;
    });
    builder.addCase(getItemsThunk.fulfilled, (state, action) => {
      state.isLoading = false
      state.items = action.payload; 
    });
    builder.addCase(deleteItemThunk.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      });
    builder.addCase(deleteItemThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = state.items.filter((items) => items.id !== action.payload);
      });
  
    builder.addCase(deleteItemThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = (action.payload as string) || "Failed to delete item";
      });


  },
});

export const { addName, addQuantity, addOptionalnote ,addItem} = ItemSlice.actions;

export default ItemSlice.reducer;
