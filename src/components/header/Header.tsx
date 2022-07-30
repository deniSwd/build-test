import React, {FC} from 'react'
import s from './Header.module.scss'
import {LogoLink} from "./logoLink/LogoLink";
import {NavBlock} from "../secondary/navBlock/NavBlock";

export const Header: FC = () => {

  return (
    <header className={s.header}>
      <LogoLink/>
      <NavBlock className={s.headerNav}/>
    </header>
  )
}