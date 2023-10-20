import Sidebar from "../../components/sidebar/Sidebar";
import NavBar from "../../components/navbar/NavBar"
import "./HomePage.scss";
import { Outlet } from "react-router-dom"

const HomePage = () => {
  return (
    <main>
      <NavBar/>
      <div className="home-page-body">
        <Sidebar/>
        <Outlet/>
      </div>
    </main>
  )
}

export default HomePage
