import React, {FC, useCallback, useEffect, useMemo, useState} from 'react'
import s from './Work.module.scss'
import {PageTitle} from "../../secondary/mainPageTitle/PageTitle";
import {useAppSelector} from "../../../store/hooks";
import {selectWorks} from "../../../store/worksSlice";
import {FilterItem} from "../../secondary/filterItem/FilterItem";
import {WorksType} from "../../../mainTypes";
import {userAPI} from "../../../API/api";
import InfiniteScroll from "react-infinite-scroll-component";

export const Work: FC = () => {
  // const works = useAppSelector(selectWorks)
  const [displayingWorks, setDisplayingWorks] = useState<WorksType>([])
  const [total, setTotal] = useState(0)
  const [pagesFetched, setPagesFetched] = useState(0)
  const hasMore = useMemo(() => (total - displayingWorks.length) > 0, [total, displayingWorks])
  /*  const nextFetch = useCallback(() => {
      userAPI.getWorks(pagesFetched).then(({works, total}) => {
        setDisplayingWorks([...displayingWorks, ...works])
        setTotal(total)
        setPagesFetched(pagesFetched + 1)
      })
    }, [displayingWorks, pagesFetched])*/

  const reset = useCallback ((category: string) => {
    const queryString = category === 'all' ? '' : `category=${category}`
    setCategory(category)
    setDisplayingWorks([])
    userAPI.getWorks(pagesFetched, 6, queryString).then(({works, total}) => {
      setDisplayingWorks([...displayingWorks, ...works])
      setTotal(total)
      setPagesFetched(pagesFetched + 1)
    })
    // reset
  }, [displayingWorks, pagesFetched])

  useEffect(() => {
    reset(category)
  }, [])

  const [category, setCategory] = useState<string>('all')
  const [listStyle, setListStyle] = useState(false)
  const gridSwitchColor = useCallback((inverted: boolean) => +listStyle ^ +inverted ? '#2ecc71' : '#737373', [listStyle])
  const selectedWorks = useMemo(() => displayingWorks.filter(item => category === 'all' || category === item.category), [category, displayingWorks])
  // const dispatch = useAppDispatch()

  return (
    <main className={s.work}>
      <PageTitle titleText='CHECK OUT WHAT I CAN DO'/>
      <section className={s.workContent}>
        <article className={s.filterAndStyle}>
          <div className={s.filter}>
            <FilterItem itemName={'all'}
                        category={category}
                        setCategory={reset}/>
            <span>/</span>
            <FilterItem itemName={'print'}
                        category={category}
                        setCategory={reset}/>
            <span>/</span>
            <FilterItem itemName={'photography'}
                        category={category}
                        setCategory={reset}/>
            <span>/</span>
            <FilterItem itemName={'web'}
                        category={category}
                        setCategory={reset}/>
            <span>/</span>
            <FilterItem itemName={'application'}
                        category={category}
                        setCategory={reset}/>
          </div>
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
        </article>
        <InfiniteScroll next={reset} hasMore={hasMore} loader={<h4>Loading...</h4>}
                        dataLength={displayingWorks.length}
                        className={listStyle ? s.workMapList : s.workMapGrid}>
          {displayingWorks.map((item, key) => <div key={key} className={s.workBox}>
            <img src={item.image} alt='work'/>
            {listStyle &&
                <div className={s.workDescription}>
                    <h2>{item.title}</h2>
                    <h4>{item.category}</h4>
                    <p>{item.description}</p>
                </div>}
          </div>)}
        </InfiniteScroll>
      </section>
    </main>
  )
}
