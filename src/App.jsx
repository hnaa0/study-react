import "./App.css";
import ButtonSlider from "./components/ButtonSlider";
import InfiniteRollingSlider from "./components/InfiniteRollingSlider";
import InfiniteSlider from "./components/InfiniteSlider";

function App() {
  return (
    <>
      <InfiniteRollingSlider />
      <ButtonSlider />
      <InfiniteSlider />
    </>
  );
}

export default App;
