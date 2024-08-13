import "./CornerOfCard.scss";

interface Props {
  large?: boolean;
}

const CornerOfCard = ({ large }: Props) => (
  <div className={`corner-of-card ${large ? "large" : "small"}`}></div>
);

export default CornerOfCard;
