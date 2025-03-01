import './App.css'
import About from './pages/about';
import Home from './pages/home';
import Work from './pages/work';
import Projects from './pages/projects';
import Header, { ROUTE_ABOUT, ROUTE_HOME, ROUTE_PROJECT, ROUTE_WORK } from './bits/header';
import { HashRouter, Routes, Route } from "react-router";
import Footer from './bits/footer';

export default function App() {
  return (
    <HashRouter>
      <Header/>
      <Routes>
        <Route path={ROUTE_HOME} element={<Home/>}/>
        <Route path={ROUTE_ABOUT} element={<About/>}/>
        <Route path={ROUTE_PROJECT} element={<Projects/>}/>
        <Route path={ROUTE_WORK} element={<Work/>}/>
      </Routes>
      <Footer/>
    </HashRouter>
  )
}
