import React, {FC} from "react";
import s from './WorkContent.module.scss'
import InfiniteScroll from "react-infinite-scroll-component"
import {WorksType} from "../../../../mainTypes";

type WorkContentProps = {
  nextFetch: (reset?: boolean) => void
  hasMore: boolean
  displayingWorks: WorksType
  listStyle: boolean
}

export const WorkContent: FC<WorkContentProps> = ({nextFetch, hasMore, displayingWorks, listStyle}) => {
  return (
    <InfiniteScroll next={nextFetch} hasMore={hasMore}
                    dataLength={displayingWorks.length}
                    className={listStyle ? s.workMapList : s.workMapGrid} loader={<h4>Loading...</h4>}>
      {displayingWorks.map((item, key) => <div key={key} className={s.workBox}>
        <img src={item.image} className={s.workImage} alt='work'/>
        {listStyle &&
            <div className={s.workDescription}>
                <h2>{item.title}</h2>
                <h4>{item.category}</h4>
                <p>{item.description}</p>
            </div>}
      </div>)}
    </InfiniteScroll>
  )
}