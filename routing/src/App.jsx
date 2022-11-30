import { Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './components/HomePage/HomePage'
import AboutPage from './components/AboutPage/AboutPage'
import ProjectsPage from './components/ProjectsPage/ProjectsPage'
import ProjectDetails from './components/ProjectDetails/ProjectDetails'
import NotFoundPage from './components/NotFoundPage/NotFoundPage'
import Navbar from './components/Navbar/Navbar'
import ProfilePage from './components/ProfilePage/ProfilePage'
import QueryStringExample from './components/QueryStringExample/QueryStringExample'


function App() {

  return (

    <main className='App'>

      <Navbar />

      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/projects' element={<ProjectsPage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/profile' element={<ProfilePage />} />

        <Route path='/projects/:project_id' element={<ProjectDetails />} />
        <Route path='/querys' element={<QueryStringExample />} />

        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </main>
  );
}

export default App;
