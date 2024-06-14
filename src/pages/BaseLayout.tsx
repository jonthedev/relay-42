/**
 * Base Layout Component
 * ---------------------------------
 *
 * which is responsible for rendering a layout with centered alignment and
 * rendering child routes via react-router-dom's Outlet component.
 *
 */

import { Outlet } from "react-router-dom"

const BaseLayout = () => {
  return (
    <div className="align-element-center py-20">
      <Outlet />
    </div>
  )
}
export default BaseLayout
