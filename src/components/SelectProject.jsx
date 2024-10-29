import Tasks from "./Tasks/Task.jsx"

export default function SelectProject({project, onDelete, onAddTask, onDeletTask, tasks}){
    const formateDate = new Date(project.dueDate).toLocaleString('en-US', {
        year: "numeric",
        month: '2-digit',
        day: 'numeric'
    })
    return <div className="w-[35rem] mt-16">
        <header className="pb-4 mb-4 border-b-2 border-stone-300">
            <div className="flex items-center justify-between">
                <h1 className="text-3xl font-bold text-stone-600 mb-2">{project.title}</h1>
                <button onClick={onDelete}>Delete</button>
            </div>
            <p className="mb-4 text-stone-400">{formateDate}</p>
            <p className="text-stone-600 whitespace-pre-wrap">{project.description}</p>
        </header>
        <Tasks onAppAddTask={onAddTask} onAppDeleteTask={onDeletTask} tasks={tasks} />
    </div>
}