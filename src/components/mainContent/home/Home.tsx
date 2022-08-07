import React, {FC} from 'react'
import s from './Home.module.scss'
import {Banner} from './banner/Banner'
import {Video} from './video/Video'
import {Carousel} from './carousel/Carousel'

export const Home: FC = () => {

  return (
    <main className={s.home}>
      <Banner/>
      <Video/>
      <Carousel/>
    </main>
  )
}
