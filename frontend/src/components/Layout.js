import { Link ,Outlet } from "react-router-dom"
import "../Csss/Layout.css"
const Layout = () => {
  return (
    <div>
      <div className="navbar">
        <Link to="/add" className="navbar-link">Add Data</Link>
        <Link to="/chart" className="navbar-link">Display Data</Link>
      </div>
      <hr />
      <Outlet />
    </div>
  )
}

export default Layout
