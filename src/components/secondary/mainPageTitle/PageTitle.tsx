import {FC} from 'react'
import s from './PageTitle.module.scss'

type PageTitleProps = {
  titleText: string
}

export const PageTitle: FC<PageTitleProps> = ({titleText}) => {
  return (
    <section className={s.pageTitle}>
      <div className={s.contentWrap}>
        <h1>{titleText}</h1>
      </div>
    </section>
  )
}