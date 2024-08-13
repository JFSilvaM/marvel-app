import { useState } from "react";
import CharactersList from "./CharactersList/CharactersList";
import "./IndexPage.scss";
import Searcher from "./Searcher/Searcher";

const IndexPage = () => {
  const [loading, setLoading] = useState(false);

  return (
    <main className="index-page">
      <Searcher setLoading={setLoading} />

      <CharactersList loading={loading} />
    </main>
  );
};

export default IndexPage;
