import React from "react"
import DarkModeToggle from "../components/DarkModeToggle"

const Profile: React.FC = () => {
  return (
    <div className="text-5xl p-spacing">
      <h1 className="pb-inner-spacing gap-spacing text-center">
        This will be your profile!
      </h1>
      <DarkModeToggle />
    </div>
  )
}

export const Route = Profile

export default Profile
