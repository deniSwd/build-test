import {FC, ReactNode} from "react"
import s from './popUpWrap.module.scss'
import {useAppDispatch} from "../../../store/hooks";
import {closePopUp} from "../../../store/popUpSlice";

export const PopUpWrap:FC<{id: number, children?: ReactNode}> =({ id, children }) => {
  const dispatch = useAppDispatch()

  return (
    <div className={s.popUp}>
      <div className={s.contentBox}>
        <button className={s.popUpButton}
          onClick={() => {dispatch(closePopUp(id))}}>Close</button>
        {children}
      </div>
    </div>
  )
}
