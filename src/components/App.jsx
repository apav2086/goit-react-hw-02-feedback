import { useState } from 'react';
import FeedbackOptions from './FeedbackOptions';
import SectionTitle from './SectionTitle';
export const App = () => {
   const [feedback, setFeedback] = useState({ Good: 0, Neutral: 0, Bad: 0 });
    function countTotalFeedback() { 
        return feedback.Good + feedback.Neutral + feedback.Bad;
    }
    function countPositiveFeedbackPercentage() { 
        return feedback.Good / countTotalFeedback() * 100;
    }
    function handleChange(event) {
       
        setFeedback(previous => {
            return {
                ...previous, [event.target.textContent]: previous[event.target.textContent] + 1,
            };
        });
    }
   
  return (
    <div>
      <SectionTitle title={"Please leave feedback"} />
      <FeedbackOptions
        good={feedback.Good}
        neutral={feedback.Neutral}
        bad={feedback.Bad}
        onClick={handleChange}
        calcPositive={countPositiveFeedbackPercentage}
        countTotal={countTotalFeedback} />
    </div>
  );
};
