import { createSlice, createAsyncThunk, createAction } from "@reduxjs/toolkit";
// import fav


const initialState = {
    cart: [
        {color: "#910d0d",
        id: 3,
        image: "product/P9Fz9PoyMChdZATHQqEoYWVgZqLExSFp9wk2JCrM.png",
        name: "younes",
        price: 234,
        quantity: 1,
        slug:'service',
        size: "S"},
        {color: "#910d0d",
        id: 9,
        image: "product/P9Fz9PoyMChdZATHQqEoYWVgZqLExSFp9wk2JCrM.png",
        name: "younes",
        price: 234,
        slug:'service',
        quantity: 1,
        size: "S"},
    ],
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
        const newObject = action.payload;
        const existingIndex = state.cart.findIndex((obj) => obj.id === newObject.id);
        if (existingIndex !== -1) {
            state.cart.splice(existingIndex, 1, newObject);
        } else {
            state.cart.push(newObject);
        }
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
