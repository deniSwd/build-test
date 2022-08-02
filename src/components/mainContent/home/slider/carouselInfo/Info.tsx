import {FC} from "react"
import s from './Info.module.scss'
import {Arrow} from "../../../../secondary/carouselArrow/Arrow"
import {WorksType, WorkType} from "../../../../../mainTypes";

type InfoProps = {
  index: number
  selectedItem: WorkType
  setIndex: (index: number) => void
  works: WorksType
}

export const Info: FC<InfoProps> = ({index, selectedItem, setIndex, works }) => {
  return (
    <article className={s.carouselInfo}>
      <div className={s.leftButton}
           onClick={() => index !== 0 ? setIndex(index - 1) : setIndex(works.length - 1)}>
        <Arrow/>
      </div>
      <div className={s.info}>
        <h3>
          {selectedItem?.title}
        </h3>
        <p>
          {selectedItem?.description}
        </p>
      </div>
      <div className={s.rightButton}
           onClick={() => index !== works.length - 1 ? setIndex(index + 1) : setIndex(0)}>
        <Arrow/>
      </div>
    </article>
  )
}