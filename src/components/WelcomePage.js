import { Box, Typography, Button } from "@mui/material";
import React,{useContext} from "react";
import {FoodContext} from "../foodContext";


const WelcomePage = () => {
    const {handleOpen,randomBackground } = useContext(FoodContext)
  return (
    <Box
      minHeight="100vh"
      sx={randomBackground}
      display="flex"
      alignItems="center"
      justifyContent="space-evenly"
      flexDirection="column"
    >
      <Typography
        fontFamily="ubuntu"
        textAlign="center"
        sx={{
          fontSize: "clamp(4rem, 1.714rem + 5.71vw, 6rem)",
          color: "black",
          fontWeight: "bold",
        }}
      >
        Welcome hungry visitor to a Random Food Generator
      </Typography>
      <Button
        variant="contained"
        sx={{
          width: { xs: "24rem", xl: "48rem" },
          height: "4rem",
          backdropFilter: `blur(13px) saturate(102%)`,
          backgroundColor: "rgba(17,25,40,0.5)",
          border: "1px solid rgba(255,255,255,0.125)",
          borderRadius: "19px",
        }}
        onClick={handleOpen}
      >
        <Typography sx={{fontSize:'clamp(1.2rem,1.714rem + 5.71vw,1.3rem)'}}>random food</Typography>
      </Button>
    </Box>
  );
};

export default WelcomePage;
