import React, { useEffect, useState } from "react"
import { fetchRandomQuote, ZenQuote } from "../api/zenQuotesApi"

const QuoteDisplay: React.FC = () => {
  const [quote, setQuote] = useState<ZenQuote | null>(null)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const getQuote = async () => {
      try {
        const fetchedQuote = await fetchRandomQuote() // Fetch the quote
        console.log("Fetched Quote:", fetchedQuote) // Debug log
        setQuote(fetchedQuote) // Set the fetched quote
      } catch (err) {
        setError("Failed to load quote")
      }
    }

    getQuote()
  }, [])

  // Debug log for error state
  if (error) {
    console.error("Error:", error)
    return <p>{error}</p>
  }

  // Debug log for quote state
  console.log("Current Quote:", quote)

  return (
    <div>
      {quote ? (
        <blockquote>
          "{quote.q}" - {quote.a}
        </blockquote>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  )
}

export default QuoteDisplay
