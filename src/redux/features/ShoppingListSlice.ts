import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface List {
  id?: string;
  userId: string;
  category: string;
}

interface ListState extends List {
  lists: List[];
  isLoading: boolean;
  error: string | null;
}

const initialState: ListState = {
  lists: [],
  userId: '',
  category: "",
  isLoading: false,
  error: null,
};

export const createList = createAsyncThunk(
  "List/ListThunk",
  async (newList: Omit<List, "id">) => {
    const response = await fetch("http://localhost:3000/list", {
      method: "POST",
      headers: {
        "content-Type": "application/json",
      },
      body: JSON.stringify(newList),
    });
    if (!response.ok) {
      throw new Error("failed to add list");
    }
    const data = await response.json();
    return data;
  },
);

export const getList = createAsyncThunk(
  "List/getListThunk", 
  async () => {
  const response = await fetch(`http://localhost:3000/list}`, {
    method: "GET",
    headers: {
      "content-Type": "application/json",
    },
  });

  if (!response.ok) {
    throw new Error("failed to add list");
  }
  const data = await response.json();
  console.log(data);
  return data;
});

export const deleteList = createAsyncThunk(
  "List/deleteList",
  async (id: string, { rejectWithValue }) => {
    try {
      const response = await fetch(`http://localhost:3000/list/${id}`, {
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

export const ListSlice = createSlice({
  name: "addCategory",
  initialState,
  reducers: {
    addCategory: (state, action: PayloadAction<string>) => {
      state.category = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(createList.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(
      createList.fulfilled,
      (state, action: PayloadAction<List>) => {
        state.isLoading = false;
        state.lists = [...state.lists, action.payload];
      },
    );

    builder.addCase(createList.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload as string;
    });

    builder.addCase(getList.fulfilled, (state, action) => {
      state.isLoading = false;
      state.lists = action.payload;
    });
    builder.addCase(deleteList.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(deleteList.fulfilled, (state, action) => {
      state.isLoading = false;
      state.lists = state.lists.filter((list) => list.id !== action.payload);
    });

    builder.addCase(deleteList.rejected, (state, action) => {
      state.isLoading = false;
      state.error = (action.payload as string) || "Failed to delete list";
    });
  },
});

export const { addCategory } = ListSlice.actions;

export default ListSlice.reducer;
