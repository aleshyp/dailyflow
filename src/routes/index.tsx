import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: () => <p className="text=7xl text-red-500">Hello!</p>,
});
