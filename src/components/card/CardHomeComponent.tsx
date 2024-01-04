"use client";
import React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import { iCharacter } from "@/interfaces/iCharacters";
import { CardHeader, Grid } from "@mui/material";

const CardHomeComponent = ({ character }: { character: iCharacter }) => {
  const theme = useTheme();
  return (
    <Grid item xs={12} md={6} lg={6}>
      <Card style={{ display: "flex" }}>
        <CardHeader>Ola</CardHeader>
        {/* Mitad izquierda */}
        <CardContent
          style={{
            flex: "1 0 50%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
          className=""
        >
          <Typography variant="h5" component="div">
            {character.name}
          </Typography>
          <Typography color="text.secondary">{`Species: ${character.species}`}</Typography>
          <Typography color="text.secondary">{`Gender: ${character.gender}`}</Typography>
          <Typography color="text.secondary">{`Status: ${character.status}`}</Typography>
          {/* Agrega más información según sea necesario */}
        </CardContent>

        {/* Mitad derecha */}
        <CardMedia
          component="img"
          alt={character.name}
          height="140"
          image={character.image}
          style={{ width: "50%" }}
        />
      </Card>
    </Grid>
  );
};

export default CardHomeComponent;
