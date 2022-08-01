import React, {FC, useEffect} from 'react'
import s from './App.module.scss'
import {Header} from "./components/header/Header";
import {RoutesPage} from "./components/RoutesPage";
import {Footer} from "./components/footer/Footer";
import AOS from 'aos'
import {useAppSelector} from "./store/hooks";
import {selectPopUp} from "./store/popUpSlice";

export const App: FC = () => {
  const popUp = useAppSelector(selectPopUp)
  useEffect(()=>{
    AOS.init()
  },[])
  return (
    <div className={s.app}>
      {popUp.map(i => i.jsxData)}
      <Header/>
      <RoutesPage/>
      <Footer/>
    </div>
  )
}


