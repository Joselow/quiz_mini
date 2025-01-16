import './App.css'
import { StartButton } from './components/StartButton';
import { useQuestions } from './hooks/useQuestions';

function App() {
  const { questions } = useQuestions()
  console.log(questions);

  return (
    <>
     <main>
        <h1>Quiz</h1>
        <StartButton/>
     </main>
    </>
  )
}

export default App
