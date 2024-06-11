/**
 * Error Component
 * ---------------
 *
 * This file defines the Error component, which displays an appropriate error message
 * based on the route error encountered while navigating through the application.
 *
 * The component uses the following hooks and functions from "react-router-dom":
 * - useRouteError: To get the current route error.
 * - isRouteErrorResponse: To determine if the error response is from the router and get its status.
 *
 * The Error component handles:
 * - Displaying a custom 404 error page when the error status is 404.
 * - Displaying a generic error message for other types of errors.
 */

import { useRouteError, Link, isRouteErrorResponse } from "react-router-dom"
import { Button } from "@/components/ui/button"

const Error = () => {
  const error = useRouteError()
  if (isRouteErrorResponse(error) && error.status === 404) {
    return (
      <main className="grid min-h-[100vh] place-items-center px-8 ">
        <div className="text-center">
          <p className="text-9xl font-semibold text-primary">404</p>
          <h1 className="mt-4 text-3xl font-bold tracking-tight sm:text-5xl">
            Page not found
          </h1>
          <p className="mt-6 text-lg leading-7">
            Sorry, we couldn’t find the page you’re looking for.
          </p>
          <div className="mt-10 ">
            <Button asChild size="lg" variant="secondary">
              <Link to="/">Go back home</Link>
            </Button>
          </div>
        </div>
      </main>
    )
  }

  return (
    <main className="grid min-h-[100vh] place-items-center px-8 ">
      <h4 className="text-center font-bold text-4xl">there was an error... </h4>
    </main>
  )
}
export default Error
