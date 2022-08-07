import React, {FC} from 'react'
import s from './FilterMenu.module.scss'
import {FilterItem} from '../../../secondary/filterItem/FilterItem'

type FilterMenuProps = {
  category: string
  setCategory: (itemName: string) => void
}

export const FilterMenu: FC<FilterMenuProps> = ({category, setCategory}) => {
  return (
    <div className={s.filter}>
      <FilterItem itemName={'all'}
                  category={category}
                  onClickFunction={setCategory}/>
      <span>/</span>
      <FilterItem itemName={'print'}
                  category={category}
                  onClickFunction={setCategory}/>
      <span>/</span>
      <FilterItem itemName={'photography'}
                  category={category}
                  onClickFunction={setCategory}/>
      <span>/</span>
      <FilterItem itemName={'web'}
                  category={category}
                  onClickFunction={setCategory}/>
      <span>/</span>
      <FilterItem itemName={'application'}
                  category={category}
                  onClickFunction={setCategory}/>
    </div>
  )
}