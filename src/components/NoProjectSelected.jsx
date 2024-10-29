import noProjectImage from '../assets/no-projects.png';
import Button from './Button.jsx';
export default function NoProjectSelected({onStartAddProject}){
    return <div className="mt-24 text-center w-2/3">
        <img src={noProjectImage} alt='no project' className='w-16 h-16 object-contain mx-auto' />
        <h2 className='text-xl font-bold text-slate-500 my-4'>No Project Selected</h2>
        <p className='text-stone-400 mb-4'>Select a Project or get started with the new one</p>
        <p>            
            <Button onClick={onStartAddProject}>Create new Project</Button>
        </p>
    </div>
}