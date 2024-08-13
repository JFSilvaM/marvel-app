import { useEffect, useState } from "react";
import magnifyingGlass from "../../../assets/magnifying-glass-icon.svg";
import { useMarvelCharactersContext } from "../../../context/useMarvelCharactersContext";
import "./Searcher.scss";

interface Props {
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

const Searcher = ({ setLoading }: Props) => {
  const [searchCharacters, setSearchCharacters] = useState("");

  const { charactersData, setCharactersData } = useMarvelCharactersContext();

  useEffect(() => {
    if (
      !charactersData.length ||
      ((!charactersData.length || charactersData.length) &&
        (searchCharacters || searchCharacters === ""))
    ) {
      const controller = new AbortController();
      const { signal } = controller;

      signal && searchCharacters === "" && charactersData;

      setLoading(true);

      fetch(
        `https://gateway.marvel.com/v1/public/characters?${
          searchCharacters ? `nameStartsWith=${searchCharacters}&` : ""
        }limit=50&ts=1&apikey=a31e265ee8fbac77d71541be242fda2f&hash=36db3fb3ce5c0becb5a4e31a8ea60655`,
        { signal }
      )
        .then((response) => response.json())
        .then((res) => {
          setCharactersData(res.data.results);
          setLoading(false);
        })
        .catch((error) => {
          !signal && console.log(error);
        });

      if (searchCharacters) return () => controller.abort();
    }
  }, [searchCharacters]);

  const handleInputChange = (e: { target: { value: string } }) =>
    setSearchCharacters(e.target.value);

  return (
    <div className="searcher">
      <div className="searcher__search">
        <img src={magnifyingGlass} alt="Magnifying glass icon" />

        <input
          type="text"
          value={searchCharacters}
          onChange={handleInputChange}
          placeholder="search a character..."
        />
      </div>

      <span className="searcher__results">
        {charactersData.length === 1
          ? `${charactersData.length} result`
          : `${charactersData.length} results`}
      </span>
    </div>
  );
};

export default Searcher;
