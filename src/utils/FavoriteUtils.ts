import { MarvelCharacterData } from "../types/MarvelCharactersTypes";

export const handleOnClickFavorite = (
  character: MarvelCharacterData,
  charactersData: MarvelCharacterData[],
  setCharactersData: (c: MarvelCharacterData[]) => void
) => {
  character.favorite
    ? (character.favorite = false)
    : (character.favorite = true);

  setCharactersData([...charactersData]);
};
