import {
  createRootRouteWithContext,
  Link,
  Outlet,
} from "@tanstack/react-router"
import { TanStackRouterDevtools } from "@tanstack/router-devtools"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"

// Footer Component
const Footer = () => (
  <footer className="absolute inset-x-0 bottom-0 bg-gray-300 dark:bg-gray-700 dark:text-white py-6">
    <div className="container mx-auto px-4">
      <div className="flex flex-col items-center space-y-4 md:space-y-0 md:flex-row md:justify-center">
        <nav className="flex justify-between w-full max-w-[500px] mx-auto">
          <Link
            to="/"
            className="text-gray-600 text-lg hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="text-gray-600 text-lg hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
          >
            About
          </Link>
          <Link
            to="/services"
            className="text-gray-600 text-lg hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
          >
            Services
          </Link>
          <Link
            to="/contact"
            className="text-gray-600 text-lg hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
          >
            Contact
          </Link>
        </nav>
      </div>
      <div className="mt-6 text-sm text-center text-gray-500">
        © 2024 DailyFlow. All rights reserved.
      </div>
    </div>
  </footer>
)

export const Route = createRootRouteWithContext()({
  component: () => (
    <>
      <div className="p-4 flex gap-4">
        <Link to="/" className="[&.active]:font-regular">
          Home
        </Link>
        <Link to="/habits" className="[&.active]:font-regular">
          Habits
        </Link>
        <Link to="/profile" className="[&.active]:font-regular">
          Profile
        </Link>
      </div>
      <hr />
      <Outlet />
      <Footer />
      <TanStackRouterDevtools />
      <ReactQueryDevtools />
    </>
  ),
})
