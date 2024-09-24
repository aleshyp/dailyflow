import React, { useEffect, useState } from "react"
import { fetchStoicQuote } from "../api/stoicQuotesApi"

const QuoteComponent: React.FC = () => {
  const [quote, setQuote] = useState<string | null>(null)
  const [author, setAuthor] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const getQuote = async () => {
      try {
        const { quote, author } = await fetchStoicQuote()
        setQuote(quote)
        setAuthor(author)
      } catch (err) {
        setError("Failed to load the quote")
      }
    }

    getQuote()
  }, [])

  if (error) {
    return <div>{error}</div>
  }

  return (
    <div>
      {quote ? (
        <div>
          <p>{quote}</p>
          <p>— {author}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  )
}

export default QuoteComponent
