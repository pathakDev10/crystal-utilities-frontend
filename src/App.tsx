import { QueryClientProvider, QueryClient } from "@tanstack/react-query"
import { createBrowserRouter, RouterProvider } from "react-router-dom"

const queryClient = new QueryClient()

function App() {

  const router = createBrowserRouter([{
    path: "/",
    element: <h1>HI</h1>
  }])

  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  )
}

export default App
