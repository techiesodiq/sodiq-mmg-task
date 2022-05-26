import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { styled, useTheme } from "@mui/material/styles";
import React from "react";
import cardData from "../data/cards.json";

const Item = styled(Card)(({ theme }) => ({
  //   backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  display: "grid",
  placeItems: "center",
  color: theme.palette.text.secondary,
  height: "380px",
  box: "none",
}));

const CardBoard = () => {
  const data = cardData.cards;
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("sm"));

  const desktopScreenCard = data.map((item, index) => (
    <Grid key={index} item xs={6} md={3} style={{ boxShadow: "none" }}>
      <Item elevation={0}>
        <CardMedia
          component="img"
          image={item.image}
          alt={item.title}
          sx={{
            margin: "40px 20px",
            objectFit: "contain",
            height: "170px",
          }}
        />
        <CardContent sx={{ height: "350px" }}>
          <Typography
            gutterBottom
            variant="h6"
            component="div"
            sx={{ color: "#008080", fontWeight: "550" }}
          >
            {item.title}
          </Typography>
          <Typography
            sx={{ color: "#000", fontWeight: "500" }}
            variant="body2"
            color="text.secondary"
          >
            {item.description}
          </Typography>
        </CardContent>
      </Item>
    </Grid>
  ));

  const mobileScreenCard = data.map((item, index) => (
    <Grid key={index} item xs={6} md={3}>
      <Item elevation={0}>
        <CardMedia
          component="img"
          image={item.image}
          alt={item.title}
          sx={{
            margin: "15px 5px 0px 5px",
            objectFit: "contain",
            height: "120px",
            width: "115px",
          }}
        />
        <CardContent sx={{ height: "350px", marginTop: "0px" }}>
          <Typography
            variant="h6"
            component="div"
            sx={{
              color: "#008080",
              fontSize: "14px",
              fontWeight: "550",
              height: "60px",
              marginBottom: "0px",
            }}
          >
            {item.title}
          </Typography>
          <Typography
            sx={{ color: "#000", marginTop: "0px" }}
            variant="body2"
            color="text.secondary"
          >
            {item.description}
          </Typography>
        </CardContent>
      </Item>
    </Grid>
  ));

  return (
    <Box sx={{ flexGrow: 1, paddingBottom: "20px" }}>
      <Grid container spacing={{ xs: 2, md: 3 }}>
        {matches ? mobileScreenCard : desktopScreenCard}
      </Grid>
    </Box>
  );
};

export default CardBoard;
