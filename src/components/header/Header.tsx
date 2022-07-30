import React, {FC} from 'react'
import s from './Header.module.scss'
import {Navigation} from "./navigation/Navigation";
import {LogoLink} from "./logoLink/LogoLink";

export const Header: FC = () => {

  return (
    <header className={s.header}>
      <LogoLink/>
      <Navigation/>
    </header>
  )
}