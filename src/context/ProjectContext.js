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
      projectManager: "Olga Amado",
      assignedTo: "Mariam Viera Amado",
      status: "Enabled",
      date: new Date()
      },
    {
      id: 4,
      name: "My app",
      description: "Project",
      projectManager: "Olga Amado",
      assignedTo: "Mariam Viera Amado",
      status: "Enabled",
      date: new Date()
    },
    {
      id: 5,
      name: "JavaScript",
      description: "Project",
      projectManager: "Olga Amado",
      assignedTo: "Mariam Viera Amado",
      status: "Enabled",
      date: new Date()
    },
    {
      id: 6,
      name: "Blog",
      description: "Some description",
      projectManager: "Olga Amado",
      assignedTo: "Mariam Viera Amado",
      status: "Enabled",
      date: new Date()
    },
    {
      id: 7,
      name: "My projects",
      description: "Some description",
      projectManager: "Olga Amado",
      assignedTo: "Mariam Viera Amado",
      status: "Enabled",
      date: new Date()
    }
  ])

  /* Pagination */
  const [currentPage, setCurrentPage] = useState(0);

  const filteredProjects = () => {
    return projects.slice(
      currentPage,
      currentPage + 4
    );
  }

  const handlePrevPage = () => {
    if (currentPage > 0)
      setCurrentPage(currentPage - 4);
  };

  const handleNextPage = () => {
    setCurrentPage(currentPage + 4);
  };
  
  /* Modal */
  const [showModal, setShowModal ] = useState(false);
  const handleCloseModal = () => setShowModal(false);

  const deleteConfirm = ()=> setShowModal(true);

  const deleteProject = (id)=> {
    setProjects((item) => item.filter((e) => e.id !== id));
    handleCloseModal();
  }

  /* Validation form */
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
        validateForm,
        handleCloseModal,
        showModal,
        setShowModal,
        deleteConfirm, 
        filteredProjects,
        currentPage,
        setCurrentPage,
        handlePrevPage,
        handleNextPage
      }}>
      {children}
    </ProjectContext.Provider>
  )
}