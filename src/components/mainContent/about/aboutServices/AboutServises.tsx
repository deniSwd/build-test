import React, {FC} from 'react'
import s from './AboutServices.module.scss'
import {ServicesButton} from '../../../secondary/servicesButton/ServicesButton'
import website from '../../../../assets/websites.png'
import photo from '../../../../assets/photography.png'
import seo from '../../../../assets/seo.png'
import applications from '../../../../assets/applications.png'

export const AboutServices:FC = () => {
  return (
    <section className={s.services}>
      <h2>Services</h2>
      <article className={s.buttonField}>
        <ServicesButton servicesImg={website}/>
        <ServicesButton servicesImg={photo}/>
        <ServicesButton servicesImg={seo}/>
        <ServicesButton servicesImg={applications}/>
      </article>
    </section>
  )
}