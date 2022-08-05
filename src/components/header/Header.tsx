import React, {FC, useState} from 'react'
import s from './Header.module.scss'
import forButtonImg from '../../assets/actionMenuButton.png'
import {LogoLink} from "./logoLink/LogoLink"
import {NavBlock} from "../secondary/navBlock/NavBlock"
import {ActionMenu} from "./actionMenu/ActionMenu"

export const Header: FC = () => {
  const [openMenu, setOpenMenu] = useState(false)

  return (
    <header className={s.header}>
      <LogoLink/>
      <div className={s.headerNavBox}>
        <NavBlock className={s.headerNav}/>
        <div className={s.actionMenuButton}
        onClick={()=>setOpenMenu(true)}>
          <img src={forButtonImg} alt='X'/>
        </div>
      </div>
        <ActionMenu openMenu={openMenu} setOpenMenu={setOpenMenu}/>
    </header>
  )
}