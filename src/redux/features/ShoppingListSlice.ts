import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface List {
  id?: string;
  userId: string;
  category: string;
}

interface ListState {
  lists: List[];
  category: string;
  editingListId: string | null;
  isLoading: boolean;
  error: string | null;
}

const initialState: ListState = {
  lists: [],
  category: "",
  editingListId: null,
  isLoading: false,
  error: null,
};

export const createList = createAsyncThunk(
  "List/ListThunk",
  async (newList: Omit<List, "id">, { rejectWithValue }) => {
    try {
      const response = await fetch("http://localhost:3000/list", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newList),
      });
      if (!response.ok) throw new Error("Failed to add list");
      return (await response.json()) as List;
    } catch (error) {
      return rejectWithValue((error as Error).message);
    }
  },
);

export const getList = createAsyncThunk(
  "List/getListThunk",
  async (userId: string, { rejectWithValue }) => {
    try {
      const response = await fetch(
        `http://localhost:3000/list?userId=${userId}`,
        {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        },
      );
      if (!response.ok) throw new Error("Failed to fetch list");
      return (await response.json()) as List[];
    } catch (error) {
      return rejectWithValue((error as Error).message);
    }
  },
);

export const deleteList = createAsyncThunk(
  "List/deleteList",
  async (id: string, { rejectWithValue }) => {
    try {
      const response = await fetch(`http://localhost:3000/list/${id}`, {
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

export const updateList = createAsyncThunk(
  "List/updateList",
  async (updatedList: List, { rejectWithValue }) => {
    try {
      const response = await fetch(
        `http://localhost:3000/list/${updatedList.id}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(updatedList),
        },
      );
      if (!response.ok) throw new Error("Failed to update item");
      return (await response.json()) as List;
    } catch (error) {
      return rejectWithValue((error as Error).message);
    }
  },
);

export const ListSlice = createSlice({
  name: "addCategory",
  initialState,
  reducers: {
    addCategory: (state, action: PayloadAction<string>) => {
      state.category = action.payload;
    },

    setEditingList: (state, action: PayloadAction<List>) => {
      state.editingListId = action.payload.id || null;
      state.category = action.payload.category;
    },
    clearEditingMode: (state) => {
      state.editingListId = null;
      state.category = "";
    },
  },
  extraReducers: (builder) => {
    builder

      .addCase(createList.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createList.fulfilled, (state, action: PayloadAction<List>) => {
        state.isLoading = false;
        state.lists.push(action.payload);
        state.category = "";
      })

      .addCase(getList.fulfilled, (state, action: PayloadAction<List[]>) => {
        state.lists = action.payload;
      })

      .addCase(deleteList.fulfilled, (state, action: PayloadAction<string>) => {
        state.isLoading = false;
        state.lists = state.lists.filter((item) => item.id !== action.payload);
      })

      .addCase(updateList.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateList.fulfilled, (state, action: PayloadAction<List>) => {
        state.isLoading = false;
        state.lists = state.lists.map((item) =>
          item.id === action.payload.id ? action.payload : item,
        );
        state.editingListId = null;
        state.category = "";
      })
      .addCase(updateList.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      });
  },
});

export const { addCategory, setEditingList, clearEditingMode } =
  ListSlice.actions;
export default ListSlice.reducer;
