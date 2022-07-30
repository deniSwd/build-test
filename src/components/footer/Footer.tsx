import React, {FC} from 'react'
import s from './Footer.module.scss'
import {FooterTitle} from "./footerTitle/FooterTitle";
import {FooterInfo} from "./footerInfo/FooterInfo";

export const Footer: FC = () => {
  /*  const count = useAppSelector(selectCount)
    const dispatch = useAppDispatch()*/

  return (
    <footer className={s.footer}>
      <FooterTitle/>
      <FooterInfo/>
    </footer>
  )
}
