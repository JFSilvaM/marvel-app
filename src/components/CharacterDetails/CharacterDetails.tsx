import { useLocation } from "react-router-dom";
import redHeartIcon from "../../assets/red-heart-icon.svg";
import whiteHeartIconOutline from "../../assets/white-heart-icon-outline.svg";
import { useMarvelCharactersContext } from "../../context/useMarvelCharactersContext";
import { handleOnClickFavorite } from "../../utils/FavoriteUtils";
import CornerOfCard from "../CornerOfCard/CornerOfCard";
import "./CharacterDetails.scss";
import Comics from "./Comics/Comics";

const CharacterDetails = () => {
  const { charactersData, setCharactersData } = useMarvelCharactersContext();

  const location = useLocation();

  const characterId = Number(location.pathname.split("/").pop());

  const characterDetailsData = charactersData.find(
    (character) => character.id === characterId
  );

  return (
    <main className="character-details">
      <div className="character-details__card">
        <img
          src={`${characterDetailsData?.thumbnail.path}.${characterDetailsData?.thumbnail.extension}`}
          alt={characterDetailsData?.name}
          className="character-details__card-image"
        />

        <div className="character-details__card-footer">
          <div className="character-details__card-footer-head">
            <span>{characterDetailsData?.name}</span>

            <button
              onClick={() =>
                handleOnClickFavorite(
                  characterDetailsData!,
                  charactersData,
                  setCharactersData
                )
              }
            >
              {characterDetailsData?.favorite ? (
                <img src={redHeartIcon} alt="Red heart icon" />
              ) : (
                <img
                  src={whiteHeartIconOutline}
                  alt="White heart icon outline"
                />
              )}
            </button>
          </div>

          {characterDetailsData?.description && (
            <span>{characterDetailsData.description}</span>
          )}
        </div>

        <CornerOfCard large />
      </div>

      <Comics characterId={characterId} />
    </main>
  );
};

export default CharacterDetails;
