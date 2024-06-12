import { screen } from "@testing-library/react"
import { navigateTo } from "../utils"

describe("Router", () => {
  it("should render home page for /", () => {
    navigateTo("/")

    expect(
      screen.getByRole("heading", { name: /missions/i })
    ).toBeInTheDocument()
  })
})
