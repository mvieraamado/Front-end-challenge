import { createContext, useState } from "react";

export const ProjectContext = createContext([]);

export const ProjectProvider = ({children})=> {
  const [ projects, setProjects ] = useState([
    {
      id: 1,
      name: "Landing Page",
      description: "some description",
      projectManager: "Walt Cosani",
      assignedTo: "Ignacio Truffa",
      status: "Disabled",
      date: new Date()
    },
    {
      id: 2,
      name: "Esto es - Challenge",
      description: "Frontend challenge",
      projectManager: "Esto es",
      assignedTo: "Mariam Viera Amado",
      status: "Enabled",
      date: new Date()
    },
    {
      id: 3,
      name: "Caelum Joyas",
      description: "First project",
      projectManager: "Chris Viera",
      assignedTo: "Mariam Viera Amado",
      status: "Enabled",
      date: new Date()
      }
  ])

  const deleteProject = (id)=> {
    setProjects((item) => item.filter((e) => e !== id));
  }

  const validateForm = (values)=>{
      
    const errors = {};
    if (!values.name) {
      errors.name = 'Required';
    }
    if (!values.description) {
      errors.description = 'Required';
    }
    if (!values.projectManager) {
      errors.projectManager = 'Required';
    }
    if (!values.assignedTo) {
      errors.assignedTo = 'Required';
    }
    if (!values.status) {
      errors.status = 'Required';
    }
    return errors;
  }

  return (
    <ProjectContext.Provider 
      value={{ 
        deleteProject,
        projects,
        setProjects,
        validateForm
      }}>
      {children}
    </ProjectContext.Provider>
  )
}