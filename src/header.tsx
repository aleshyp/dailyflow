import { Link } from "@tanstack/react-router"

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 bg-gray-300 shadow-sm dark:bg-gray-700">
      <div className="max-w-7xl p-4 flex gap-4 sm:px-6 lg:px-8">
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
    </header>
  )
}
