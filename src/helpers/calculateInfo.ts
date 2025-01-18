import { Question } from "../types";

export const calculateInfo = (questions: Question []) => {
    const data = {
        correct: 0,
        incorrect: 0,
        answered: 0,
    }
    
    questions.forEach(({ isCorrectAnswer, selectedAnswer }) => {
        if (selectedAnswer != null && isCorrectAnswer) {
            data.correct++
        } else if (selectedAnswer != null && !isCorrectAnswer) {
            data.incorrect++
        } else {
            data.answered++
        }
    })

    return data
}