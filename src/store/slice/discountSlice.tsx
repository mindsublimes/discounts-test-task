import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface DiscountState {
  discountCode: string;
}

const initialState: DiscountState = {

  discountCode: '',
};

const discountSlice = createSlice({
  name: 'discount',
  initialState,
  reducers: {
    setDiscountCode(state, action: PayloadAction<string>) {
      state.discountCode = action.payload;
    },
  },
});

export const { setDiscountCode } = discountSlice.actions;
export default discountSlice.reducer;
