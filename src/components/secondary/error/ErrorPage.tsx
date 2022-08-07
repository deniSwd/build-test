import React, {FC} from 'react'
import s from './Error.module.scss'

export const ErrorPage: FC = () => {

  return (
    <div className={s.errorPage}>
      404 Page not found
    </div>
  )
}