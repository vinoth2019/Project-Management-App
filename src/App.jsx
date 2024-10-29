import { useState } from "react";
import NewProject from "./components/NewProject.jsx";
import NoProjectSelected from "./components/NoProjectSelected.jsx";
import ProjectSidebar from "./components/ProjectSidebar.jsx";
import SelectProject from "./components/SelectProject.jsx";

function App() {
  const[projectState, setProjectState] = useState({
    selectedProject: undefined,
    projects: [],
    tasks: []
  }); 

  function hanldeAddTask(text){
    setProjectState((prevState) => {
    const newTask = {     
      text: text,
      id: Math.random(),
      projectId: prevState.selectedProject
    }
    
      return {
        ...prevState, 
        tasks: [newTask, ...prevState.tasks]
      }
    })
  }
  function hanldeDeleteTask(id){
    setProjectState(prevState => {
      return {
        ...prevState, 
        tasks: prevState.tasks.filter((task) => task.id !== id)
      }
    })
  }

  function handleDeleteProject(){
    setProjectState(prevState => {
      return {
        ...prevState,
        selectedProject: undefined,
        projects: prevState.projects.filter((project) => project.id !== prevState.selectedProject)
      }
    })
  }

  function handleSelectProject(id){
    setProjectState(prevState => {
      return {
        ...prevState,
        selectedProject: id
      }
    })
  }

  function hanldeStarAddProject(){
    setProjectState(prevState => {
      return {
        ...prevState,
        selectedProject: null,        
      }
    })
  }

  function handleCancelAddProject(){
    setProjectState(prevState => {
      return {
        ...prevState,
        selectedProject: undefined
      }
    })
  }

  function handleAddProject(projectData){
    const newProject = {
      ...projectData,
      id: Math.random()
    }
    setProjectState(prevState => {
      return {
        ...prevState,
        projects: [...prevState.projects, newProject]
      }
    })
  }
  
  const selectProject = projectState.projects.find(project => project.id === projectState.selectedProject)
  let content = 
  <SelectProject 
  project={selectProject} 
  onDelete={handleDeleteProject} 
  onAddTask={hanldeAddTask} 
  onDeletTask={hanldeDeleteTask}
  tasks ={projectState.tasks}
  />;

  if(projectState.selectedProject === null){
    content = <NewProject AddProject={handleAddProject} onCancel={handleCancelAddProject} />
  }
  else if(projectState.selectedProject === undefined){
    content = <NoProjectSelected onStartAddProject={hanldeStarAddProject} />
  }
  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectSidebar onSelectProject={handleSelectProject} 
      onStartAddProject={hanldeStarAddProject} 
      selectProjectId={projectState.selectedProject}
      projects={projectState.projects} /> 
      {content}
    </main>
  );
}

export default App;
