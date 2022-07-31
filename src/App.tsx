import React, {FC, useEffect} from 'react'
import s from './App.module.scss'
import {Header} from "./components/header/Header";
import {RoutesPage} from "./components/RoutesPage";
import {Footer} from "./components/footer/Footer";
import AOS from 'aos'

export const App: FC = () => {
  useEffect(()=>{
    AOS.init()
  },[])
  return (
    <div className={s.app}>
      <Header/>
      <RoutesPage/>
      <Footer/>
    </div>
  )
}


