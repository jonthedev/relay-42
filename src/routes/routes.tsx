import { createBrowserRouter } from "react-router-dom"
import Error from "@/pages/Error"
import MissionManagement from "@/pages/MissionManagement"
import HomeLayout from "@/pages/HomeLayout"
import Missions from "@/pages/Missions"

const routes = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Missions heading="All missions will render here" />
      },
      {
        path: "/missions-management",
        element: <MissionManagement />
      }
    ]
  },
  {
    path: "/new-mission",
    element: <MissionManagement />,
    errorElement: <Error />
  }
])

export default routes
