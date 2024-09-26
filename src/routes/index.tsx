import { createFileRoute } from "@tanstack/react-router"
import DarkModeToggle from "../components/DarkModeToggle"
import QuoteComponent from "../components/QuoteComponent"

export const Route = createFileRoute("/")({
  component: Home,
})

// Create
function Home() {
  return (
    <div className="text-5xl p-spacing pt-20">
      <h1 className="pb-8 gap-spacing text-center">Welcome to DailyFlow!</h1>
      <QuoteComponent />
      <DarkModeToggle />
    </div>
  )
}
