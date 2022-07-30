import React, {FC} from 'react'
import s from './About.module.scss'
import {PageTitle} from "../../secondary/mainPageTitle/PageTitle";

export const About: FC = () => {
  /*  const count = useAppSelector(selectCount)
    const dispatch = useAppDispatch()*/

  return (
    <div className={s.about}>
      <PageTitle titleText='ABOUT MY BUSSINES'/>
      About
    </div>
  )
}
