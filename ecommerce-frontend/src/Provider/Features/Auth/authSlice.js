import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import authService from "./authServices";

const getUserfromLocalStorage = localStorage.getItem("user")
  // ? JSON.parse(localStorage.getItem("user"))
  // : null;
const initialState = {
  user: getUserfromLocalStorage,
  orders: [],
  isError: false,
  isLoading: false,
  isSuccess: false,
  message: "",
};
export const login = createAsyncThunk(
  "auth/login",
  async (userData, thunkAPI) => {
    try {
        console.log(userData)
      return await authService.login(userData);
    } catch (error) {
        console.log(error)
      return thunkAPI.rejectWithValue(error);
    }
  }
);
export const register = createAsyncThunk(
  "auth/register",
  async (userData, thunkAPI) => {
    try {
        console.log(userData)
      return await authService.register(userData);
    } catch (error) {
        console.log(error)
      return thunkAPI.rejectWithValue(error);
    }
  }
);
export const logout = createAsyncThunk(
  "auth/logout",
  async (_, thunkAPI) => { 
    try {
      return await authService.logout();
      
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
export const getUser = createAsyncThunk(
  "auth/get-user",
  async (thunkAPI) => {
    try {
      return await authService.getUser();
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
export const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
  },
  extraReducers: (buildeer) => {
    buildeer
      .addCase(register.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.isError = false;
        state.isLoading = false;
        state.isSuccess = true;
        console.log(action)
        state.user = action.payload.user;
        state.message = "success";
      })
      .addCase(register.rejected, (state, action) => {
        state.isError = true;
        state.isSuccess = false;
        state.message = action.payload.response.data.errors;
        state.isLoading = false;
      })
      .addCase(login.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isError = false;
        state.isLoading = false;
        state.isSuccess = true;
        console.log(action)
        state.user = action.payload.user;
        state.message = "success";
      })
      .addCase(login.rejected, (state, action) => {
        state.isError = true;
        state.isSuccess = false;
        console.log(action)
        // state.message = action.payload.response.data.errors;
        state.isLoading = false;
      })
    // logout
    .addCase(logout.pending, (state) => {
        state.isLoading = true;
        console.log('loading')

      })
      .addCase(logout.fulfilled, (state) => {
        state.isLoading = false;
        state.isSuccess = true;
        
        // console.log(action)
        state.user = null;
        console.log(state.user)
        // state.message = action.payload;
      })
      .addCase(logout.rejected, (state, action) => {
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
        state.isLoading = false;
        
        console.log('rejected')
        console.log(action)

      })
    // logout
    //   -----get-user----
      .addCase(getUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getUser.fulfilled, (state, action) => {
        state.isError = false;
        state.isLoading = false;
        state.isSuccess = true;
        state.user = action.payload;
        state.getuser = true
        console.log(action)
        state.message = "success";
      })
      .addCase(getUser.rejected, (state, action) => {
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
        console.log(action)
        state.user =null;

        state.isLoading = false;
      })
      //   -----get-user----

     
  },
});



export default authSlice.reducer;
