import { createSlice, createAsyncThunk, createAction } from "@reduxjs/toolkit";
// import fav


const initialState = {
    favorites: [],
    isError: false,
    isLoading: false,
    isSuccess: false,
    message: "",
};


// export const resetStateComment = createAction("RevertAll");

export const favoritesSlice = createSlice({
  name: "favorites",
  initialState: initialState,
  reducers: {
    addToFavorites: (state, action) => {
        state.favorites.push(action.payload);
    },
    removeFromFavorites: (state, action) => {
        console.log(action.payload)
        state.favorites=state.favorites.filter((product) => product.id !== action.payload);
    },
  },
  extraReducers: (buildeer) => {
    buildeer
      // --------create comment---------
    //   .addCase(createComment.pending, (state) => {
    //     state.isLoading = true;
    //   })
    //   .addCase(createComment.fulfilled, (state, action) => {
    //     state.isError = false;
    //     state.isLoading = false;
    //     state.isSuccess = true;
    //     const obj={
    //       user:action.payload[1],
    //       ...action.payload[0]
    //     }
    //     state.comments=[obj,...state.comments]
    //     console.log(obj)
    //     state.comment=obj
    //     // state.comments = action.payload.user;
    //     state.message = "success";
    //   })
    //   .addCase(createComment.rejected, (state, action) => {
    //     state.isError = true;
    //     state.isSuccess = false;

    //     // state.message = action.payload.response.data.errors;
    //     state.isLoading = false;
    //   })
      // --------create comment---------


    //   .addCase(resetStateComment, () => initialState);
  },
});


export const { addToFavorites,removeFromFavorites  } = favoritesSlice.actions;
export default favoritesSlice.reducer;
