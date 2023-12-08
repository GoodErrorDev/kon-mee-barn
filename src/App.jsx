import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import FooterComponent from './components/footer/footer'
import HeaderComponent from './components/header/header'
import './App.css'
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from "react-router-dom";
import Hero from './pages/hero/hero'
import NotFound from './pages/404/notfound'
import Dashoard from './pages/dashboard/dashboard'
import Layout from './components/layout/layout'

const routes = [
  { path: '/', element: <Hero /> },
  { path: '/home', element: <Dashoard /> },
];
export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route element={<Layout />}>
            <Route path="/home" element={<Dashoard />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}