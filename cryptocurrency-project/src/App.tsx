import { RouterProvider } from "react-router-dom"
import { router } from "./routes"
import { LoadingProvider } from "./context/loading/loadingContext"
import { ThemeProvider } from "styled-components"
import dark from "./styles/themes/dark"
import { Header } from "./components/header"
import GlobalStyle from './styles/global.ts';
import usePersistedState from "./utils/usePersistedState.ts"
import { DefaultTheme } from "styled-components/dist/types"
import light from "./styles/themes/light.ts"

function App() {
  const [theme, setTheme] = usePersistedState<DefaultTheme>("theme", dark);

  const toggleTheme = () => {
    setTheme(theme.title === 'dark' ? light : dark)
  }

  return (
    <ThemeProvider theme={theme}>
      <LoadingProvider>
        <GlobalStyle/>
        <Header toggleTheme={toggleTheme} />
        <RouterProvider router={router}/>
      </LoadingProvider>
    </ThemeProvider>
    )
}

export default App
