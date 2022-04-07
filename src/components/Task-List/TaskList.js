import React from 'react'
import './TaskList.css'
import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addTask } from '../store/taskSlice'
import TaskItems from '../Task-Items/TaskItems'

const TaskList = () => {
    const[text, setText]=useState('')
    const tasks = useSelector(state=>state.task.task)
    const dispatch = useDispatch()

    const addTodos =()=>{
        dispatch(addTask({text}))
        setText('')
    }

return (
    <div className='list__container'>
        <div className='list__form'>
            <input placeholder='Task...' value={text} type='text' onChange={(e)=>setText(e.target.value)}/>
            <button className='list__btn' onClick={addTodos}>Add Task</button>
        </div>
        <div className='task__list__container'>
            {tasks && tasks.map((task)=><TaskItems key={task.id} {...task}/>)}
        </div>
    </div>
  )
}

export default TaskList