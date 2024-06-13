import { Outlet } from "react-router-dom"

const BaseLayout = () => {
  return (
    <div className="align-element-center">
      <header>Header</header>
      <nav>Navbar</nav>
      <Outlet />
    </div>
  )
}
export default BaseLayout
