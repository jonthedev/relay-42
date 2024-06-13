import Missions from "@/pages/Missions"
import Providers from "@/providers"
import { render, screen } from "@testing-library/react"
import { MemoryRouter } from "react-router-dom"

describe("Missions", () => {
  it("should render a heading with text 'missions'", () => {
    render(
      <MemoryRouter>
        <Providers>
          <Missions />
        </Providers>
      </MemoryRouter>
    )

    const heading = screen.getByRole("heading")
    expect(heading).toBeInTheDocument()
    expect(heading).toHaveTextContent(/missions/i)
  })
})
