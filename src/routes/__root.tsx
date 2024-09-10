import {
  createRootRouteWithContext,
  Link,
  Outlet,
} from "@tanstack/react-router"
import { TanStackRouterDevtools } from "@tanstack/router-devtools"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"

export const Route = createRootRouteWithContext()({
  component: () => (
    <>
      <div className="p-4 flex gap-4">
        <Link to="/" className="[&.active]:font-regular">
          Home
        </Link>{" "}
        <Link to="/" className="[&.active]:font-regular">
          Habits
        </Link>{" "}
        <Link to="/" className="[&.active]:font-regular">
          Profile
        </Link>{" "}
      </div>
      <hr />
      <Outlet />
      <TanStackRouterDevtools />
      <ReactQueryDevtools />
    </>
  ),
})
