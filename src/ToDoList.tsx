import React from 'react'
import { useForm } from 'react-hook-form'

interface FormData {
  email: string;
  password: string;
  password1: string;
  // 특정항목이 아닌 form 전체에 대한 에러
  extraError?: string;
  firstName: string;
}

const ToDoList = () => {
  const { register, watch, handleSubmit, formState: { errors }, setError, setValue} = useForm<FormData>({
    defaultValues: {
      email: "@naver.com"
    }
  });
  const onValid = (data: FormData) => {
    if(data.password !== data.password1){
      setError("password1", 
      {message: "Password are not the same"},
      {shouldFocus: true}
      )
    }
    setError("extraError", {message: "Server offline."})
    setValue("email", "");
  }
  console.log(errors);
  return ( <div>
    <form onSubmit={handleSubmit(onValid)}>
      <input {...register("email", { 
        required: true, 
        validate: (value) => true,
        pattern: {
          value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, 
          message: "no regular expressions"
         }
        })}
        type="Write an email" />
      <span>{errors?.email?.message}</span>
      <input {...register("firstName", { 
        required: true, 
        // react-hook-form에서 문자열을 리턴하려면, 그건 즉 에러 메세지를 리턴한다는 뜻이다.
        // 조건부가 여러개라면?
        // validate: (value) => value.includes("nico") ? "no nicos allowed" : true,
        // async 비동기 처리도 가능함
        validate: {
          noNico: (value) => value.includes("nico") ? "no nicos allowed" : true,
          noRick: (value) => value.includes("Rick") ? "no Ricks allowed" : true,
        },
        })} placeholder='First Name' />
      <input {...register("password", { required: "password is required", minLength: {value: 5, message: "Your password is too short"} })} type="Write a password" />
      <input {...register("password1", { required: "password is required", minLength: {value: 5, message: "Your password is too short"} })} type="Write a password" />
      <span>{errors?.password1?.message}</span>
      <button>Add</button>
      <span>{errors?.extraError?.message}</span>
    </form>
  </div>
  );
}

export default ToDoList
