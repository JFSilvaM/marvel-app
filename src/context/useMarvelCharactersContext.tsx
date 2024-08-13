import { useContext } from "react";
import { MarvelCharactersContext } from "./MarvelCharactersContext";

export const useMarvelCharactersContext = () =>
  useContext(MarvelCharactersContext);
