import { createSlice, createAsyncThunk, createAction } from "@reduxjs/toolkit";
// import fav


const initialState = {
    cart: [],
    isError: false,
    isLoading: false,
    isSuccess: false,
    message: "",
};


// export const resetStateComment = createAction("RevertAll");

export const cartsSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    addToCart: (state, action) => {
        state.cart.push(action.payload);
    },
    removeFromCart: (state, action) => {
        console.log(action.payload)
        state.cart=state.cart.filter((product) => product.id !== action.payload);
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


export const { addToCart,removeFromCart  } = cartsSlice.actions;
export default cartsSlice.reducer;
