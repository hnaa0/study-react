import GlobalStyle from "./GlobalStyle";
import ButtonSlider from "./components/ButtonSlider";
import InfiniteRollingSlider from "./components/InfiniteRollingSlider";
import InfiniteSlider from "./components/InfiniteSlider";
import { ThemeProvider } from "styled-components";
import theme from "./components/Theme";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <InfiniteRollingSlider />
        <ButtonSlider />
        <InfiniteSlider />
      </ThemeProvider>
    </>
  );
}

export default App;
