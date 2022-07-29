import {FC} from "react"
import s from './Navigation.module.scss'
import {NavItem} from "./navItem/NavItem";

export const Navigation: FC = () => {
  return (
    <div className={s.navigation}>
      <NavItem text='Home' path='/'/>
      <NavItem text='About' path='/about'/>
      <NavItem text='Work' path='/work'/>
      <NavItem text='Contacts' path='/contacts'/>
    </div>
  )
}