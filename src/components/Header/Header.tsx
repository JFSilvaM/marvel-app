import heartIcon from "../../assets/heart-icon.svg";
import marvelLogo from "../../assets/marvel-logo.svg";
import "./header.scss";

const Header = () => (
  <header>
    <a href="/">
      <img src={marvelLogo} alt="Marvel logo" />
    </a>

    <div className="favorites-heart-icon">
      <a href="#">
        <img src={heartIcon} alt="Heart icon" />
      </a>

      <span>3</span>
    </div>
  </header>
);

export default Header;
