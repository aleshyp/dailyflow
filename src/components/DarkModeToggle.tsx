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
