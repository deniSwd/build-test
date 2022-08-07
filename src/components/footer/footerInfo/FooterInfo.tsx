import {FC} from 'react'
import s from './FooterInfo.module.scss'
import {NavBlock} from '../../secondary/navBlock/NavBlock'

export const FooterInfo: FC = () => {
  return (
    <article className={s.footerInfo}>
      <div className={s.contentWrap}>
        <span>COPYRIGHT 2013 DISPLAY. ALL RIGHTS RESERVED.</span>
        <NavBlock className={s.footerNav} separator={'/'}/>
      </div>
    </article>
  )
}