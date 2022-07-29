import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {RootState} from './store';

export interface mainState {
  value: number
}

const initialState: mainState = {
  value: 0
}

export const mainSlice = createSlice({
  name: 'main',
  initialState,
  reducers: {
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload
    },
  },
})

export const {incrementByAmount} = mainSlice.actions

export const selectCount = (state: RootState) => state.main.value

/*export const incrementIfOdd =
  (amount: number): AppThunk =>
  (dispatch, getState) => {
    const currentValue = selectCount(getState());
    if (currentValue % 2 === 1) {
      dispatch(incrementByAmount(amount));
    }
  };*/

export default mainSlice.reducer
