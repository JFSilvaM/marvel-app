import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import CharacterDetails from "./components/CharacterDetails/CharacterDetails";
import Header from "./components/Header/Header";
import IndexPage from "./components/IndexPage/IndexPage";
import { MarvelCharactersContext } from "./context/MarvelCharactersContext";
import { MarvelCharacterData } from "./types/MarvelCharactersTypes";

const App = () => {
  const [charactersData, setCharactersData] = useState<MarvelCharacterData[]>(
    []
  );

  return (
    <MarvelCharactersContext.Provider
      value={{
        charactersData,
        setCharactersData,
      }}
    >
      <Header />

      <Routes>
        <Route path="/" element={<IndexPage />} />

        <Route path="character/:id" element={<CharacterDetails />} />
      </Routes>
    </MarvelCharactersContext.Provider>
  );
};

export default App;
