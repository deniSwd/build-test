import React, {FC} from "react"
import s from './AboutMain.module.scss'
import aboutPageImg from "../../../../assets/AboutPageImg.png";

export const AboutMain:FC = () => {
  return (
    <section className={s.mainSection}>
      <article className={s.topField}>
        <div className={s.aboutPageImg}>
          <img src={aboutPageImg} alt='manOnImg'/>
        </div>
        <div className={s.aboutText}>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque eu erat lacus, vel congue mauris.
            Fusce velit justo, faucibus eu sagittis ac, gravida quis tortor.
            Suspendisse non urna mi, quis tincidunt eros.
            Nullam tellus turpis, fringilla sit amet congue ut, luctus a nulla.
            Donec sit amet sapien neque, id ullamcorper diam. Nulla facilisi.
            Pellentesque pellentesque arcu a elit congue lacinia.</p>
          <p>
            Nullam tellus turpis, fringilla sit amet congue ut, luctus a nulla.
            Donec sit amet sapien neque, id ullamcorper diam. Nulla facilisi.
            Pellentesque pellentesque arcu a elit congue lacinia.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque eu erat lacus, vel congue mauris.
            Fusce velit justo, faucibus eu sagittis ac, gravida quis tortor.
            Suspendisse non urna mi, quis tincidunt eros. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit.
          </p>
        </div>
      </article>
      <article className={s.downField}>
        <div className={s.missionText}>
          <h2>Mission Statement</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque eu erat lacus, vel congue mauris.
            Fusce velit justo, faucibus eu sagittis ac, gravida quis tortor.
            Suspendisse non urna mi, quis tincidunt eros.
            Nullam tellus turpis, fringilla sit amet congue ut, luctus a nulla.
            Donec sit amet sapien neque, id ullamcorper diam. Nulla facilisi.
            Pellentesque pellentesque arcu a elit congue lacinia.
          </p>
        </div>
        <div className={s.factsText}>
          <h2>Fun Facts</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque eu erat lacus, vel congue mauris.
            Fusce velit justo, faucibus eu sagittis ac, gravida quis tortor.
            Suspendisse non urna mi, quis tincidunt eros.
            Nullam tellus turpis, fringilla sit amet congue ut, luctus a nulla.
            Donec sit amet sapien neque, id ullamcorper diam. Nulla facilisi.
            Pellentesque pellentesque arcu a elit congue lacinia.
          </p>
        </div>
      </article>
    </section>
  )
}