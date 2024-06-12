import Missions from "@/pages/Missions"
import { render, screen } from "@testing-library/react"

describe("Missions", () => {
  it('should render "This is a mission" text when a string is provided', () => {
    render(<Missions heading="This is a mission" />)

    const heading = screen.getByRole("heading")
    expect(heading).toBeInTheDocument()

    screen.debug()
  })
})
