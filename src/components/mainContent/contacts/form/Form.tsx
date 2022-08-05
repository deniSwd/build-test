import {FC, useCallback} from "react"
import {Input} from "./input/MyInput"
import {SubmitHandler, useForm} from "react-hook-form"
import * as yup from "yup"
import {yupResolver} from "@hookform/resolvers/yup"
import {Button} from "../../../secondary/button/Button"
import s from './Form.module.scss'
import {createPopUp} from "../../../../store/popUpSlice";
import {PopUpWrap} from "../../../secondary/popUp/PopUpWrap";
import {useAppDispatch} from "../../../../store/hooks";
import {MessagePopUp} from "../../../secondary/popUp/messagePopUp/MessagePopUp";


export interface IFormValues {
  name: string
  email: string
  subject: string
  message: string
}

const schema = yup.object({
  name: yup.string().min(2, 'Enter at least 2 characters').max(20, 'Enter no more than 20 characters').required('This field is required'),
  email: yup.string().email('Incorrect mail format').required('This field is required'),
  subject: yup.string().min(5, 'Enter at least 5 characters').max(30, 'Enter no more than 30 characters').required('This field is required'),
  message: yup.string().min(1, 'Enter at least 1 character').max(1000, 'Enter no more than 1000 characters').required('This field is required')
}).required()

export const Form: FC = () => {
  const dispatch = useAppDispatch()

  const {
    register,
    handleSubmit,
    formState: {errors}
  } = useForm<IFormValues>({resolver: yupResolver(schema)})
  const onSubmit: SubmitHandler<IFormValues> = useCallback(data => {
    dispatch(createPopUp(id =>
      <PopUpWrap id={id}>
        <MessagePopUp name={data.name}/>
      </PopUpWrap>))
  }, [dispatch])

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
