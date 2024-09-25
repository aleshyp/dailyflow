import express, { Request, Response } from "express"
import axios from "axios"
import cors from "cors"

const app = express()
const PORT = 5173

app.use(cors())

// Proxy endpoint
app.get("/api/random-quote", async (req: Request, res: Response) => {
  try {
    const response = await axios.get("https://zenquotes.io/api/random")
    res.json(response.data)
  } catch (error) {
    res.status(500).json({ error: "Error fetching quote" })
  }
})

app.listen(PORT, () => {
  console.log(`Proxy server running on http://localhost:${PORT}`)
})
