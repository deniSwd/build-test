import {FC} from "react"
import s from './PageTitle.module.scss'

type PageTitleProps ={
  titleText:string
}

export const PageTitle: FC<PageTitleProps> = ({titleText}) => {
  return (
    <section className={s.pageTitle}>
      <h1>
        {titleText}
      </h1>
    </section>
  )
}