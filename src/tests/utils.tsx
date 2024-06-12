import routes from "@/routes/routes"

import { render } from "@testing-library/react"
import { RouterProvider, createMemoryRouter } from "react-router-dom"

export const navigateTo = (path: string) => {
  const router = createMemoryRouter(routes, {
    initialEntries: [path]
  })

  render(<RouterProvider router={router} />)
}
