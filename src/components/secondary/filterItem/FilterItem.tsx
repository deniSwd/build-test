import {FC} from 'react'
import s from './FilterItem.module.scss'

type FilterItemProps = {
  itemName: string
  category?: string
  onClickFunction: (itemName: string) => void
}

export const FilterItem: FC<FilterItemProps> = ({itemName, onClickFunction, category}) => {
  return (
    <div className={category === itemName ? s.filterItem : ''} onClick={() => onClickFunction(itemName)}>
      {itemName}
    </div>
  )
}