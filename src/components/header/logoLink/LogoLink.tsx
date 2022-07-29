import {FC} from "react"
import s from './LogoLink.module.scss'
import {DribbbleIcon, FacebookIcon, GoogleIcon, PinterestIcon, RssIcon, TwitterIcon} from "../../secondary/icons/Icons";

export const LogoLink: FC = () => {
  return (
    <div className={s.logoLink}>
      <div className={s.logo}>Logo</div>
      <div className={s.links}>
        <TwitterIcon/>
        <FacebookIcon/>
        <RssIcon/>
        <PinterestIcon/>
        <GoogleIcon/>
        <DribbbleIcon/>
      </div>
    </div>
  )
}