import { MessageUtils } from "./message.utils";

interface iOptionsFetch {
  method: string;
  body: object;
  headers: object;
}

export class FetchUtils {
  static async send(url: string, opt?: iOptionsFetch) {
    try {
      const options: any = {
        method: "GET",
        mode: "cors",
        cache: "no-cache",
        credentials: "same-origin",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      };
      if (opt?.method) options.method = opt.method;
      if (opt?.body) options.body = JSON.stringify(opt.body);
      if (opt?.headers) options.headers = opt.headers;
      const response = await fetch(url, options);
      const res = await response.json();
      return res;
    } catch (error) {
      console.log(error);
      return MessageUtils(true, 500, "Error");
    }
  }
}
