import { RouterProvider } from "react-router-dom"
import { router } from "./routes"
import { LoadingProvider } from "./context/loading/loadingContext"

function App() {

  return (
      <LoadingProvider>
        <RouterProvider router={router}/>
      </LoadingProvider>
    )
}

export default App
