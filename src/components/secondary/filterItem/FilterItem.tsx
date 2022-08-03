import {FC} from "react"
import s from './FilterItem.module.scss'

type FilterItemProps = {
  itemName: string
  category?: string
  setCategory: (itemName:string) => void
}

export const FilterItem:FC<FilterItemProps> = ({itemName, setCategory,category}) =>{
  return (
    <div className={category===itemName ? s.filterItem : ''} onClick={()=>setCategory(itemName)}>
      {itemName}
    </div>
  )
}