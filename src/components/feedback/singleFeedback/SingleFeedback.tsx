import FeedbackRating from "./FeedbackRating";
import styles from "./SingleFeedback.module.scss";

interface Props {
  range: number;
  text: string;
  author: string;
  avatar: string;
}

const SingleFeedback: React.FC<Props> = ({ range, text, author, avatar }) => {
  return (
    <div className={styles.feedback}>
      <div className={styles.header}>
        <img
          className={styles.avatar}
          src={avatar}
          alt="Avatar"
          width={50}
          height={50}
        />
        <div className={styles.head}>
          <FeedbackRating range={range} />
          <h3 className={styles.author}>{author}</h3>
        </div>
      </div>

      <div className={styles.text}>{text}</div>
    </div>
  );
};

export default SingleFeedback;
