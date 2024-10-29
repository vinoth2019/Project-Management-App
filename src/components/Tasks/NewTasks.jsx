import { useState } from "react"

export default function NewTasks({onSelectProjectAddTask}){
    const [enteredTask, setEnteredTaks] = useState('');

    const handleChange = (event) => {
        setEnteredTaks(event.target.value);
    }

    const buttonHanlder = () => {
        if(enteredTask.trim() === ''){
            return;
        }
        onSelectProjectAddTask(enteredTask)
        setEnteredTaks('')
    }

    return <div className="flex items-center gap-4">
        <input type="text" onChange={handleChange} value={enteredTask} className="w-[16rem] px-2 py-1 rounded-sm bg-stone-200" />
        <button className="text-stone-800" onClick={buttonHanlder}>Add Task</button>
    </div>
}