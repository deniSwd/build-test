import {FC} from 'react'
import s from './NavItem.module.scss'
import {NavLink} from 'react-router-dom'
import cn from 'classnames'

type NavItemProps = {
  text: string
  path: string
  className: string
  setOpenMenu?: (openMenu:boolean)=>void
}

export const NavItem: FC<NavItemProps> = ({text, path, className,setOpenMenu}) => {
  return (
    <NavLink to={path}
             onClick={()=>setOpenMenu?.(false)}
             className={({isActive}) => isActive ? cn(s.activeNav, className) : cn(s.navItem, className)}>
      {text}
    </NavLink>
  )
}