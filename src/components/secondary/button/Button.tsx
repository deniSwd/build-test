import {FC} from "react"
import s from "./Button.module.scss"
import cn from 'classnames'

type ButtonProps = {
  className: string
  buttonName: string
  onClickFunction: () => void
}

export const Button: FC<ButtonProps> = ({className, buttonName, onClickFunction}) => {
  return (
    <div>
      <button onClick ={onClickFunction}
        className={cn(s.button, className)}>
        {buttonName}
      </button>
    </div>
  )
}