import React, {FC} from 'react'
import s from './About.module.scss'
import {PageTitle} from "../../secondary/mainPageTitle/PageTitle"
import {AboutMain} from "./aboutMain/AboutMain";
import {AboutServises} from "./aboutServices/AboutServises";
import {AboutList} from "./aboutList/AboutList";

export const About: FC = () => {
  /*  const count = useAppSelector(selectCount)
    const dispatch = useAppDispatch()*/

  return (
    <main className={s.about}>
      <PageTitle titleText='ABOUT MY BUSSINES'/>
      <AboutMain/>
      <AboutServises/>
      <AboutList/>
    </main>
  )
}
