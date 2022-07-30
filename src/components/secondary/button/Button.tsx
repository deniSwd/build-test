import {FC} from "react"
import s from "./Button.module.scss"
import cn from 'classnames'

type ButtonProps = {
  className: string
  buttonName: string
}

export const Button: FC<ButtonProps> = ({className, buttonName}) => {
  return (
    <div>
      <button className={cn(s.button,className)}>{buttonName}</button>
    </div>
  )
}