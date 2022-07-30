import React, {FC} from 'react'
import s from './Work.module.scss'
import {PageTitle} from "../../secondary/mainPageTitle/PageTitle";

export const Work: FC = () => {
  /*  const count = useAppSelector(selectCount)
    const dispatch = useAppDispatch()*/

  return (
    <div className={s.work}>
      <PageTitle titleText='CHECK OUT WHAT I CAN DO'/>
      Work
    </div>
  )
}
