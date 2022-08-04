import {FC} from "react"
import {Path, UseFormRegister} from "react-hook-form"
import {IFormValues} from '../Form'
import s from './MyInput.module.scss'
import cn from "classnames"

type InputProps = {
  label: Path<IFormValues>
  register: UseFormRegister<IFormValues>
  placeholder?: string
  errors: any
  textarea?: boolean
}

export const Input: FC<InputProps> = ({label, register, placeholder, errors, textarea}) => {
  return (
    <div className={s.inputWrapper}>
      {textarea ?
        <textarea /*rows={1} wrap={'soft'}*/ className={cn(s.input,s.textarea, errors[label]?.message && s.error)} {...register(label)}
                  placeholder={placeholder}/> :
        <input className={cn(s.input, errors[label]?.message && s.error)} {...register(label)}
               placeholder={placeholder}/>}
      <span className={s.errMsg}>{errors[label]?.message}</span>
    </div>
  )
}
