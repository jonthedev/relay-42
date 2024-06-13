import { Error } from "@/pages"
import MissionManagement from "@/pages/MissionManagement"
import { Missions } from "@/pages"
import App from "@/App"
import { RouteObject } from "react-router-dom"

const routes: RouteObject[] = [
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Missions heading="All missions will render here" />
      },
      {
        path: "/new-mission",
        element: <MissionManagement />,
        errorElement: <Error />
      }
    ]
  }
]

export default routes
