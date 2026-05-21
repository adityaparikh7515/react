import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

/*
  Async Login API Simulation
*/

export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async (userData, thunkAPI) => {
    try {
      // Fake API delay
      await new Promise((resolve) =>
        setTimeout(resolve, 1000)
      );

      // Fake validation
      if (
        userData.email === "admin@gmail.com" &&
        userData.password === "123456"
      ) {
        return {
          id: 1,
          name: "Rahul",
          email: userData.email,
          token: "jwt-token-demo",
        };
      } else {
        return thunkAPI.rejectWithValue(
          "Invalid email or password"
        );
      }
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.message
      );
    }
  }
);

const initialState = {
  user: null,
  token: null,
  isLoading: false,
  isSuccess: false,
  isError: false,
  message: "",
};

const authSlice = createSlice({
  name: "auth",

  initialState,

  reducers: {
    logout: (state) => {
      state.user = null;
      state.token = null;
      state.isSuccess = false;
    },

    resetState: (state) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = false;
      state.message = "";
    },
  },

  extraReducers: (builder) => {
    builder

      // LOGIN PENDING
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true;
      })

      // LOGIN SUCCESS
      .addCase(loginUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.user = action.payload;
        state.token = action.payload.token;
      })

      // LOGIN FAILED
      .addCase(loginUser.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export const {
  logout,
  resetState,
} = authSlice.actions;

export default authSlice.reducer;