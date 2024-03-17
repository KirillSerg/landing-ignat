import SingleFeedback from "./singleFeedback/SingleFeedback";
import styles from "./FeedbackList.module.scss";
import { feedbacks } from "../../assets/mockData";
import { ArrowLeft, ArrowRight } from "../../assets/icons";
import { useRef, useState } from "react";

const FeedbackList: React.FC = () => {
  const [currenFeedbackPage, setCurrenFeedbackPage] = useState<number>(0);
  const carusel = useRef<HTMLDivElement>(null);

  // const onScroll = (e: React.WheelEvent<HTMLDivElement>) => {
  //   if (carusel.current) {
  //     carusel.current.scrollLeft += e.deltaY;
  //   }
  // };

  const onClickBtn = (direction: number) => {
    if (carusel.current) {
      carusel.current.scrollLeft += direction * 1200;
      setCurrenFeedbackPage(prev => prev + direction);
    }
  };

  return (
    <section className={styles.feedback_box}>
      <div className={styles.header}>
        <h3>Відгуки про товар {<p>{`(${feedbacks.length})`}</p>}</h3>
        <div className={styles.navigate}>
          <p>
            {currenFeedbackPage + 1} /{" "}
            {feedbacks.length % 4 > 0
              ? (feedbacks.length / 4) | (0 + 1)
              : feedbacks.length / 4}
          </p>
          <div className={styles.btn_group}>
            <button
              disabled={currenFeedbackPage === 0}
              onClick={() => onClickBtn(-1)}
            >
              <ArrowLeft style="" />
            </button>
            <button
              disabled={currenFeedbackPage === feedbacks.length - 1}
              onClick={() => onClickBtn(1)}
            >
              <ArrowRight style="" />
            </button>
          </div>
        </div>
      </div>
      <div ref={carusel} className={styles.feedback_list}>
        {feedbacks.map(feedback => (
          <SingleFeedback key={crypto.randomUUID()} {...feedback} />
        ))}
      </div>
    </section>
  );
};

export default FeedbackList;
