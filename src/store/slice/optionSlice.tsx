
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface OptionState {
  selectedOption: string | null;
}

const initialState: OptionState = {
  selectedOption: null,
};

const optionSlice = createSlice({
  name: 'option',
  initialState,
  reducers: {
    selectOption(state, action: PayloadAction<string>) {
      state.selectedOption = action.payload;
    },
  },
});

export const { selectOption } = optionSlice.actions;

export default optionSlice.reducer;