import { configureStore } from '@reduxjs/toolkit';
import discountReducer from './slice/discountSlice';
import notesReducer from './slice/notesSlice';
import optionReducer from './slice/optionSlice';

export const store = configureStore({
    reducer: {
    option: optionReducer,
    discount: discountReducer,
    notes: notesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
