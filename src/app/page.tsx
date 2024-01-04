import HomeComponent from "@/components/view/home/HomeComponent";
import { RickAndMortyController } from "@/controller/rick-and-morty.controller";

export default async function Page() {
  // Fetch hacía la API local de Next.js
  const data = await RickAndMortyController.apiSSRGetAllCharacters();
  return <HomeComponent data={data.payload} />;
}
