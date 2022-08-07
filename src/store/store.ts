import {Action, configureStore, ThunkAction} from '@reduxjs/toolkit'
import worksReducer from './worksSlice'
import popUpReducer from './popUpSlice'

export const store = configureStore({
  reducer: {
    popUps: popUpReducer,
    works: worksReducer
  },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType,
  RootState,
  unknown,
  Action<string>>
