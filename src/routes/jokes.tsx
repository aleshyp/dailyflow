import { useSuspenseQuery } from "@tanstack/react-query"
import { createFileRoute } from "@tanstack/react-router"
import { createJokeQueryOptions } from "../api/createJokeQueryOptions"

export const Route = createFileRoute("/jokes")({
  loader: async ({ context: { queryClient } }) => {
    queryClient.ensureQueryData(createJokeQueryOptions())
  },
  component: Jokes,
})

function Jokes() {
  const { data: joke } = useSuspenseQuery(createJokeQueryOptions())

  if (!joke) return <div>Loading...</div>

  return (
    <div className="group p-spacing">
      <h1 className="text-5xl pb-inner-spacing gap-spacing">Jokes</h1>
      <p className="font-bold">{joke.setup}</p>
      <div className="py-inner-spacing">
        Reveal Joke:
        <input type="checkbox" className="ml-2 transition-opacity" />
      </div>
      <p className="transition-opacity opacity-0 group-has-[input:checked]:opacity-100">
        {joke.punchline}
      </p>
      <button
        className="mt-4 p-inner-spacing bg-green-500 text-white rounded-md shadow-sm transition-colors hover:bg-green-400"
        onClick={() => window.location.reload()}
      >
        Get Another Joke
      </button>
    </div>
  )
}
