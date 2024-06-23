import { Link ,Outlet } from "react-router-dom"
const Layout = () => {
  return (
    <div>
      <Link to="/add">Add Data</Link>
      <Link to="/chart">Display Data</Link>
      <hr />    
      <Outlet />

    </div>
  )
}

export default Layout
