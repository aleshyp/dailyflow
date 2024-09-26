// zenQuotesApi.ts
export interface KanyeQuote {
  quote: string // Quote text; note that the property name should match the API response
}

const KANYE_QUOTE_API_URL = "https://api.kanye.rest"

// Modify fetchRandomQuote to handle error and loading state within the API function
export const fetchRandomQuote = async (): Promise<{
  quote: KanyeQuote | null
  error: string | null
}> => {
  try {
    const response = await fetch(KANYE_QUOTE_API_URL, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })

    if (!response.ok) {
      throw new Error("Failed to fetch quote")
    }

    const data: KanyeQuote = await response.json() // Fetch a single quote object
    return { quote: data, error: null } // Return the quote object and no error
  } catch (error) {
    return { quote: null, error: "Failed to load quote" } // Return null for quote and the error message
  }
}
