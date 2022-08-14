import { Box, Button,Typography } from "@mui/material";
import { useContext } from "react";
import { FoodContext } from "../foodContext";
import RandomCard from "./RandomCard";

const RandomPage = () => {
  const { randomBackground, handleRandom, random } = useContext(FoodContext);

  return (
    <Box
      minHeight="100vh"
      sx={randomBackground}
      display="flex"
      alignItems="center"
      justifyContent="space-evenly"
      flexDirection="column"
    >
      <Box>
        {random.map((item) => {
          return (
           <RandomCard key={item.idMeal} title={item.strMeal} img={item.strMealThumb} origin={item.strArea} tag={item.strTags}/>
          );
        })}
      </Box>
      <Button
        variant="contained"
        sx={{
          width:{xs:"50%", xl:'10rem'} ,
          height: "4rem",
          backdropFilter: `blur(13px) saturate(102%)`,
          backgroundColor: "rgba(17,25,40,0.5)",
          border: "1px solid rgba(255,255,255,0.125)",
          borderRadius: "19px",
        }}
        onClick={handleRandom}
      >
        <Typography sx={{fontSize:'clamp(1.2rem,1.714rem + 5.71vw,1.3rem)', fontFamily:'Dosis'}}>another one</Typography>
      </Button>
    </Box>
  );
};

export default RandomPage;
