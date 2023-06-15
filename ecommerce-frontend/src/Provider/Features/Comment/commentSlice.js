import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import commentService from "./commentServices";


const initialState = {
  comments: [],
  isError: false,
  isLoading: false,
  isSuccess: false,
  message: "",
};
export const createComment = createAsyncThunk(
  "comment/create-comment",
  async (commentData, thunkAPI) => {
    try {
        console.log(commentData)
      return await commentService.createComment(commentData);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const authSlice = createSlice({
  name: "comment",
  initialState: initialState,
  reducers: {
  },
  extraReducers: (buildeer) => {
    buildeer
      .addCase(createComment.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createComment.fulfilled, (state, action) => {
        state.isError = false;
        state.isLoading = false;
        state.isSuccess = true;
        // state.comments = action.payload.user;
        state.message = "success";
      })
      .addCase(createComment.rejected, (state, action) => {
        state.isError = true;
        state.isSuccess = false;
        // state.message = action.payload.response.data.errors;
        state.isLoading = false;
      })
  },
});



export default authSlice.reducer;
