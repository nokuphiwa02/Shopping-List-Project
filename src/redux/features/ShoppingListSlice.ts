import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface List {
  id?: string;
  category: string;
}

interface ListState extends List {
  lists:List[];
  isLoading: boolean;
  error: string | null;
}

const initialState: ListState = {
  lists: [],
  category: "",
  isLoading: false,
  error: null,
};

export const ListThunk = createAsyncThunk(
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

export const getListThunk = createAsyncThunk(
  "List/getListThunk",
  async () => {
    const response = await fetch("http://localhost:3000/list", {
      method: "GET",
      headers: {
        "content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error("failed to add list");
    }
    const data = await response.json();
    console.log(data)
    return data;
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
    builder.addCase(ListThunk.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
   builder.addCase(ListThunk.fulfilled, (state, action: PayloadAction<List>) => {
      state.isLoading = false;
      state.lists.push(action.payload); 
    });

    builder.addCase(ListThunk.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload as string;
    });
    builder.addCase(getListThunk .fulfilled, (state, action: PayloadAction<List>) => {
          state.isLoading = false;
          state.lists.push(action.payload); 
        });

  },
});

export const { addCategory } = ListSlice.actions;

export default ListSlice.reducer;
