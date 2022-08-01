import {FC} from "react"
import s from './videoPopUp.module.scss'

export const VideoPopUp: FC = () => {
  return (
    <iframe className={s.frame}
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            title="YouTube video player"
            frameBorder='no'
            allowFullScreen>
    </iframe>
  )
}
