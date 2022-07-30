import {FC} from "react"
import s from './FooterInfo.module.scss'
import {NavBlock} from "../../secondary/navBlock/NavBlock";

export const FooterInfo: FC = () => {
  return (
    <div className={s.footerInfo}>
      <p>COPYRIGHT 2013 DISPLAY. ALL RIGHTS RESERVED.</p>
      <NavBlock className={s.footerNav} separator={'/'}/>
    </div>
  )
}