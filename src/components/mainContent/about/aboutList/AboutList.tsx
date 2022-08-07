import React, {FC} from 'react'
import s from './AboutList.module.scss'

export const AboutList:FC = () => {
  return (
    <section className={s.listSection}>
     <p>
       Lorem ipsum dolor sit amet, consectetur adipiscing elit.
       Pellentesque eu erat lacus, vel congue mauris.
       Fusce velit justo, faucibus eu sagittis ac, gravida quis tortor.
       Suspendisse non urna mi, quis tincidunt eros.
       Nullam tellus turpis, fringilla sit amet congue ut, luctus a nulla.
       Donec sit amet sapien neque, id ullamcorper diam. Nulla facilisi.
       Pellentesque pellentesque arcu a elit congue lacinia.
     </p>
      <ul>
        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit luctus a nulla.</li>
        <li>Lorem ipsum dolor sit amet, consectetur adipiscing congue lacinia.</li>
      </ul>
    </section>
  )
}