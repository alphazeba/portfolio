import './App.css'
import About from './pages/about';
import Home from './pages/home';
import Work from './pages/work';
import Projects from './pages/projects';
import Header from './header';
import { HashRouter, Routes, Route } from "react-router";

export default function App() {
  return (
    <HashRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/whodis" element={<About/>}/>
        <Route path="/projects" element={<Projects/>}/>
        <Route path="/work" element={<Work/>}/>
      </Routes>
    </HashRouter>
  )
}
