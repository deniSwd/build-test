import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {RootState} from './store'
import {AddJsxFunc, PopUpType} from "../mainTypes"

export interface popUpState {
  popUp: Array<PopUpType>
}

const initialState: popUpState = {
  popUp: []
}

export const popUpSlice = createSlice({
  name: 'popUp',
  initialState,
  reducers: {
    createPopUp: (state, action: PayloadAction<AddJsxFunc>) => {
      const id = Date.now()
      state.popUp.push({
        id,
        jsxData: action.payload(id)
      })
    },
    closePopUp: (state, action: PayloadAction<number>) => {
      state.popUp = state.popUp.filter(i => i.id !== action.payload)
    }
  },
})

export const {createPopUp, closePopUp} = popUpSlice.actions

export const selectPopUp = (state: RootState) => state.popUps.popUp

/*export const incrementIfOdd =
  (amount: number): AppThunk =>
  (dispatch, getState) => {
    const currentValue = selectCount(getState());
    if (currentValue % 2 === 1) {
      dispatch(incrementByAmount(amount));
    }
  };*/

export default popUpSlice.reducer