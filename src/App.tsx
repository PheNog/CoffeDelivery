import { BrowserRouter } from "react-router-dom";
import { Router } from "./Router";
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'
import { GlobalStyle } from './styles/global'
import { CoffeContextProvider } from "./contexts/CoffesContext";

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={defaultTheme}>
        <CoffeContextProvider>
          <Router />
        </CoffeContextProvider>
        <GlobalStyle />
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App
