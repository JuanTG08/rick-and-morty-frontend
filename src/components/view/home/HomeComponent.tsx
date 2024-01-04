"use client";
import CardHomeComponent from "@/components/card/CardHomeComponent";
import { CONST_HUMAN, CONST_NO_HUMAN } from "@/constant/species.constant";
import { RickAndMortyController } from "@/controller/rick-and-morty.controller";
import { iCharacter, iPropsViews } from "@/interfaces/iCharacters";
import {
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Pagination,
  Select,
  SelectChangeEvent,
  Stack,
} from "@mui/material";
import React, { useEffect, useState } from "react";

const HomeComponent = ({ data }: any) => {
  const [characters, setCharacters] = useState<iCharacter[]>(data.results);
  const [selectSpecies, setSelectSpecies] = useState("human");
  const [page, setPage] = useState(1);
  const [maxPage, setMaxPage] = useState(data.info.pages);

  const handleChangeSpecies = async (event: SelectChangeEvent) => {
    try {
      const species = event.target.value;
      const getData = await RickAndMortyController.apiGetCharacters(
        species,
        1
      );
      if (getData.error || getData.statusCode != 200)
        throw new Error("Error al obtener la información");
      setCharacters(getData.payload.results || []);
      setMaxPage(getData.payload.info.pages);
      setSelectSpecies(event.target.value);
      setPage(1);
    } catch (error) {
      console.log(error);
    }
  };

  const handleChangePagination = async (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    try {
      const getData = await RickAndMortyController.apiGetCharacters(
        selectSpecies,
        value
      );
      if (getData.error || getData.statusCode != 200)
        throw new Error("Error al obtener la información");
      setCharacters(getData.payload.results || []);
      setPage(value);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <main className="flex flex-col">
      <header className="py-3">
        <h1 className="text-4xl font-semibold text-center">
          Explora el Multiverso de Rick and Morty
        </h1>
      </header>
      <div>
        <FormControl fullWidth>
          <InputLabel id="demo-multiple-name-label">Especies</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={selectSpecies}
            displayEmpty
            label="Especies"
            onChange={handleChangeSpecies}
          >
            <MenuItem value={CONST_HUMAN}>Humano</MenuItem>
            <MenuItem value={CONST_NO_HUMAN}>No humano</MenuItem>
          </Select>
        </FormControl>
      </div>
      <div className="flex-col">
        <h2 className="text-xl font-semibold flex gap-x-3 items-center">
          Human
        </h2>
        <Grid container spacing={3}>
          {characters.map((character: iCharacter, ind: number) => (
            <CardHomeComponent key={ind} character={character} />
          ))}
        </Grid>
      </div>

      <Stack spacing={2} className="my-4">
        <Pagination
          count={maxPage}
          color="primary"
          page={page}
          onChange={handleChangePagination}
        />
      </Stack>
    </main>
  );
};

export default HomeComponent;
