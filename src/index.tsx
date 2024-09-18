// src/index.tsx
import React, { StrictMode } from "react"
import ReactDOM from "react-dom/client"
import { RouterProvider } from "@tanstack/react-router"
import { QueryClientProvider } from "@tanstack/react-query"
import { router } from "./config/router" // Import router from config
import { queryClient } from "./config/queryClient" // Import query client from config
import "./index.css" // Import global styles

// Get the root element where the app will be mounted
const rootElement = document.getElementById("app")

if (rootElement) {
  const root = ReactDOM.createRoot(rootElement)
  root.render(
    <StrictMode>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </StrictMode>
  )
}
