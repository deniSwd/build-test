import {FC} from "react"
import s from './Video.module.scss'

export const Video:FC = () =>{
  return(
    <section className={s.video}>
      <div className={s.preview}>
        preview
      </div>
      <div className={s.description}></div>
    </section>
  )
}