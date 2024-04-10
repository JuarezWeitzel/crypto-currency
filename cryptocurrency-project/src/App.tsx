import { RouterProvider } from "react-router-dom"
import { router } from "./routes"
import { LoadingProvider } from "./context/loading/loadingContext"
import { ThemeProvider } from "styled-components"
import dark from "./styles/themes/dark"
import { Header } from "./components/header"
import GlobalStyle from './styles/global.ts';
import light from "./styles/themes/light"

function App() {

  return (
    <ThemeProvider theme={dark}>
      <LoadingProvider>
        <GlobalStyle/>
        <Header/>
        <RouterProvider router={router}/>
      </LoadingProvider>
    </ThemeProvider>
    )
}

export default App
