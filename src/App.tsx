import React, {FC} from 'react'
import s from './App.module.scss'
import {Header} from "./components/header/Header";
import {RoutesPage} from "./components/RoutesPage";
import {Footer} from "./components/footer/Footer";

export const App: FC = () => {
  return (
    <div className={s.app}>
      <Header/>
      <RoutesPage/>
      <Footer/>
    </div>
  )
}


