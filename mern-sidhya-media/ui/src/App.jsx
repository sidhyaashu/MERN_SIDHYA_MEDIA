import './App.css'
import { createBrowserRouter,RouterProvider } from "react-router-dom";



/**Import pages */
import HomePage from "./pages/homePage/HomePage"
import LoginPage from './pages/authPage/LoginPage';
import RegisterPage from './pages/authPage/RegisterPage';


/**create routes */
const router = createBrowserRouter([
  {
    path: "/",
    exact: true,
    element:<HomePage/>
  },
  {
    path: "/login",
    exact: true,
    element:<LoginPage/>
  },
  {
    path: "/register",
    exact: true,
    element:<RegisterPage/>
  },
])

const App = () => {
  return <RouterProvider router={router}/>
}

export default App

