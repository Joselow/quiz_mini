import './App.css'
import { Game } from './components/Game';
import { StartButton } from './components/StartButton';
import { useQuestions } from './hooks/useQuestions';

function App() {
  const { questions, resetGame, inGame, userSelectedAnswer } = useQuestions()
  return (
    <>
     <main>
        <div style={{ position: 'relative' }}>
          <h1>Quiz</h1>
          { 
            inGame && userSelectedAnswer  && 
            <button className='restart'
              onClick={() => resetGame()}
              >Again
            </button>
          }       
        </div>

        { questions.length > 0 && <Game/> }
        { questions.length <= 0 && <StartButton/> }
     </main>
    </>
  )
}

export default App
