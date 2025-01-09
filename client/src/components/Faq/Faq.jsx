import { useState } from "react";
import classes from "./Faq.module.css";

const questions = [
  {
    question: "What is Viveka 4.0?",
    answer:
      "Viveka 4.0 is one of the biggest technical events in the history of Shri Ramswaroop Memorial University.",
  },
  {
    question: "What are the Dates and Timings of the event?",
    answer:
      "The event will start at 9 AM on 06th Feb and will be till 8th of Feb 10 PM.",
  },
  {
    question: "How can I participate in the event?",
    answer:
      "Explore various events on the VIVEKA-4.O website and register for the same.",
  },
  {
    question: "Are there any rewards or prizes for the winners ?",
    answer:
      "Of Course !",
  },
];

const Faq = () => {
  const [clicked, setClicked] = useState(null);

  const toggle = (i) => {
    if (clicked === i) {
      return setClicked(null);
    }

    setClicked(i);
  };

  return (
    <section className={classes.faqSection}>
      <div className={classes.heading}>FAQ</div>
      <div className={classes.faq}>
        {questions.map((ques, i) => (
          <div
            key={i}
            className={classes.single}
            onClick={() => toggle(i)}
          >
            <div className={classes.question}>{ques.question}</div>
            <div
              className={`${
                clicked === i ? classes.answer : classes.noAnswer
              }`}
            >
              {ques.answer}
            </div>
            <span className={classes.btn}>
              {clicked === i ? "-" : "+"}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Faq;
