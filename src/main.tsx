import React, { StrictMode } from "react"
import ReactDOM from "react-dom/client"
import { RouterProvider } from "@tanstack/react-router"
import { QueryClientProvider } from "@tanstack/react-query"
import { router } from "./config/router" // Ensure this path is correct
import { queryClient } from "./config/queryClient" // Ensure this path is correct
import "./index.css" // Import your global styles

// Get the root element where the app will be mounted
const rootElement = document.getElementById("app")
if (rootElement) {
  // Only create the root if the element exists
  const root = ReactDOM.createRoot(rootElement)
  root.render(
    <StrictMode>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </StrictMode>
  )
} else {
  console.error('Root element with ID "app" not found.')
}
