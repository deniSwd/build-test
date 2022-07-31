import React, {FC} from 'react'
import s from './Home.module.scss'
import {Banner} from "./banner/Banner";
import {Video} from "./video/Video";
import {Slider} from "./slider/Slider";

export const Home: FC = () => {
  /*  const count = useAppSelector(selectCount)
    const dispatch = useAppDispatch()*/

  return (
    <main className={s.home}>
      <Banner/>
      <Video/>
      <Slider/>
    </main>
  )
}
