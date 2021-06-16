import React, {useContext} from 'react';
import {QuizContext} from '../Helpers/Context';
import {Quiz} from '../Components/Quiz';
import '../App.css';


function MainMenu() {
   
    const {gameState , setGameState} = useContext(QuizContext);
     
    return (
        <div className = "Menu" >
           {/* <Quiz /> */}
           <button onClick = {()=> 
           { 
               setGameState("quiz");
        
        }
        } className="startBtn">

               Start Quiz
           </button>
        </div>
    )
}

export default MainMenu
