import {FC} from "react"
import s from './ContactInfo.module.scss'

export  const ContactInfo:FC =()=> {
  return(
    <div className={s.contactInfo}>
      <div className={s.info}>
        <h1>contact info</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit velit justo.</p>
        <div className={s.mailPhone}>
          <span><b>email:</b>info@display.com</span>
          <span><b>phone:</b>1.306.222.4545</span>
        </div>
        <span>222 2nd Ave South</span>
        <span>Saskabush, SK   S7M 1T6</span>
      </div>
      <div className={s.storeHours}>
        <h1>store hours</h1>
        <div className={s.storeHoursContent}>
          <div className={s.week}>
            <span>Monday - Thursday</span>
            <span>Friday</span>
            <span>Saturday</span>
            <span>Sunday & Holidays</span>
          </div>
          <div className={s.hours} >
            <span>8 am - 5 pm</span>
            <span>8 am - 6 pm</span>
            <span>9 am - 5 pm</span>
            <span>Closed</span>
          </div>
        </div>
      </div>
    </div>
  )
}