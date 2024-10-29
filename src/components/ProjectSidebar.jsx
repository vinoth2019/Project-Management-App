import Button from "./Button.jsx";

export default function ProjectSidebar({onStartAddProject, projects, onSelectProject, selectProjectId}){
    return<aside className="w-1/3 px-8 py-16 bg-stone-900 text-slate-50 md:w-72 rounded-r-xl">
        <h2 className="mb-6 text-slate-200 md:text-xl font-bold ">YOUR PROJECT</h2>
        <div> 
            <Button onClick={onStartAddProject}>
                +Add Project
            </Button>
        </div>
        <ul className="mt-8">
            {projects.map((project) => {                
               let cssClass = "w-full rounded-md text-left p-2 bg-stone-150 hover:bg-stone-800 hover:text-stone-600";
                
                if(project.id === selectProjectId){
                    cssClass += ' bg-stone-800 text-stone-200'
                }
                else{
                    cssClass += ' text-stone-400'
                }
                return (
            <li key={project.id} className="py-2">
                <button 
                onClick={() => onSelectProject(project.id)}
                className={cssClass}>
                    {project.title}
                </button>
            </li>)
        })}
        </ul>
    </aside>
}