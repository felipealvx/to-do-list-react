/* eslint-disable no-unused-vars */
import React from 'react'
import { useState } from 'react'

function ToDoList() {
    const [tasks, setTasks] = useState([])
    const [newTask, setNewTask] = useState("")

    function handleInputChange(event){
        setNewTask(event.target.value);
    }

    function addTask(){
        if(newTask.trim() !== "") {
            setTasks(t => [...tasks, newTask])
            setNewTask("")
        }
    }

    function removeTask(index){
        const updateTasks = tasks.filter((_, i) => i !== index)
        setTasks(updateTasks)
    }

    function moveTaskUp(index){
        if (index > 0){
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index - 1]] = 
            [updatedTasks[index - 1], updatedTasks[index]];
            setTasks(updatedTasks)
        }
    }

    function moveTaskDown(index){
        if (index < tasks.length - 1){
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index + 1]] = 
            [updatedTasks[index + 1], updatedTasks[index]];
            setTasks(updatedTasks)
        }
    }
    
  return (
    <div className="
    w-full h-screen flex justify-center items-center
    ">
        <div className='to-do-list bg-slate-100
        w-[500px] min-h-[500px] rounded-md p-5 flex flex-col gap-4
        '>
            <h1 className='font-extrabold text-center text-3xl text-slate-600'>TO-DO-LIST</h1>

            <div className='flex gap-5 justify-between'>
                <input 
                type="text" 
                placeholder='Insira uma tarefa...' 
                value={newTask}
                onChange={handleInputChange} 
                className='
                h-8 rounded-sm p-2 text-slate-600 outline-none
                '
                />

                <button
                className='add-button
                bg-green-500 rounded-sm text-slate-50 px-2 font-bold hover:bg-green-400 transition-colors duration-150
                w-[46.5%]
                '
                onClick={addTask}>
                    CRIAR TAREFA
                </button>
            </div>

            <div className="tasks-content
            flex justify-center
            ">
                <ol className='flex flex-col gap-2 w-full font-bold'>
                    {tasks.map((task, index) => 
                        <li key={index} className='flex items-center gap-4 border-2 p-[15px_10px] rounded-md'>
                            <span className='text w-1/2'>{task}</span>
                            <button onClick={() => removeTask(index)} className="bg-red-400 p-2 rounded-sm hover:bg-red-300 transition-colors font-bold text-white">
                                 APAGAR 
                            </button>

                            <button 
                            onClick={() => moveTaskUp(index)}
                            className="
                            py-2 px-3 bg-orange-300 rounded-sm hover:bg-orange-200 transition-colors">
                                👆
                            </button>
                            
                            <button 
                            onClick={() => moveTaskDown(index)}
                            className="
                            py-2 px-3 bg-orange-300 rounded-sm hover:bg-orange-200 transition-colors">
                                👇
                            </button>
                        </li>
                    )}
                </ol>
            </div>
        </div>
    </div>
  )
}

export default ToDoList