import React, {FC} from 'react'
import s from './About.module.scss'
import {PageTitle} from "../../secondary/mainPageTitle/PageTitle"
import {AboutMain} from "./aboutMain/AboutMain"
import {AboutServises} from "./aboutServices/AboutServises"
import {AboutList} from "./aboutList/AboutList"

export const About: FC = () => {

  return (
    <main className={s.about}>
      <PageTitle titleText='about my bussines'/>
      <AboutMain/>
      <AboutServises/>
      <AboutList/>
    </main>
  )
}
