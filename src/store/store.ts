import {Action, configureStore, ThunkAction} from '@reduxjs/toolkit'
import mainReducer from './mainSlice'
import popUpReducer from './popUpSlice'

export const store = configureStore({
  reducer: {
    main: mainReducer,
    popUps: popUpReducer
  },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType,
  RootState,
  unknown,
  Action<string>>
