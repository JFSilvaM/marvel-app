import magnifyingGlass from "../../assets/magnifying-glass-icon.svg";
import "./Searcher.scss";

const Searcher = () => {
  return (
    <div className="searcher">
      <div className="searcher__search">
        <img src={magnifyingGlass} alt="Magnifying glass icon" />

        <input type="search" placeholder="search a character..." />
      </div>

      <span className="searcher__results">50 results</span>
    </div>
  );
};

export default Searcher;
