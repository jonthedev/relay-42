import { createBrowserRouter } from "react-router-dom"
import Home from "@/pages/Home"
import Error from "@/pages/Error"
import MissionManagement from "@/pages/MissionManagement"

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <Error />
  },
  {
    path: "/new-mission",
    element: <MissionManagement />,
    errorElement: <Error />
  }
])

export default routes
