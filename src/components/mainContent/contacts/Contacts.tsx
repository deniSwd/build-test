import React, {FC} from 'react'
import s from './Contacts.module.scss'
import {PageTitle} from "../../secondary/mainPageTitle/PageTitle"
import {Form} from "./form/Form";
import {ContactInfo} from "./contactInfo/ContactInfo";


export const Contacts: FC = () => {
  /*  const count = useAppSelector(selectCount)
    const dispatch = useAppDispatch()*/

  return (
    <div className={s.contacts}>
      <PageTitle titleText='GOT A QUESTION OR INQUIRY?'/>
      <section className={s.contactsContent}>
        <article className={s.googleMap}>
          <iframe className={s.map} title='map'
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5721.720882411162!2d19.260484355455187!3d42.43074340278811!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x134debcd9e4f02af%3A0x746c66b891df9adf!2sPrirodnja%C4%8Dki%20muzej%20Crne%20Gore%20-%20izlo%C5%BEbeni%20prostor!5e0!3m2!1sru!2s!4v1659626218623!5m2!1sru!2s" loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"></iframe>
        </article>
        <article className={s.informationField}>
          <Form/>
          <ContactInfo/>
        </article>
      </section>
    </div>
  )
}
