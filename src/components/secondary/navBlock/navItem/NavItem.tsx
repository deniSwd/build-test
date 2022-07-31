import {FC} from "react"
import s from './NavItem.module.scss'
import {NavLink} from "react-router-dom";
import cn from "classnames";

type NavItemProps = {
  text: string
  path: string
  className: string
}

export const NavItem: FC<NavItemProps> = ({text, path, className}) => {
  return (
    <NavLink to={path} className={({isActive}) => isActive ? cn(s.activeNav, className) : cn(s.navItem, className)}>
      {text}
    </NavLink>
  )
}