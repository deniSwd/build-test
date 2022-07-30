import {FC} from "react"
import s from './FooterTitle.module.scss'
import {Button} from "../../secondary/button/Button";

export const FooterTitle: FC = () => {
  return (
    <section className={s.footerTitle}>
      <h1>
        A YOU READY TO BE BLOWN AWAY
      </h1>
      <Button className={s.footerButton} buttonName={'CLICK HEAR TO FIND OUT'}/>
    </section>
  )
}