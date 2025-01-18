import './App.css'
import { Game } from './components/Game';
import { StartButton } from './components/StartButton';
import { useQuestions } from './hooks/useQuestions';

function App() {
  const { questions } = useQuestions()
  return (
    <>
     <main>
        <h1>Quiz</h1>
        { questions.length > 0 && <Game/> }
        { questions.length <= 0 && <StartButton/> }
     </main>
    </>
  )
}

export default App
