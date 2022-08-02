import {FC} from "react"
import s from './ServisesButton.module.scss'
import {useNavigate} from "react-router-dom";

type ServicesButtonProps = {
  servicesImg: string
}

export const ServicesButton: FC<ServicesButtonProps> = ({servicesImg}) => {
  const navigate = useNavigate()

  return (
    <button className={s.servicesButton}
            onClick={() => navigate('/work')}>
      <img src={servicesImg} alt='services'/>
    </button>
  )
}