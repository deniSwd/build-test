import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {AppThunk, RootState} from './store'
import {WorksType} from "../mainTypes"
import {userAPI} from "../API/api";

export interface WorksState {
  works: WorksType
}

const initialState: WorksState = {
  works: []
}

export const worksSlice = createSlice({
  name: 'works',
  initialState,
  reducers: {
    setWorks: (state, action: PayloadAction<WorksType>) => {
      state.works = action.payload
    }
  },
})

export const {setWorks} = worksSlice.actions

export const selectWorks = (state: RootState) => state.works.works

export const getWorks = (): AppThunk => async (dispatch) => {
  const {works} = await userAPI.getWorks()
  console.log(works)
  dispatch(setWorks(works))
}

export default worksSlice.reducer