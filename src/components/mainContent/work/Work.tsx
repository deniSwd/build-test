import React, {FC, useCallback, useEffect, useMemo, useRef, useState} from 'react'
import s from './Work.module.scss'
import {PageTitle} from "../../secondary/mainPageTitle/PageTitle";
import {WorksType} from "../../../mainTypes";
import {userAPI} from "../../../API/api";
import {FilterMenu} from "./filterMenu/FilterMenu";
import {StyleSwitcher} from "./styleSwitcher/StyleSwitcher";
import {WorkContent} from "./workContent/WorkContent";

export const Work: FC = () => {

  const [displayingWorks, setDisplayingWorks] = useState<WorksType>([])
  const [totalItems, setTotalItems] = useState(0)
  const pagesFetched = useRef(1)
  const [category, setCategory] = useState('all')
  const hasMore = useMemo(() => (totalItems - displayingWorks.length) > 0, [totalItems, displayingWorks])

  const nextFetch = useCallback((reset?: boolean) => {
    if (reset) {
      setTotalItems(0)
      pagesFetched.current = 1
    }
    userAPI.getWorks(pagesFetched.current, 6, category).then(({works, total}) => {
      if (reset) {
        setDisplayingWorks(works)
      } else {
        setDisplayingWorks(displayingWorks => [...displayingWorks, ...works])
      }
      setTotalItems(total)
      pagesFetched.current++
    })
  }, [category])

  useEffect(() => {
    nextFetch(true)
  }, [category, nextFetch])

  const [listStyle, setListStyle] = useState(false)
  const gridSwitchColor = useCallback((inverted: boolean) => +listStyle ^ +inverted ? '#2ecc71' : '#737373', [listStyle])

  return (
    <main className={s.work}>
      <PageTitle titleText='CHECK OUT WHAT I CAN DO'/>
      <section className={s.workContent}>
        <article className={s.filterAndStyle}>
          <FilterMenu category={category} setCategory={setCategory}/>
          <StyleSwitcher setListStyle={setListStyle} gridSwitchColor={gridSwitchColor}/>
        </article>
        <article>
          {displayingWorks.length === 0 ?
          <div className={s.noResultsMessage}>no results</div> :
            <WorkContent nextFetch={nextFetch}
                         hasMore={hasMore}
                         displayingWorks={displayingWorks}
                         listStyle={listStyle}/>}
        </article>
      </section>
    </main>
  )
}
