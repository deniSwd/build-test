import {FC} from "react"
import s from './Title.module.scss'

export const Title:FC =() => {
  return (
    <article className={s.carouselTitle}>
      <h2>
        A Couple of Our Featured Projects
      </h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Pellentesque eu erat lacus, vel congue mauris.
        Fusce velit justo, faucibus eu sagittis ac, gravida quis tortor.
        Suspendisse non urna mi, quis tincidunt eros.
      </p>
    </article>
  )
}