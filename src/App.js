import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddProject from "./components/Administrator/AddProject";
import EditProject from "./components/Administrator/EditProject";
import ProjectList from "./components/ProjectList/ProjectList";
import { ProjectProvider } from "./context/ProjectContext";

function App() {
  return (
    <div className="App">
      <header className="text-start p-2 b border-bottom border-secondary">
        <img src="../../logo.png" alt="logo"/>
      </header>
      <ProjectProvider>
        <Router>
          <Routes>
            <Route path="/" element={<ProjectList />}/>
            <Route path="/create" element={<AddProject/>}/>
            <Route path="/edit/:id" element={<EditProject/>}/>
          </Routes>
        </Router>
      </ProjectProvider>
    </div>
  );
}

export default App;
