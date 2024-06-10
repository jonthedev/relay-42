import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from "./pages/Home"
import Error from "./pages/Error"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <Error />
  }
])

function App() {
  return <RouterProvider router={router}></RouterProvider>
}

export default App
