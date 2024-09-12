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
        className="mt-4 p-2 text-sm transition-colors bg-gray-300 text-gray-600 hover:bg-gray-400 hover:text-gray-700 rounded-md shadow-sm dark:bg-gray-700 dark:hover:bg-gray-800 dark:text-white"
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

export const habitsRoute = createFileRoute("/")({
  component: Habits,
})

export const profileRoute = createFileRoute("/")({
  component: Profile,
})

// Create
function Home() {
  return (
    <div className="text-5xl p-spacing pt-20">
      <h1 className="pb-inner-spacing gap-spacing text-center">
        Welcome to DailyFlow!
      </h1>
      <DarkModeToggle />
    </div>
  )
}

function Habits() {
  return (
    <div className="text-5xl p-spacing">
      <h1 className="pb-inner-spacing gap-spacing text-center">
        Here will be your habits!
      </h1>
      <DarkModeToggle />
    </div>
  )
}

function Profile() {
  return (
    <div className="text-5xl p-spacing">
      <h1 className="pb-inner-spacing gap-spacing text-center">
        This will be your profile!
      </h1>
      <DarkModeToggle />
    </div>
  )
}
