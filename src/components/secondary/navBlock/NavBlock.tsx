import {FC} from 'react'
import s from './NavBlock.module.scss'
import {NavItem} from './navItem/NavItem'

type NavBlockProps = {
  className: string
  separator?: string
}

export const NavBlock: FC<NavBlockProps> = ({className,  separator}) => {
  return (
    <nav className={separator ? s.navFooter : s.navHeader }>
      <NavItem text='HOME' path='/' className={className}/>
      {separator && <p>{separator}</p>}
      <NavItem text='ABOUT' path='/about' className={className}/>
      {separator && <p>{separator}</p>}
      <NavItem text='WORK' path='/work' className={className}/>
      {separator && <p>{separator}</p>}
      <NavItem text='CONTACT' path='/contacts' className={className} />
    </nav>
  )
}