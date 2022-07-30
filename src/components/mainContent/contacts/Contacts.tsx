import React, {FC} from 'react'
import s from './Contacts.module.scss'
import {PageTitle} from "../../secondary/mainPageTitle/PageTitle";

export const Contacts: FC = () => {
  /*  const count = useAppSelector(selectCount)
    const dispatch = useAppDispatch()*/

  return (
    <div className={s.contacts}>
      <PageTitle titleText='GOT A QUESTION OR INQUIRY?'/>
      Contacts
    </div>
  )
}
