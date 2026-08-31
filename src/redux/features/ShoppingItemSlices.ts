import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface Items {
  id?: string;
  userId: string;
  name: string;
  quantity: number;
  optionalNote: string;
}

interface itemsState {
  items: Items[];
  name: string;
  quantity: number;
  optionalNote: string;
  editingItemId: string | null;
  isLoading: boolean;
  error: string | null;
}

const initialState: itemsState = {
  items: [],
  name: "",
  quantity: 0,
  optionalNote: "",
  editingItemId: null,
  isLoading: false,
  error: null,
};

export const ItemsThunk = createAsyncThunk(
  "Items/ItemsThunk",
  async (newItem: Items, { rejectWithValue }) => {
    try {
      const response = await fetch("http://localhost:3000/items", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newItem),
      });

      if (!response.ok) throw new Error("Failed to add item");
      return (await response.json()) as Items;
    } catch (error) {
      return rejectWithValue((error as Error).message);
    }
  },
);

export const getItemsThunk = createAsyncThunk(
  "Items/getItemsThunk",
  async (userId: string, { rejectWithValue }) => {
    try {
      const response = await fetch(
        `http://localhost:3000/items?userId=${userId}`,
        {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        },
      );

      if (!response.ok) throw new Error("Failed to fetch items");
      return (await response.json()) as Items[];
    } catch (error) {
      return rejectWithValue((error as Error).message);
    }
  },
);

export const deleteItemThunk = createAsyncThunk(
  "Items/deleteItemThunk",
  async (id: string, { rejectWithValue }) => {
    try {
      const response = await fetch(`http://localhost:3000/items/${id}`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
      });

      if (!response.ok) throw new Error("Failed to delete item from the list");
      return id;
    } catch (error) {
      return rejectWithValue((error as Error).message);
    }
  },
);

export const updateItemThunk = createAsyncThunk(
  "Items/updateItemThunk",
  async (updatedItem: Items, { rejectWithValue }) => {
    try {
      const response = await fetch(
        `http://localhost:3000/items/${updatedItem.id}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(updatedItem),
        },
      );

      if (!response.ok) throw new Error("Failed to update item");
      return (await response.json()) as Items;
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
    setEditingItem: (state, action: PayloadAction<Items>) => {
      state.editingItemId = action.payload.id || null;
      state.name = action.payload.name;
      state.quantity = action.payload.quantity;
      state.optionalNote = action.payload.optionalNote;
    },
    clearEditingItem: (state) => {
      state.editingItemId = null;
      state.name = "";
      state.quantity = 0;
      state.optionalNote = "";
    },
  },
  extraReducers: (builder) => {
    builder

      .addCase(ItemsThunk.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(ItemsThunk.fulfilled, (state, action: PayloadAction<Items>) => {
        state.isLoading = false;
        state.items.push(action.payload);
        state.name = "";
        state.quantity = 0;
        state.optionalNote = "";
      })
      .addCase(ItemsThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      })

      .addCase(
        getItemsThunk.fulfilled,
        (state, action: PayloadAction<Items[]>) => {
          state.items = action.payload;
        },
      )

      .addCase(
        deleteItemThunk.fulfilled,
        (state, action: PayloadAction<string>) => {
          state.items = state.items.filter(
            (item) => item.id !== action.payload,
          );
        },
      )

      .addCase(updateItemThunk.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(
        updateItemThunk.fulfilled,
        (state, action: PayloadAction<Items>) => {
          state.isLoading = false;
          state.items = state.items.map((item) =>
            item.id === action.payload.id ? action.payload : item,
          );
          state.editingItemId = null;
          state.name = "";
          state.quantity = 0;
          state.optionalNote = "";
        },
      )
      .addCase(updateItemThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      });
  },
});

export const {
  addName,
  addQuantity,
  addOptionalnote,
  setEditingItem,
  clearEditingItem,
} = ItemSlice.actions;
export default ItemSlice.reducer;
