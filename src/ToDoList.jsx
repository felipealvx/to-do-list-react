/* eslint-disable no-unused-vars */
import React from 'react'
import { useState } from 'react'
import ButtonDelete from './components/ButtonDelete';
import ButtonMoveUp from './components/ButtonMoveUp';
import ButtonMoveDown from './components/ButtonMoveDown';

function ToDoList() {
    const [tasks, setTasks] = useState(["Correr 2KM", "Ir a Academia", "Estudar 20min"])
    const [newTask, setNewTask] = useState("")

    function handleInputChange(event){
        setNewTask(event.target.value);
    }

    function addTask(){

    }

    function removeTask(){

    }

    function moveTaskUp(){

    }

    function moveTaskDown(){

    }
    
  return (
    <div className="
    w-full h-screen flex justify-center items-center
    ">
        <div className='to-do-list bg-slate-100
        w-[500px] h-[700px] rounded-md p-5 flex flex-col gap-4
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
                <ol className='flex flex-col gap-2 w-full'>
                    {tasks.map((task, index) => 
                        <li key={index} className='flex items-center gap-4 border-2 p-[15px_10px] rounded-md'>
                            <span className='text w-1/2'>{task}</span>
                            <ButtonDelete
                            onClick={() => removeTask(index)}
                            className='delete-button'/>

                            <ButtonMoveUp
                            onClick={() => moveTaskUp(index)}
                            className='move-button'/>

                            <ButtonMoveDown
                            onClick={() => moveTaskDown(index)}
                            className='move-button'/>
                        </li>
                    )}
                </ol>
            </div>
        </div>
    </div>
  )
}

export default ToDoList