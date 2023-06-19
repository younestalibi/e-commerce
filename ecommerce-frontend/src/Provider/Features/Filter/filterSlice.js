import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: 'filter',
  initialState: {
    minPrice: null,
    maxPrice: null,
    gender: null,
    rating: null,
  },
  reducers: {
    setMinPrice: (state, action) => {
      state.minPrice = action.payload;
    },
    setMaxPrice: (state, action) => {
      state.maxPrice = action.payload;
    },
    setGender: (state, action) => {
      state.gender = action.payload;
    },
    setRating: (state, action) => {
      state.rating = action.payload;
    },
  },
});

export const { setMinPrice, setMaxPrice, setGender, setRating } = filterSlice.actions;
export default filterSlice.reducer;
