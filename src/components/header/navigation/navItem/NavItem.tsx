import {FC} from "react"
import s from './NavItem.module.scss'
import {NavLink} from "react-router-dom";

type NavItemProps = {
  text: string
  path: string
}

export const NavItem: FC<NavItemProps> = ({text, path}) => {
  return (
    <NavLink to={path} className={s.navItem}>
      {text}
    </NavLink>
  )
}