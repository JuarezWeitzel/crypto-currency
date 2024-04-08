import { RouterProvider } from "react-router-dom";
import { router } from "./routes";
import { LoadingProvider } from "./context/loading/loadingContext";
import GlobalStyle from "./styles/global.ts";
import { ThemeProvider } from "styled-components";
import {
  ThemeContextProvider,
  useThemeContext,
} from "./context/theme/themeContext.tsx";

function App() {
  const { theme } = useThemeContext();

  return (
    <ThemeContextProvider>
      <ThemeProvider theme={theme}>
        <LoadingProvider>
          <GlobalStyle />
          <RouterProvider router={router} />
        </LoadingProvider>
      </ThemeProvider>
    </ThemeContextProvider>
  );
}

export default App;
