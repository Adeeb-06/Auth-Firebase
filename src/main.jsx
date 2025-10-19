import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Root from './layout/Root.jsx';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import CategoryNews from './pages/CategoryNews.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element:<Root/>,
    children:[
      {
        path:"",
        element:<Home/>,
      },
      {
        path:"/category/:id",
        element: <CategoryNews/> ,
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
