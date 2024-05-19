import { useState } from 'react'
import './App.css'
import Switcher from './components/Switcher'
// import { useTranslation } from '  react-i18next'
import Layout from './Layout/Layout'
import About from './pages/About/About'
import NotFound from './pages/NotFound/NotFound'
import Trend from './pages/Trend/Trend'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home/Home'
import Music from './pages/Music/Music'




function App ()  {
  const router = createBrowserRouter ( [ 
    {
      path : "/",
      element : <Layout />,
      children : [
        {
          index : true ,
          element : <Home />
        },
        {
          path : "about" ,
          element : <About />
        },
        {
          path : "Trend" ,
          element : <Trend />
        },
        {
          path : "Music" ,
          element : <Music />
        },
        {
          path : "*",
          element : <NotFound />
        }
      ]
    },
  ])


  return (
    <>
    <div className='dark:bg-black text-black dark:text-white h-auto'>
        <RouterProvider router={router} />
      {/* <Switcher /> */}

    
    
    </div>
    
    </>
  )
}

export default App
