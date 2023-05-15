import SectionTitle from './SectionTitle';
export default function FeedbackOptions({
     good,
        neutral,
        bad,
        onClick,
        calcPositive,
        countTotal
}) {
    return (
        <div>
            
            <button id="good" onClick={onClick}>Good</button>
            <button id="neutral" onClick={onClick}>Neutral</button>
            <button id="bad" onClick={onClick}>Bad</button>
            {countTotal() > 0 ? (
                <div> 
                    <SectionTitle title={ "Statistics"} />
            <h3>Good: {good}</h3>
            <h3>Neutral: {neutral}</h3>
                    <h3>Bad: {bad}</h3>
                    <h3>Total: {countTotal()}</h3>
                    <h3>Positive feedback: {Math.round(calcPositive())}%</h3>
        </div>
            ) : (
                    <h3>No Feedback given</h3>
)}
        </div>
    );
}

   