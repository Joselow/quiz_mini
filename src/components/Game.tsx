import { useQuestions } from "../hooks/useQuestions"
import { Question } from "./Question"




export function Game () {
    const { questions, indexQuestion, goPreviousAnswer, goNextAnswer, currentQuestion } = useQuestions()


    return <>
        <div>
            <button onClick={goPreviousAnswer}
                disabled={ indexQuestion <= 0 }
            > Anterior </button>
            <span> { indexQuestion+1 } / { questions.length} </span>
            <button onClick={goNextAnswer}
                disabled={ indexQuestion >= questions.length -1 }

            > Siguiente </button>
        </div>
        <Question
            info={currentQuestion}
        />
    </>
}