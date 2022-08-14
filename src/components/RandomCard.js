import { Typography, Box } from "@mui/material";
import React from "react";

const RandomCard = ({ title, img, origin , tag}) => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="space-evenly"
      sx={{
        height: "31rem",
        width: "100%",
        backdropFilter: "blur(10px) saturate(164%)",
        backgroundColor: "rgba(17,25,40,0.3)",
        borderRadius: "12px",
        border: "1px solid rgba(255,255,255,0.125)",
      }}
    >
        <Box display='flex' flexDirection='column' alignItems='center'>
            <Typography
        fontSize="clamp(1.2rem, 0.818rem + 0.91vw, 1.7rem)"
        fontFamily="Ubuntu"
        fontWeight="bold"
      >
        {title}
      </Typography>
      <Typography
        fontSize="clamp(1rem, 0.818rem + 0.91vw, 1.5rem)"
        fontFamily="Dosis"
        fontWeight="bold"
      >
        {tag === null?'(other)':`(${tag})`}
        
      </Typography>
        </Box>
      
      <Typography
        fontSize="clamp(1rem, 0.818rem + 0.91vw, 1.5rem)"
        fontFamily="Dosis"
        fontWeight="bold"
      >
        Origin: {origin}
      </Typography>
      <Box
        sx={{
          backgroundImage: `url(${img})`,
          width: { xs: "24rem", xl: "48rem" },
          height: { xs: "19rem", xl: "38rem" },
          backgroundSize: "cover",
          backgroundPosition: "center",
          borderRadius: "12px",
        }}
      ></Box>
    </Box>
  );
};

export default RandomCard;
