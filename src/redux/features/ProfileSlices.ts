import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { createAsyncThunk } from '@reduxjs/toolkit'
import type { User } from './RegisterSlice' 

interface ProfileState {
  data: User | null
  isLoading: boolean
  error: string | null
}

const initialState: ProfileState = {
  data: null,
  isLoading: false,
  error: null
}

export const FetchProfileThunk = createAsyncThunk(
  "profile/FetchProfileThunk", 
  async (userId: number, { rejectWithValue }) => {
    try {
      const response = await fetch(`http://localhost:3000/users/${userId}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        }
      });

      if (!response.ok) {
        throw new Error("Failed to fetch profile");
      }

      const data = await response.json();
      return data as User;
    } 
    catch (error: unknown) {
  return rejectWithValue((error as Error).message);
}

  }
)

export const ProfileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
   
    updateProfileData: (state, action: PayloadAction<User>) => {
      state.data = action.payload
    },

    clearProfile: (state) => {
      state.data = null;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(FetchProfileThunk.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(FetchProfileThunk.fulfilled, (state, action: PayloadAction<User>) => {
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(FetchProfileThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string || action.error.message || "Something went wrong";
      });
  }
})

export const { updateProfileData, clearProfile } = ProfileSlice.actions
export default ProfileSlice.reducer
