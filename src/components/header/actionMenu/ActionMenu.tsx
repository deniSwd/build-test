import {NavItem} from '../../secondary/navBlock/navItem/NavItem'
import {FC} from 'react'
import s from './ActionMenu.module.scss'
import cn from 'classnames'
import {Button} from '../../secondary/button/Button'

type ActionMenuProps = {
  openMenu: boolean
  setOpenMenu: (openMenu: boolean) => void
}

export const ActionMenu: FC<ActionMenuProps> = ({openMenu, setOpenMenu}) => {
  return (
    <nav className={cn(s.actionMenu, openMenu && s.openActionMenu)}>
      <Button className={s.closeMenuButton}
              buttonName={'close'}
              onClick={() => setOpenMenu(false)}/>
      <NavItem text='HOME'
               path='/'
               setOpenMenu={setOpenMenu}
               className={s.navItem}/>
      <NavItem text='ABOUT'
               path='/about'
               setOpenMenu={setOpenMenu}
               className={s.navItem}/>
      <NavItem text='WORK'
               path='/work'
               setOpenMenu={setOpenMenu}
               className={s.navItem}/>
      <NavItem text='CONTACT'
               path='/contacts'
               setOpenMenu={setOpenMenu}
               className={s.navItem}/>
    </nav>
  )
}