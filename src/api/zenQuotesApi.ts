import axios from "axios"

// Define types for the API response
export interface ZenQuote {
  a: string
  q: string
}

const ZEN_QUOTE_API_URL = "http://localhost:5173/api/random-quote"

// Function to fetch a random quote
export const fetchRandomQuote = async (): Promise<ZenQuote> => {
  try {
    // Use axios to fetch the random quote
    const response = await axios.get<ZenQuote>(ZEN_QUOTE_API_URL)

    // Return the quote data directly
    return response.data
  } catch (error) {
    console.error("Failed to fetch the random quote:", error)
    throw error
  }
}
