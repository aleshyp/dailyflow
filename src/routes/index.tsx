import { createFileRoute } from "@tanstack/react-router"
import React, { useEffect, useState } from "react"

const DarkModeToggle = () => {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("dark-mode") === "true"
  })

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark")
      localStorage.setItem("dark-mode", "true")
    } else {
      document.documentElement.classList.remove("dark")
      localStorage.setItem("dark-mode", "false")
    }
  }, [darkMode])

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  }

  return (
    <div className="flex justify-center">
      <button
        className="mt-4 p-2 text-sm transition-colors bg-gray-300 text-gray-600 hover:bg-gray-400 rounded-md shadow-sm dark:bg-gray-700 dark:hover:bg-gray-800 dark:text-white"
        onClick={toggleDarkMode}
      >
        Toggle Dark Mode
      </button>
    </div>
  )
}

export default DarkModeToggle

export const Route = createFileRoute("/")({
  component: Home,
})
// Create
function Home() {
  return (
    <div className="text-5xl p-spacing">
      <h1 className="pb-inner-spacing gap-spacing text-center">
        Welcome to DailyFlow!
      </h1>
      <DarkModeToggle />

      <footer className="absolute inset-x-0 bottom-0 bg-gray-300 dark:bg-gray-700 dark:text-white py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center space-y-4 md:space-y-0 md:flex-row md:justify-center">
            <nav className="flex justify-between w-full max-w-[500px] mx-auto">
              <a
                href="#"
                className="text-gray-600 text-lg hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
              >
                Home
              </a>
              <a
                href="#"
                className="text-gray-600 text-lg hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
              >
                About
              </a>
              <a
                href="#"
                className="text-gray-600 text-lg hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
              >
                Services
              </a>
              <a
                href="#"
                className="text-gray-600 text-lg hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
              >
                Contact
              </a>
            </nav>
          </div>
          <div className="mt-6 text-sm text-center text-gray-500">
            © 2024 DailyFlow. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}
