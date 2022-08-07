import React, {FC} from 'react'
import s from './StyleSwitcher.module.scss'

type StyleSwitcherProps = {
  setListStyle: (listStyle: boolean) => void
  gridSwitchColor: (inverted: boolean) => string
}

export const StyleSwitcher: FC<StyleSwitcherProps> = ({setListStyle, gridSwitchColor}) => {
  return (
    <div className={s.displayingStyle}>
      <svg onClick={() => setListStyle(false)}
           xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15">
        <path data-name="grid view"
              d="M1129,329h6.03v5.929H1129V329Zm8.95,0H1144v6.012h-6.05V329Zm-8.95,8.9h6.01V344H1129v-6.1Zm8.97,0H1144V344h-6.03v-6.1Z"
              transform="translate(-1129 -329)" fill={gridSwitchColor(true)}/>
      </svg>
      <svg onClick={() => setListStyle(true)}
           id="list_view" data-name="list view" xmlns="http://www.w3.org/2000/svg" width="15" height="15.031"
           viewBox="0 0 15 15.031">
        <rect data-name="1" y="12.031" width="15" height="3" fill={gridSwitchColor(false)}/>
        <rect data-name="2" y="6" width="15" height="3.031" fill={gridSwitchColor(false)}/>
        <rect data-name="3" width="15" height="3.031" fill={gridSwitchColor(false)}/>
      </svg>
    </div>
  )
}