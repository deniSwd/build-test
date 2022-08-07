import {FC} from 'react'
import s from './VideoPopUp.module.scss'

export const VideoPopUp: FC = () => {
  return (
    <iframe className={s.frame}
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            title="YouTube video player"
            allowFullScreen>
    </iframe>
  )
}
