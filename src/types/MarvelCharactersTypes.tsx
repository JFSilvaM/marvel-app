export type MarvelCharactersData = {
  charactersData: MarvelCharacterData[];
  setCharactersData: (c: MarvelCharacterData[]) => void;
};

export type MarvelCharacterData = {
  id: number;
  name: string;
  thumbnail: {
    path: string;
    extension: string;
  };
  favorite: boolean;
  description: string;
};

export type ComicsData = {
  id: number;
  title: string;
  thumbnail: {
    path: string;
    extension: string;
  };
  dates: [
    {
      type: string;
      date: string;
    }
  ];
};
