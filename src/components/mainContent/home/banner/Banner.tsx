import {FC} from 'react'
import s from './Banner.module.scss'
import bannerImg from '../../../../assets/banner-background.png'
import iPhoneImg from '../../../../assets/iPhone.png'
import iPadImg from '../../../../assets/iPad.png'
import macbookImg from '../../../../assets/macbook.png'
import {Button} from '../../../secondary/button/Button'
import {useNavigate} from 'react-router-dom'

export const Banner: FC = () => {
  const navigate = useNavigate()

  return (
    <section className={s.banner}>
      <div className={s.bannerImg}>
        <img src={bannerImg} alt={bannerImg} className={s.bannerBackground}/>
        <img src={macbookImg}
             alt='macbook'
             className={s.animateImg3}
             data-aos='fade-right'
             data-aos-mirror='true'
             data-aos-duration='1000'
             data-aos-delay='450'/>
        <img src={iPadImg}
             alt='iPad'
             className={s.animateImg2}
             data-aos='fade-down'
             data-aos-mirror='true'
             data-aos-duration='1000'
             data-aos-delay='250'/>
        <img src={iPhoneImg}
             alt='iPhone'
             className={s.animateImg1}
             data-aos='fade-up'
             data-aos-mirror='true'
             data-aos-duration='1000'
             data-aos-delay='50'/>
      </div>
      <div className={s.bannerInfo}>
        <p data-aos='fade-up'
           data-aos-mirror='true'
           data-aos-duration='1000'
           data-aos-delay='650'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Pellentesque eu erat lacus, vel congue mauris. Fusce velit justo, faucibus eu. </p>
        <Button className={s.bannerButton}
                buttonName={'BROWSE PORTFOLIO'}
                onClick={() => navigate('/work')}
                flip='flip-right'
                mirror='true'
                duration='1000'
                delay='850'/>
      </div>
    </section>
  )
}





