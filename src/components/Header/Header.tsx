import { useState } from "react";
import { useNavigate } from "react-router-dom";
import marvelLogo from "../../assets/marvel-logo.svg";
import redHeartIcon from "../../assets/red-heart-icon.svg";
import { useMarvelCharactersContext } from "../../context/useMarvelCharactersContext";
import { MarvelCharacterData } from "../../types/MarvelCharactersTypes";
import "./Header.scss";

const Header = () => {
  const [oldCharactersData, setOldCharactersData] = useState<
    MarvelCharacterData[]
  >([]);

  const { charactersData, setCharactersData } = useMarvelCharactersContext();
  const navigate = useNavigate();

  const favoritesCharacters = () =>
    charactersData.filter((characters) => characters.favorite === true);

  const handleCharaters = () => {
    setCharactersData(oldCharactersData);
    navigate("/");
  };

  const handleFavorites = () => {
    setOldCharactersData(charactersData);
    setCharactersData(favoritesCharacters());
    navigate("/");
  };

  return (
    <header>
      <button onClick={() => handleCharaters()}>
        <img src={marvelLogo} alt="Marvel logo" />
      </button>

      <div className="favorites-heart-icon">
        <button onClick={() => handleFavorites()}>
          <img src={redHeartIcon} alt="Heart icon" />
        </button>

        <span>{favoritesCharacters().length}</span>
      </div>
    </header>
  );
};

export default Header;
