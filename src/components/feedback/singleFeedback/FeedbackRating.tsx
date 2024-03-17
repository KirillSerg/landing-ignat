import starFull from "../../../assets/fullstar.svg";
import starEmpty from "../../../assets/emptystar.svg";

interface Props {
  range: number;
}

const FeedbackRating: React.FC<Props> = ({ range }) => {
  const raitingStars = Array.from({ length: 5 }, (_, i) => {
    if (range >= i + 1) {
      return <img key={i} src={starFull} alt="starFull" />;
    } else {
      return <img key={i} src={starEmpty} alt="starEmpty" />;
    }
  });

  return <div style={{ display: "flex", gap: "4px" }}>{raitingStars}</div>;
};

export default FeedbackRating;
