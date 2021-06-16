import React,{useState,useContext} from 'react';
import {QuizContext} from '../Helpers/Context';
import {Questions} from '../Helpers/QuestionBank';


export function Quiz() {
    const{score , setScore, setGameState } = useContext(QuizContext);
    const [currQuestion , setCurrQuestion] = useState(0);
    const [optionChoosen , setOptionChoosen] = useState("");

   const nextQuestion = () => {
       if(Questions[currQuestion].answers == optionChoosen){
           setScore(score + 1);
       }
   
        setCurrQuestion(currQuestion + 1);
    
   }
   const finishedQuiz = () => {
    if(Questions[currQuestion].answers == optionChoosen){
        setScore(score + 1);
    }
    setGameState("endscreen");
   }


    return (
        <div className = "Quiz" className="App" className="Menu" > 
            <div className="marks">marks:{score}</div>
            <div className="questions">{Questions[currQuestion].prompt}</div>

            <div className="instructions">click correct answerss from below chioces</div>

            <div className="options">
                
         <button onClick={()=> setOptionChoosen("A")} className="optBtn"> 
         {Questions[currQuestion].optionA}</button>&nbsp;
         <button onClick={()=> setOptionChoosen("B")}className="optBtn">
              {Questions[currQuestion].optionB}</button>&nbsp;
         <button onClick={()=> setOptionChoosen("C")} className="optBtn">
              {Questions[currQuestion].optionC}</button>&nbsp;
         <button onClick={()=> setOptionChoosen("D")} className="optBtn">
              {Questions[currQuestion].optionD}</button>
         </div>
         <button onClick = {()=> 
           { 
               setGameState("menu");
        
        }
        } className="restartBtn" >

               reset
           </button>
       
         {currQuestion == Questions.length - 1 ? (
             <button onClick={finishedQuiz} className="nextbtn">Finish Quiz</button>
         ): (
             
            <button onClick={nextQuestion} className="nextbtn"> Next</button>
         ) 
         
         }
          
         
          
        </div>
       
       
    );
}

export default Quiz;
