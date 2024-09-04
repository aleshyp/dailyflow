import { useQuery } from "@tanstack/react-query"
import { createFileRoute } from "@tanstack/react-router"
import { createJokeQueryOptions } from "../api/createJokeQueryOptions"

export const Route = createFileRoute("/jokes")({
  component: Jokes,
})

function Jokes() {
  const { data: joke } = useQuery(createJokeQueryOptions())

  if (!joke) return <div>Loading...</div>

  return (
    <div className="text-5xl p-spacing">
      <h1 className="pb-spacing gap-spacing">Jokes</h1>
    </div>
  )
}
