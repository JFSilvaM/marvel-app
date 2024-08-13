import { createContext } from "react";
import { MarvelCharactersData } from "../types/MarvelCharactersTypes";

export const MarvelCharactersContext = createContext<MarvelCharactersData>({
  charactersData: [],
  setCharactersData: () => {},
});
