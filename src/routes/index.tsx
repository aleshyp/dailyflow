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
        className="mt-4 p-2 text-sm bg-gray-300 text-gray-600 rounded-md shadow-sm dark:bg-gray-700 dark:text-white"
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
    </div>
  )
}
