import { createContext, useState } from "react";

export const FoodContext = createContext();

const FoodContextProvider = ({ children }) => {
  const [openRandom, setOpenRandom] = useState(false);
  const [random, setRandom] = useState([]);
  const randomHue = Math.floor(Math.random() * (360 - 0) + 0);
  const randomPercent = Math.floor(Math.random() * (100 - 50) + 50);
  const randomBackground = {
    backgroundImage: `background-color:hsl(${randomHue},${randomPercent},${randomPercent});
    background-image:
    radial-gradient(at 32% 60%, hsla(${randomHue},86%,${randomPercent}%,1) 0px, transparent 50%),
    radial-gradient(at 81% 91%, hsla(${randomHue},${randomPercent}%,71%,1) 0px, transparent 50%),
    radial-gradient(at 63% 25%, hsla(${randomHue},60%,${randomPercent}%,1) 0px, transparent 50%),
    radial-gradient(at 9% 14%, hsla(${randomHue},${randomPercent}%,60%,1) 0px, transparent 50%),
    radial-gradient(at 69% 84%, hsla(${randomHue},61%,${randomPercent}%,1) 0px, transparent 50%),
    radial-gradient(at 29% 67%, hsla(${randomHue},${randomPercent}%,65%,1) 0px, transparent 50%),
    radial-gradient(at 88% 9%, hsla(${randomHue},76%,${randomPercent}%,1) 0px, transparent 50%)`,
  };
  const handleOpen = () => {
    setOpenRandom((prev) => !prev);
    handleRandom()
  };

  const handleRandom = () => {
    fetch("https://www.themealdb.com/api/json/v1/1/random.php")
      .then((res) => res.json())
      .then((data) => setRandom(data.meals));
  };


  const values = {
    openRandom,
    handleOpen,
    handleRandom,
    random,
    randomBackground
  };

  return <FoodContext.Provider value={values}>{children}</FoodContext.Provider>;
};

export default FoodContextProvider;
