import {FC, useMemo, useState} from "react"
import s from './carousel.module.scss'
import {useAppSelector} from "../../../../store/hooks";
import {selectWorks} from "../../../../store/worksSlice";

export const Carousel: FC = () => {
  const works = useAppSelector(selectWorks)
  const [index, setIndex] = useState(Math.floor(works.length / 2))

  const selectedItem = useMemo(() => works?.[index], [works, index])

  return (
    <section className={s.carousel}>
      <div className={s.title}>
        <h3>
          A Couple of Our Featured Projects
        </h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Pellentesque eu erat lacus, vel congue mauris.
          Fusce velit justo, faucibus eu sagittis ac, gravida quis tortor.
          Suspendisse non urna mi, quis tincidunt eros.
        </p>
      </div>
      <div className={s.carouselImg}>
        {works.map((i, key) =>
          <div className={s.imgWrap} key={key}>
            <img src={i.image} alt='imgWork'/>
          </div>)}
      </div>
      <div className={s.carouselInfo}>
        <button className={s.leftButton}
                onClick={() => setIndex(index - 1)}>{' < '}</button>
        <div className={s.info}>
          <h3>
            {selectedItem?.title}
          </h3>
          <p>
            {selectedItem?.description}
          </p>
        </div>
        <button className={s.rightButton}
                onClick={() => setIndex(index + 1)}>{' > '}</button>
      </div>
    </section>
  )
}