import { Link } from "react-router-dom";
import whiteHeartIconOutline from "../../../assets/white-heart-icon-outline.svg";
import { useMarvelCharactersContext } from "../../../context/useMarvelCharactersContext";
import { handleOnClickFavorite } from "../../../utils/FavoriteUtils";
import CornerOfCard from "../../CornerOfCard/CornerOfCard";
import Loader from "../../Loader/Loader";
import "./CharactersList.scss";

interface Props {
  loading: boolean;
}

const CharactersList = ({ loading }: Props) => {
  const { charactersData, setCharactersData } = useMarvelCharactersContext();

  return !loading ? (
    <div className="characters-list">
      {charactersData.map((character) => (
        <div key={character.id} className="characters-list__card">
          <Link to={`character/${character.id}`}>
            <img
              src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
              alt={character.name}
              className="characters-list__card-image"
            />
          </Link>

          <div className="characters-list__card-footer">
            <span>{character.name}</span>

            <button
              onClick={() =>
                handleOnClickFavorite(
                  character,
                  charactersData,
                  setCharactersData
                )
              }
            >
              {character.favorite ? (
                <svg width="12" height="12" viewBox="0 0 24 22">
                  <path
                    d="M12 3.63869L6 -0.00292969L0 3.63869V11.4422L12 21.6734L24 11.4422V3.63869L18 -0.00292969L12 3.63869Z"
                    fill="#EC1D24"
                  />
                </svg>
              ) : (
                <img
                  src={whiteHeartIconOutline}
                  alt="White heart icon outline"
                />
              )}
            </button>

            <CornerOfCard />
          </div>
        </div>
      ))}
    </div>
  ) : (
    <div className="characters-list__loader">
      <Loader />
    </div>
  );
};

export default CharactersList;
