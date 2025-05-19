import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home'
import ArticleDetail from './pages/ArticleDetail'

const router = createBrowserRouter([
   {
    path: '/',
    element: <Home />
  },
  {
    path: '/:username/:slug',
    element: <ArticleDetail />
  }
])

function App(){
  return(
    <RouterProvider router={router} />
  )
}

export default App
