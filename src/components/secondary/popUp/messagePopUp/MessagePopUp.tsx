import {FC} from "react";
import  s from './MessagePopUp.module.scss'

type MessagePopUpProps = {
  name:string
}

export const MessagePopUp:FC<MessagePopUpProps> = ({name}) => {
  return (
    <div className={s.message}>
      <h1>Hi {name} !</h1>
      <p>Message was sent.</p>
    </div>
  )
}