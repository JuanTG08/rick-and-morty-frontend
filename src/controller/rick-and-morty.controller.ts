import { MessageUtils } from "@/utils/message.utils";
import {
  RickAndMortyFetchingAPI,
  RickAndMortyFetchingView,
} from "../fetching/rick-and-morty.fetching";
import { CONST_HUMAN, CONST_NO_HUMAN } from "@/constant/species.constant";

export class RickAndMortyController {
  static async viewGetAllCharacters() {
    try {
      const modelRickAndMortyFetching = new RickAndMortyFetchingView();
      const data = await modelRickAndMortyFetching.getAllCharacters;
      return data;
    } catch (error) {
      console.log(error);
      return MessageUtils(true, 500, "Error al procesar la información.");
    }
  }

  static async apiSSRGetAllCharacters() {
    "use server";
    try {
      const modelRickAndMortyFetching = new RickAndMortyFetchingAPI();
      const data = await modelRickAndMortyFetching.getAllHumanCharacters(1);
      return data;
    } catch (error) {
      console.log(error);
      return MessageUtils(true, 500, "Error al procesar la información.");
    }
  }

  static async apiGetCharacters(species: string, idPage: number) {
    try {
      if (!species || !idPage) throw new Error("No se encontró la información");
      const model = new RickAndMortyFetchingAPI();
      if (species === CONST_HUMAN) {
        const res = await model.getAllHumanCharacters(Number(idPage));
        return res;
      } else if (species === CONST_NO_HUMAN) {
        const res = await model.getAllNoHumanCharacters(Number(idPage));
        return res;
      } else throw new Error("No se encontró la información");
    } catch (error) {
      return MessageUtils(true, 500, "Error al procesar la información");
    }
  }
}
