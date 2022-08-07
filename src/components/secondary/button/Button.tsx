import {FC} from 'react'
import s from './Button.module.scss'
import cn from 'classnames'

type ButtonProps = {
  type?: 'button' | 'submit' | 'reset'
  disabled?: any
  className: string
  buttonName: string
  onClick?: () => void
  flip?: string
  mirror?: string
  duration?: string
  delay?: string
}

export const Button: FC<ButtonProps> = ({
                                          className,
                                          buttonName,
                                          flip,
                                          mirror,
                                          duration,
                                          delay,
                                          ...props
                                        }) => {
  return (
    <div>
      <button {...props}
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