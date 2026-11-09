import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import ThemeContextProvider from './context/ThemeContextProvider.jsx'
import Layout from './Layout.jsx'

import Home from "./components/Home/Home.jsx";
import About from "./components/About/About.jsx";
import Menu from './components/Menu/Menu.jsx'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='about' element={<About />} />
                    <Route path='menu' element={<Menu />} />

      
      {/* <Route path='menu' element={<Menu />} />  */}
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeContextProvider>
    <RouterProvider router={router} />
    </ThemeContextProvider>
  </React.StrictMode>
)
