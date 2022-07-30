import {FC} from "react"
import s from './Navigation.module.scss'
import {NavItem} from "./navItem/NavItem";

export const Navigation: FC = () => {
  return (
    <div className={s.navigation}>
      <NavItem text='HOME' path='/'/>
      <NavItem text='ABOUT' path='/about'/>
      <NavItem text='WORK' path='/work'/>
      <NavItem text='CONTACT' path='/contacts'/>
    </div>
  )
}