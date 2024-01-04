import {
  CONST_API_LOCAL_PATH,
  CONST_API_LOCAL_RICK_AND_MORTY_URL,
} from "@/constant/api_local_url.constant";
import { CONST_API_PRINCIPAL_RICK_AND_MORTY_URL } from "@/constant/api_principal_url.constant";
import { FetchUtils } from "@/utils/fetch.utils";
import { MessageUtils } from "@/utils/message.utils";

export class RickAndMortyFetchingView {
  private url =
    process.env.URL_APP_FRONTEND +
    CONST_API_LOCAL_PATH +
    CONST_API_LOCAL_RICK_AND_MORTY_URL.url;

  get getAllCharacters() {
    try {
      const res = FetchUtils.send(this.url);
      return res;
    } catch (error) {
      return MessageUtils(true, 500, "Error al procesar la información");
    }
  }
}

export class RickAndMortyFetchingAPI {
  private url = CONST_API_PRINCIPAL_RICK_AND_MORTY_URL.url;

  get getAllCharacters() {
    try {
      const url =
        this.url + CONST_API_PRINCIPAL_RICK_AND_MORTY_URL.list_character;
      const res = FetchUtils.send(url);
      return res;
    } catch (error) {
      return MessageUtils(true, 500, "Error al procesar la información");
    }
  }

  getAllHumanCharacters(pageNumber: number) {
    try {
      const url =
        this.url +
        CONST_API_PRINCIPAL_RICK_AND_MORTY_URL.list_human_character +
        pageNumber;
      const res = FetchUtils.send(url);
      return res;
    } catch (error) {
      return MessageUtils(true, 500, "Error al procesar la información");
    }
  }

  getAllNoHumanCharacters(pageNumber: number) {
    try {
      const url =
        this.url +
        CONST_API_PRINCIPAL_RICK_AND_MORTY_URL.list_no_human_character +
        pageNumber;
      const res = FetchUtils.send(url);
      return res;
    } catch (error) {
      return MessageUtils(true, 500, "Error al procesar la información");
    }
  }
}
