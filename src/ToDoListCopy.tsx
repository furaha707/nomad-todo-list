import React from 'react'
import { useForm } from 'react-hook-form';

interface IForm {
  toDo: string
}

function ToDoListCopy() {
  const {register, handleSubmit, setValue} = useForm<IForm>();
  const handleValid = () => {
    console.log('a')
    
  }

  return (
    <div>
      <h1>투두리스트!!!</h1>
      <hr />
      <form onSubmit={handleSubmit(handleValid)}>
        <input {...register("toDo", {required: "Please write a To Do"})} placeholder='Write a to do'
        />
        <button>Add</button>
      </form>
      <ul>
        <li>리스트</li>
      </ul>
    </div>
  )
}

export default ToDoListCopy
