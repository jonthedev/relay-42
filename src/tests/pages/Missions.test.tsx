import Missions from "@/pages/Missions"
import Providers from "@/providers"
import { render, screen } from "@testing-library/react"

describe("Missions", () => {
  it("should render a heading with text 'missions'", () => {
    render(<Missions />, { wrapper: Providers })

    const heading = screen.getByRole("heading")
    expect(heading).toBeInTheDocument()
    expect(heading).toHaveTextContent(/missions/i)
  })
})
