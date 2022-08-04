import {FC} from "react"
import s from './FooterTitle.module.scss'
import {Button} from "../../secondary/button/Button";
import {useNavigate} from "react-router-dom";

export const FooterTitle: FC = () => {
  const navigate = useNavigate()
  return (
    <section className={s.footerTitle}>
      <h1>
        A YOU READY TO BE BLOWN AWAY
      </h1>
      <Button onClick={() => navigate('/')}
              className={s.footerButton}
              buttonName={'CLICK HEAR TO FIND OUT'}/>
    </section>
  )
}