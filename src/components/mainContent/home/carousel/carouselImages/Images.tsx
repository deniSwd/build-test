import {FC} from 'react'
import s from './Images.module.scss'
import {WorksType} from '../../../../../mainTypes'
import cn from 'classnames'

type ImagesProps = {
  works: WorksType
  index: number
}

export const Images: FC<ImagesProps> = ({works, index}) => {
  return (
    <article className={s.carouselWrapper}>
      {works.map((item, key) =>
        <div key={key}
             className={cn(s.imgWrap, key === index && s.selected)}
             style={{transform: `translate(calc(-50% + (${(key - index) * 320}px)), -50%)`}}>
          <img src={item.image} alt='imgWork'/>
        </div>)}
    </article>
  )
}