import { create } from "zustand";
import { type Question } from "../types";

interface Store  {
    questions: Question[],
    indexQuestion: number,

    setQuestions: (comments: Question[]) => void
    selectAnswer: (id: number, answersIndex: number) => void
}

export const useQuestionStore = create<Store>((set, get) => {
    const questions: Question[] = []
    const indexQuestion = 0

    const setQuestions =  (questions: Question[]) => {
        set((state) => ({ questions }))
    }

    const selectAnswer = (id: number, answerIndex: number) => {
        const { questions } = get()

        const newQuestions = structuredClone(questions)
        const questionIndex = questions.findIndex((el) => el.id === id)
        const questionFound = questions[questionIndex]

        const isCorrectAnswer = questionFound.correctAnswer === answerIndex

        newQuestions[questionIndex] = {
            ...questionFound,
            isCorrectAnswer,
            selectedAnswer: answerIndex
        }

        set((state) => ({ questions: newQuestions }))
    }
    
    return {
        questions,
        indexQuestion,
        setQuestions,
        selectAnswer
    }
})