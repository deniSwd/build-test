import {FC} from "react"
import s from "./Button.module.scss"
import cn from 'classnames'

type ButtonProps = {
  className: string
  buttonName: string
  onClickFunction: () => void
  flip?: string
  mirror?: string
  duration?: string
  delay?: string
}

export const Button: FC<ButtonProps> = ({
                                          className,
                                          buttonName,
                                          onClickFunction,
                                          flip,
                                          mirror,
                                          duration,
                                          delay
                                        }) => {
  return (
    <div>
      <button onClick={onClickFunction}
              className={cn(s.button, className)}
              data-aos={flip}
              data-aos-mirror={mirror}
              data-aos-duration={duration}
              data-aos-delay={delay}>
        {buttonName}
      </button>
    </div>
  )
}