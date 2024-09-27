import React, { useEffect, useState } from "react"
import { fetchRandomQuote, KanyeQuote } from "../api/kanyeQuotesApi"

const QuoteComponent: React.FC = () => {
  const [quote, setQuote] = useState<KanyeQuote | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState<boolean>(true) // Manage loading state here

  // Function to fetch a new quote
  const getNewQuote = async () => {
    setLoading(true) // Start loading
    const { quote, error } = await fetchRandomQuote() // Call the API function

    setQuote(quote) // Update quote state
    setError(error) // Update error state if any
    setLoading(false) // Loading finished
  }

  // Fetch the initial quote on component mount
  useEffect(() => {
    getNewQuote()
  }, [])

  if (loading) {
    return <p className="flex justify-center text-sm">Loading...</p> // Display loading message while fetching
  }

  if (error) {
    return <p className="flex justify-center text-sm">{error}</p> // Display error message if any
  }

  return (
    <div className="flex flex-col justify-center items-center">
      {quote && (
        <blockquote className="w-fit text-sm rounded-md p-4 mb-4 bg-gray-300 dark:bg-gray-700">
          "{quote.quote}"
        </blockquote>
      )}{" "}
      {/* Access the quote property */}
      <button
        className="w-fit mt-4 p-3 text-sm transition-colors bg-gray-300 text-gray-600 hover:bg-gray-400 hover:text-gray-700 rounded-md shadow-sm dark:bg-gray-700 dark:hover:bg-gray-800 dark:text-white"
        onClick={getNewQuote}
      >
        Get Another Quote
      </button>{" "}
      {/* Button to fetch a new quote */}
    </div>
  )
}

export default QuoteComponent
