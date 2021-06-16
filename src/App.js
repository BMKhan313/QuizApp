import './App.css';
import {useState , useContext} from 'react';
import MainMenu from "./Components/MainMenu";
import EndScreen from "./Components/EndScreen";
import Quiz from './Components/Quiz';
import {QuizContext} from './Helpers/Context';
// import FrontPage from '../Components/FrontPage';

function App() {
  const [gameState , setGameState] = useState("menu");
  const [score , setScore] = useState(0);
  return (
    <div className="App">
   
  
  <QuizContext.Provider value={{ gameState , setGameState , score , setScore}}>
           {gameState === "menu" && <MainMenu />  }
           {gameState === "quiz" && <Quiz /> }
           {gameState === "endscreen" && <EndScreen />  }
          
  </QuizContext.Provider>

      </div>
  );
}

export default App;


