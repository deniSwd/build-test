import {FC, useEffect, useMemo, useState} from "react"
import s from './Carousel.module.scss'
import {useAppSelector} from "../../../../store/hooks";
import {selectWorks} from "../../../../store/worksSlice";
import {Title} from "./carouselTitle/Title";
import {Images} from "./carouselImages/Images";
import {Info} from "./carouselInfo/Info";

export const Carousel: FC = () => {
  const works = useAppSelector(selectWorks)
  const [index, setIndex] = useState(0)
  useEffect(() => setIndex(Math.floor(works.length / 2)), [works])

  const selectedItem = useMemo(() => works?.[index], [works, index])

  return (
    <section className={s.carousel}>
      <Title/>
      <Images works={works} index={index}/>
      <Info index={index}
            works={works}
            selectedItem={selectedItem}
            setIndex={setIndex}/>
    </section>
  )
}