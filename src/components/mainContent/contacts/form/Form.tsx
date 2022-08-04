import {FC, useCallback} from "react"
import {Input} from "./input/MyInput"
import {SubmitHandler, useForm} from "react-hook-form"
import * as yup from "yup"
import {yupResolver} from "@hookform/resolvers/yup"
import {Button} from "../../../secondary/button/Button"
import s from './Form.module.scss'


export interface IFormValues {
  name: string
  email: string
  subject: string
  message: string
}

const schema = yup.object({
  name: yup.string().min(2, 'Введите не менее 2-х символов').max(20, 'Введите не более 20-ти символов').required('Это поле обязательно'),
  email: yup.string().email('Некорректный формат почты').required('Это поле обязательно'),
  subject: yup.string().min(5, 'Введите не менее 5 символов').max(30, 'Введите не более 30-ти символов').required('Это поле обязательно'),
  message: yup.string().min(1, 'Введите не менее 1 символa').max(1000, 'Введите не более 1000-чи символов').required('Это поле обязательно')
}).required()

export const Form: FC = () => {

  const {
    register,
    handleSubmit,
    formState: {errors, dirtyFields}
  } = useForm<IFormValues>({resolver: yupResolver(schema)})
  const onSubmit: SubmitHandler<IFormValues> = useCallback(data => {
    console.log(data)
    console.log(errors)
  }, [errors])

  return (
    <div className={s.formWrapper}>
      <h1>contact form</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Donec tincidunt dolor et tristique bibendum.
        Aenean sollicitudin vitae dolor ut posuere.</p>
      <form onSubmit={handleSubmit(onSubmit)} className={s.form}>
        <Input label='name'
               register={register}
               placeholder='Name'
               errors={errors}/>
        <Input label='email'
               register={register}
               placeholder='Email Address'
               errors={errors}/>
        <Input label='subject'
               register={register}
               placeholder='Subject'
               errors={errors}/>
        <Input label='message'
               register={register}
               errors={errors}
               textarea/>
        <Button type='submit' className={s.submitButton} buttonName={'send message'}
                disabled={errors.name || errors.email || errors.subject || errors.message}/>
      </form>
    </div>
  )
}
