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
      return await commentService.createComment(commentData);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
export const getComments = createAsyncThunk(
  "comment/get-comments",
  async (productID, thunkAPI) => {
    try {
      return await commentService.getComments(productID);
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
      // --------create comment---------
      .addCase(createComment.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createComment.fulfilled, (state, action) => {
        state.isError = false;
        state.isLoading = false;
        state.isSuccess = true;
        const obj={
          user:action.payload[1],
          ...action.payload[0]
        }
        state.comments=[obj,...state.comments]
        console.log(obj)
        state.comment=obj
        // state.comments = action.payload.user;
        state.message = "success";
      })
      .addCase(createComment.rejected, (state, action) => {
        state.isError = true;
        state.isSuccess = false;

        // state.message = action.payload.response.data.errors;
        state.isLoading = false;
      })
      // --------create comment---------
      // --------get comment---------
      .addCase(getComments.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getComments.fulfilled, (state, action) => {
        state.isError = false;
        state.isLoading = false;
        state.isSuccess = true;
        state.comments = action.payload;
        state.message = "success";
      })
      .addCase(getComments.rejected, (state, action) => {
        state.isError = true;
        state.isSuccess = false;
        // state.message = action.payload.response.data.errors;
        state.isLoading = false;
      })
      // --------get comment---------
  },
});



export default authSlice.reducer;
