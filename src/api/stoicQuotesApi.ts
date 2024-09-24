import axios from "axios"

// Define types for the API response
interface StoicQuote {
  author: string
  quote: string
}

const STOIC_QUOTE_API_URL = "https://stoic.tekloon.net/stoic-quote"

// Function to fetch a Stoicism quote
export const fetchStoicQuote = async (): Promise<StoicQuote> => {
  try {
    const response = await axios.get<StoicQuote>(STOIC_QUOTE_API_URL)
    return response.data
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error("Axios error: ", error.response?.status, error.message)
    } else {
      console.error("Unknown error: ", error)
    }
    throw error // Re-throw the error so the component catches it
  }
}
