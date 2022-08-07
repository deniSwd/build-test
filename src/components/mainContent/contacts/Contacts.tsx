import React, {FC} from 'react'
import s from './Contacts.module.scss'
import {PageTitle} from '../../secondary/mainPageTitle/PageTitle'
import {Form} from './form/Form'
import {ContactInfo} from './contactInfo/ContactInfo'
import {useJsApiLoader} from '@react-google-maps/api'
import {Map} from './googleMap/Map'


export const Contacts: FC = () => {

  const {isLoaded} = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: 'YOUR_API_KEY'
  })

  return (
    <main className={s.contacts}>
      <PageTitle titleText='GOT A QUESTION OR INQUIRY?'/>
      <section className={s.contactsContent}>
        <article className={s.googleMap}>
          {isLoaded ? <Map/> : <h1>loading...</h1>}
        </article>
        <article className={s.informationField}>
          <Form/>
          <ContactInfo/>
        </article>
      </section>
    </main>
  )
}
