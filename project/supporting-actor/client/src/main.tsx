import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Root from './routes/root'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
  },
  {
    path: "movies",
    element: <h1>Movies</h1>
  },
  {
    path: "series",
    element: <h1>Series</h1>
  },
  {
    path: "animations",
    element: <h1>Animations</h1>
  }
])
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
