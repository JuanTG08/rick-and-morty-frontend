import { MessageUtils } from "@/utils/message.utils";

export async function GET(request: Request) {
  try {
        console.log("object");
    return Response.json(MessageUtils(true, 200, "Hola mundo"));
  } catch (error) {
    return Response.json(
      MessageUtils(true, 500, "Error al procesar la información")
    );
  }
}
