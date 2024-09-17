import React from "react"
import DarkModeToggle from "../components/DarkModeToggle"

const Habits: React.FC = () => {
  return (
    <div className="text-5xl p-spacing">
      <h1 className="pb-inner-spacing gap-spacing text-center">
        Here will be your habits!
      </h1>
      <DarkModeToggle />
    </div>
  )
}

export const Route = Habits

export default Habits
