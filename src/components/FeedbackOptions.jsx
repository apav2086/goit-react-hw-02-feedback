import { useState } from 'react';
export default function FeedbackOptions() {
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
    console.log(feedback);
    return (
        <div>
            
            <button id="good" onClick={handleChange}>Good</button>
            <button id="neutral" onClick={handleChange}>Neutral</button>
            <button id="bad" onClick={handleChange}>Bad</button>
            {countTotalFeedback() > 0 ? (
                <div>    <h2>Statistics</h2>
            <h3>Good: {feedback.Good}</h3>
            <h3>Neutral: {feedback.Neutral}</h3>
                    <h3>Bad: {feedback.Bad}</h3>
                    <h3>Total: {countTotalFeedback()}</h3>
                    <h3>Positive feedback: {Math.round(countPositiveFeedbackPercentage())}%</h3>
        </div>
            ) : (
                    <h3>No Feedback given</h3>
)}
        </div>
    );
}

   