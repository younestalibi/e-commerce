import { createSlice, createAsyncThunk, createAction } from "@reduxjs/toolkit";
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
export const getSingleComment = createAsyncThunk(
  "comment/get-single-comment",
  async (commentID, thunkAPI) => {
    try {
      return await commentService.getSingleComment(commentID);
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
export const updateComment = createAsyncThunk(
  "comment/update-comment",
  async (commentData, thunkAPI) => {
    try {
      return await commentService.updateComment(commentData);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
export const deleteComment = createAsyncThunk(
  "comment/delete-comment",
  async (commentID, thunkAPI) => {
    try {
      return await commentService.deleteComment(commentID);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
export const resetStateComment = createAction("RevertAll");

export const commentSlice = createSlice({
  name: "comment",
  initialState: initialState,
  reducers: {
    resetSingleComment: (state) => {
      state.signleComment = null;
    },
  },
  extraReducers: (buildeer) => {
    buildeer
      // -------update comment---------
      .addCase(updateComment.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateComment.fulfilled, (state, action) => {
        state.isError = false;
        state.isLoading = false;
        state.isSuccess = true;
        const newComment={
          user:action.payload[1],
          ...action.payload[0]
        }
        const commentIndex = state.comments.findIndex(
          (comment) => comment.id === newComment.id
        );

        if (commentIndex !== -1) {
          state.comments[commentIndex] = newComment;
        }
        // state.updatedComment=true
        state.message = "success";
      })
      .addCase(updateComment.rejected, (state, action) => {
        state.isError = true;
        state.isSuccess = false;

        // state.message = action.payload.response.data.errors;
        state.isLoading = false;
      })
      // -------update comment---------
      // --------get single comment---------
      .addCase(getSingleComment.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getSingleComment.fulfilled, (state, action) => {
        state.isError = false;
        state.isLoading = false;
        state.isSuccess = true;
        state.signleComment = action.payload;
        state.message = "success";
      })
      .addCase(getSingleComment.rejected, (state, action) => {
        state.isError = true;
        state.isSuccess = false;

        // state.message = action.payload.response.data.errors;
        state.isLoading = false;
      })
      // --------get single comment---------
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
      // --------delete comment---------
      .addCase(deleteComment.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteComment.fulfilled, (state, action) => {
        state.isError = false;
        state.isLoading = false;
        state.isSuccess = true;
        // state.comments = action.payload;
        state.message = "success";
      })
      .addCase(deleteComment.rejected, (state, action) => {
        state.isError = true;
        state.isSuccess = false;
        // state.message = action.payload.response.data.errors;
        state.isLoading = false;
      })
      // --------get comment---------
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

      .addCase(resetStateComment, () => initialState);
  },
});


export const { resetSingleComment } = commentSlice.actions;

export default commentSlice.reducer;
