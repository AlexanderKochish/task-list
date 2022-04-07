import { createSlice } from "@reduxjs/toolkit";

const taskSlice = createSlice({
    name: 'task',
    initialState:{
        task:[
            {id:1,title: 'Learn React !!!',completed: false},
            {id:2,title: 'Learn Redux !!!',completed: false},
            {id:3,title: 'The application is working.',completed: false},
        ]
    },
    reducers:{
        addTask(state,action){
            state.task.push({
                id: new Date().toISOString(),
                title: action.payload.text,
                completed: false,
            })
        },
        upDateTask(state,action){
            const patch = state.task.find(task=>task.id===action.payload.id)
            patch.completed = !patch.completed
        },
        deleteTask(state,action){
            state.task = state.task.filter(task=>task.id !== action.payload.id)
        }
    }
})

export const {addTask,upDateTask,deleteTask} = taskSlice.actions

export default taskSlice.reducer