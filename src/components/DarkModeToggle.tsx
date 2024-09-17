import React, { useEffect, useState } from "react"

const DarkModeToggle: React.FC = () => {
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    return localStorage.getItem("dark-mode") === "true"
  })

  useEffect(() => {
    try {
      if (darkMode) {
        document.documentElement.classList.add("dark")
        localStorage.setItem("dark-mode", "true")
      } else {
        document.documentElement.classList.remove("dark")
        localStorage.setItem("dark-mode", "false")
      }
    } catch (error) {
      console.error("Error toggling dark mode", error)
    }
  }, [darkMode])

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  }

  return (
    <div className="flex justify-center">
      <button
        className="mt-4 p-2 text-sm bg-gray-300 text-gray-600 hover:bg-gray-400 hover:text-gray-700 rounded-md shadow-sm dark:bg-gray-700 dark:hover:bg-gray-800 dark:text-white"
        onClick={toggleDarkMode}
      >
        Toggle Dark Mode
      </button>
    </div>
  )
}

export default DarkModeToggle
