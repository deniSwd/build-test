import React, {FC} from 'react'
import s from './Header.module.scss'
import {NavLink} from "react-router-dom";

export const Header: FC = () => {
  /*  const count = useAppSelector(selectCount)
    const dispatch = useAppDispatch()*/

  return (
    <div className={s.header}>
      <NavLink to='/'>Home</NavLink>
      <NavLink to='/about'>About</NavLink>
      <NavLink to='/work'>Work</NavLink>
      <NavLink to='/contacts'>Contacts</NavLink>
    </div>
  )
}