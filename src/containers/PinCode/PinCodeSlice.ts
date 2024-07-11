import {createSlice, PayloadAction} from '@reduxjs/toolkit';

const correctPin = '1337';

export interface PinCodeState {
  code: string;
  message: string;
}

const initialState: PinCodeState = {
  code: '',
  message: '',
};

export const PinCodeSlice = createSlice({
  name: 'pinCode',
  initialState,
  reducers: {
    checkPinCode: (state: PinCodeState) => {
      if (state.code.length === 4 && state.code === correctPin) {
        state.message = 'Access Granted';
      } else {
        state.message = 'Access Denied';
      }
    },
    pressNumKeys: (state: PinCodeState, action: PayloadAction<number>) => {
      if (state.code.length < 4) {
        state.code = state.code + action.payload.toString();
      }
    },
    pressBackspace: (state: PinCodeState) => {
      if (state.code.length > 0) {
        state.code = state.code.slice(0, -1);
      }
      state.message = '';
    }
  },
});

export const pinCodeReducer = PinCodeSlice.reducer;
export const {
  checkPinCode,
  pressNumKeys,
  pressBackspace
} = PinCodeSlice.actions;

