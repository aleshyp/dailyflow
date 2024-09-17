import { createRootRouteWithContext, Outlet } from "@tanstack/react-router"
import { TanStackRouterDevtools } from "@tanstack/router-devtools"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"
import Footer from "../footer.tsx"
import Header from "../header.tsx"

// Define the root route with context
export const Route = createRootRouteWithContext()({
  component: () => (
    <>
      <Header />
      <hr />
      <Outlet /> {/* Renders child routes here */}
      <Footer />
      <TanStackRouterDevtools />
      <ReactQueryDevtools />
    </>
  ),
})
