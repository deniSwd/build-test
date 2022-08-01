import {FC} from "react"
import s from './Video.module.scss'
import playImg from '../../../../assets/play.png'
import {useAppDispatch} from "../../../../store/hooks";
import {createPopUp} from "../../../../store/popUpSlice";
import {PopUpWrap} from "../../../secondary/popUp/PopUpWrap";
import {VideoPopUp} from "../../../secondary/popUp/videoPopUp/VideoPopUp";

export const Video: FC = () => {
  const dispatch = useAppDispatch()

  return (
    <section className={s.video}>
      <div className={s.preview}>
        <div className={s.youtubePreview}
             onClick={() => dispatch(createPopUp(id =>
               <PopUpWrap id={id}>
                 <VideoPopUp/>
               </PopUpWrap>))}>
          <img className={s.playImg} src={playImg} alt='play'/>
        </div>
      </div>
      <div className={s.description}>
        <h3>Get To Know Us a Little Better!</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Pellentesque eu erat lacus, vel congue mauris.
          Fusce velit justo, faucibus eu sagittis ac, gravida quis tortor.
          Suspendisse non urna mi, quis tincidunt eros.
          Nullam tellus turpis, fringilla sit amet congue ut, luctus a nulla.
          Donec sit amet sapien neque, id ullamcorper diam. Nulla facilisi.
          Pellentesque pellentesque arcu a elit congue lacinia.</p>
        <p>Nullam tellus turpis, fringilla sit amet congue ut, luctus a nulla.
          Donec sit amet sapien neque, id ullamcorper diam. Nulla facilisi.
          Pellentesque pellentesque arcu a elit congue lacinia.</p>
      </div>
    </section>
  )
}