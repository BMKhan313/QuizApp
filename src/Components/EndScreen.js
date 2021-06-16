import React, {useContext} from 'react';
import {QuizContext} from '../Helpers/Context';
import {Questions} from '../Helpers/QuestionBank';
import '../App.css'


function EndScreen() {
    const {score , setScore , setGameState} = useContext(QuizContext);
  
   const restartQuiz = ()=>{
     setScore(0);
     setGameState("menu");
   }

    return (
        <div className="EndScreen" className="App" className="Quiz">
           
           <h1>Quiz finished</h1> 
           <h3>Your score - {2} </h3>
           <button onClick={restartQuiz}>Restart Quiz</button>
        </div>
    )
}

export default EndScreen;
