import GlobalStyle from "./GlobalStyle";
import ButtonSlider from "./components/ButtonSlider";
import InfiniteRollingSlider from "./components/InfiniteRollingSlider";
import InfiniteSlider from "./components/InfiniteSlider";

function App() {
  return (
    <>
      <GlobalStyle />
      <InfiniteRollingSlider />
      <ButtonSlider />
      <InfiniteSlider />
    </>
  );
}

export default App;
