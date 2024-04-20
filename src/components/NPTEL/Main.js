import { useState, useEffect } from "react";
import QuestionBlock from "./QuestionBlock.js";
import QuestionData from "./QuestionData.js";

const Main = () => {

    const [score, setScore] = useState(0);
    const [shuffledQuestions, setShuffledQuestions] = useState([]);

    useEffect(() => {
        const shuffledData = [...QuestionData].sort(() => Math.random() - 0.5);
        setShuffledQuestions(shuffledData);
    }, []); 


    const incrementScore = () => {
        setScore(score + 1);
    } 

    return (
        <div className="wrapper">
            <div className="score">Score: {score}</div>
            {
            shuffledQuestions.map((eachQuestion, index) => (
                <QuestionBlock 
                    key = { index }
                    question={ eachQuestion["question"] }
                    a = { eachQuestion["a"] }
                    b = { eachQuestion["b"] }
                    c = { eachQuestion["c"] }
                    d = { eachQuestion["d"] }
                    correctAnswer = { eachQuestion["answer"]}
                    scoreIncrementFunction = { incrementScore }
                />
            ))
            
            }
            
        </div>
    )
}

export default Main;