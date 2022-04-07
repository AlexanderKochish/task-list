import React from 'react'
import './TaskItems.css'
import { AiFillDelete } from "react-icons/ai";
import { deleteTask, upDateTask } from '../store/taskSlice'
import { useDispatch } from 'react-redux'

const TaskItems = ({id,title,completed}) => {
    const dispatch = useDispatch()

return (
    <div className='items__container'>
      <input type='checkbox' checked={completed} onChange={()=>dispatch(upDateTask({id}))}/>
        <span className='title__items'>{title}</span>
     <div className='items__delete__btn'>
        <span onClick={()=>dispatch(deleteTask({id}))}>{<AiFillDelete/>}</span>
      </div>
    </div>
  )
}

export default TaskItems