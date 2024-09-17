import { createFileRoute } from "@tanstack/react-router"
import Home from "./pages/Home"
import Habits from "./pages/Habits"
import Profile from "./pages/Profile"

// Define routes with paths
export const homeRoute = createFileRoute("/")({
  component: Home,
})

export const habitsRoute = createFileRoute("/Habits")({
  component: Habits,
})

export const profileRoute = createFileRoute("/Profile")({
  component: Profile,
})
