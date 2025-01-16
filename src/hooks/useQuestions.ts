import { fetchQuestions } from "../services/questions"
import { useQuestionStore } from "../stores/storeQuestion"
import { Question } from "../types"

export function useQuestions () {
    const { questions, setQuestions } = useQuestionStore()

    const getQuestions = async(limit = 5) => {
      const questions: Question[] = await fetchQuestions()
      const newQuestions = questions.sort(() => Math.random() - 0.5).slice(0, limit)          
      setQuestions(newQuestions)
    }

    return {
        questions,
        getQuestions
    }
}