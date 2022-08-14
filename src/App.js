import { CssBaseline } from "@mui/material";
import RandomPage from "./components/RandomPage";
import WelcomePage from "./components/WelcomePage";
import { FoodContext } from "./foodContext";
import { useContext } from "react";

const App = () => {
  const { openRandom } = useContext(FoodContext);
  return (
    <>
      <CssBaseline />
      {!openRandom && <WelcomePage />}
      {openRandom && <RandomPage />}
    </>
  );
};

export default App;
