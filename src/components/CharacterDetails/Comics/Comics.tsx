import { useEffect, useState } from "react";
import "./Comics.scss";
import { ComicsData } from "../../../types/MarvelCharactersTypes";
import Loader from "../../Loader/Loader";

interface Props {
  characterId: number;
}

const Comics = ({ characterId }: Props) => {
  const [comicsData, setComicsData] = useState<ComicsData[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const controller = new AbortController();
    const { signal } = controller;

    fetch(
      `https://gateway.marvel.com/v1/public/characters/${characterId}/comics?orderBy=onsaleDate&ts=1&apikey=a31e265ee8fbac77d71541be242fda2f&hash=36db3fb3ce5c0becb5a4e31a8ea60655`,
      { signal }
    )
      .then((response) => response.json())
      .then((res) => {
        setComicsData(res.data.results);
        setLoading(false);
      })
      .catch((error) => {
        !signal && console.log(error);
      });

    return () => controller.abort();
  }, []);

  const comicYear = (comic: ComicsData) => {
    const onsaleDate = comic.dates.find((date) => date.type === "onsaleDate");
    const fullYear = new Date(String(onsaleDate?.date)).getFullYear();

    return fullYear ? fullYear : "";
  };

  return (
    <div className="comics">
      <span>comics</span>

      <div className="comics__list">
        {comicsData.map((comic) => (
          <div key={comic.id} className="comics__list-comic">
            <img
              src={`${comic?.thumbnail.path}.${comic?.thumbnail.extension}`}
              alt={comic?.title}
            />

            <div className="comics__list-comic-footer">
              <span>{comic.title}</span>

              <span>{comicYear(comic)}</span>
            </div>
          </div>
        ))}
      </div>

      {loading && (
        <div className="comics__loader">
          <Loader />
        </div>
      )}
    </div>
  );
};

export default Comics;
