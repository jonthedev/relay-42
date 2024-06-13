/**
 * Router.test.ts
 * ---------------
 *
 * This file contains test cases for verifying the routing functionality
 * of the application. It ensures that the appropriate components are rendered
 * based on the current route.
 *
 * The `navigateTo` function from the utils module is used to simulate navigation
 * to different routes within the tests.
 *
 * Dependencies:
 * - @testing-library/react for rendering components in tests.
 * - react-router-dom for routing functionalities.
 *
 * Usage:
 * These tests can be run using the configured test runner (e.g., Vitest) to ensure
 * that the routing logic in the application works as expected.
 */

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
