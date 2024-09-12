import {
  createRootRouteWithContext,
  Link,
  Outlet,
} from "@tanstack/react-router"
import { TanStackRouterDevtools } from "@tanstack/router-devtools"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"
import Footer from "../footer.tsx"
import Header from "../header.tsx"

export const Route = createRootRouteWithContext()({
  component: () => (
    <>
      <hr />
      <Outlet />
      <Header />
      <Footer />
      <TanStackRouterDevtools />
      <ReactQueryDevtools />
    </>
  ),
})
