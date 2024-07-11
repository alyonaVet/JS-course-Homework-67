import {configureStore} from '@reduxjs/toolkit';
import {pinCodeReducer, PinCodeState} from '../containers/PinCode/PinCodeSlice';

export const store = configureStore<{pinCode: PinCodeState}>({
  reducer: {
    pinCode: pinCodeReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

