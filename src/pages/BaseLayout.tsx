import { Outlet } from "react-router-dom"

const BaseLayout = () => {
  return (
    <div className="align-element-center py-20">
      <Outlet />
    </div>
  )
}
export default BaseLayout
