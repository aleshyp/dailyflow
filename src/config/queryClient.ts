// src/queryClient.ts
import { QueryClient } from "@tanstack/react-query"

// Customize the QueryClient if necessary
export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
      refetchOnWindowFocus: false,
    },
  },
})
