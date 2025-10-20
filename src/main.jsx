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
import Login from './pages/Login.jsx';
import SignUp from './pages/SignUp.jsx';
import AuthLayout from './layout/AuthLayout.jsx';
import AuthProvider from './provider/AuthProvider.jsx';
import NewsDetails from './pages/NewsDetails.jsx';

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
        loader: () => fetch("/news.json") 
      }
    ]
  },
  {
    path:"/auth",
    element: <AuthLayout/>,
    children:[
      {
        path:"/auth/login",
        element: <Login/>
      },
      {
        path:"/auth/signup",
        element: <SignUp/>
      }
    ]

  },
  {
    path:"/news-details/:id",
    element: <NewsDetails/>,
     loader: () => fetch("/news.json") 
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>

    <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)
