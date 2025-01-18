import { LIMIT_QUESTIONS } from "../assets/constants/questionInfo"
import { calculateInfo } from "../helpers/calculateInfo"
import { fetchQuestions } from "../services/questions"
import { useQuestionStore } from "../stores/storeQuestion"
import { Question } from "../types"
import { randomData } from "../utils/randomData"


export function useQuestions () {
    const { 
      questions, indexQuestion, inGame,
      setQuestions, selectAnswer, resetGame,
      goPreviousAnswer, goNextAnswer
    } = useQuestionStore()

    const getQuestions = async(limit = LIMIT_QUESTIONS) => {
      try {      
        const questions: Question[] = await fetchQuestions()
        const newQuestions = randomData(questions, limit)
        setQuestions(newQuestions)
      } catch (error: unknown) {
        alert('ups')
      }
    }


    const restartGame = async (limit = LIMIT_QUESTIONS) => {
      try {
        const questions: Question[] = await fetchQuestions()
        const newQuestions = randomData(questions, limit)
        resetGame(newQuestions)
        
      } catch (error: unknown) {
        alert('ups')
      }
    }
    
    const currentQuestion = questions[indexQuestion]

    const { correct, incorrect, answered } = calculateInfo(questions)

    const userSelectedAnswer = questions.some((q) => q.selectedAnswer != null);
    return {
        questions,
        indexQuestion,
        inGame,
        currentQuestion,
        userSelectedAnswer,
        getQuestions,
        selectAnswer,
        resetGame: restartGame,
        goPreviousAnswer,
        goNextAnswer,
        correct, incorrect, answered
    }
}


// todo separar en hook especificos para cada componente usando los selectores de esatdo de zustand
// export function useNavigation() {
//     const indexQuestion = useQuestionStore((state) => state.indexQuestion);
//     const goNextAnswer = useQuestionStore((state) => state.goNextAnswer);
//     const goPreviousAnswer = useQuestionStore((state) => state.goPreviousAnswer);

//     return { indexQuestion, goNextAnswer, goPreviousAnswer };
// }

// export function useGameActions() {
//     const inGame = useQuestionStore((state) => state.inGame);
//     const resetGame = useQuestionStore((state) => state.resetGame);

//     return { inGame, resetGame };
// }

// export default {
//   useNavigation, useGameActions
// }