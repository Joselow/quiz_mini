import { create } from "zustand";
import { persist } from "zustand/middleware";
import { type Question } from "../types";

interface Store  {
    questions: Question[],
    indexQuestion: number,
    inGame: boolean,
}

interface Actions {
    setQuestions: (comments: Question[]) => void
    selectAnswer: (id: number, answersIndex: number) => void
    resetGame: (questions: Question[]) => void,
    goNextAnswer: () => void,
    goPreviousAnswer: () => void
}

export const useQuestionStore = create(persist<Store & Actions>((set, get) => {
    const questions: Question[] = []
    const indexQuestion = 0
    const inGame = false

    const setQuestions =  (questions: Question[]) => {
        set(() => ({ questions, inGame: true }))
    }

    const selectAnswer = (id: number, answerIndex: number) => {
        const { questions } = get()

        const newQuestions = [...questions]
        const questionIndex = questions.findIndex((el) => el.id === id)
        if (questionIndex === -1) return 

        const questionFound = questions[questionIndex]

        const isCorrectAnswer = questionFound.correctAnswer === answerIndex

        newQuestions[questionIndex] = {
            ...questionFound,
            isCorrectAnswer,
            selectedAnswer: answerIndex
        }

        set(() => ({ questions: newQuestions }))
    }

    const resetGame = (newQuestions: Question []) => {
        set(() => ({ questions: newQuestions, indexQuestion: 0 }))
    }

    const goNextAnswer = () => {
        const { questions, indexQuestion } = get()

        let newIndex = indexQuestion
        if (indexQuestion < questions.length -1) {
            newIndex++
        }

        set(() => ({ indexQuestion: newIndex }))
    }

    const goPreviousAnswer = () => {
        const { indexQuestion } = get()

        let newIndex = indexQuestion

        if (indexQuestion > 0) {
            newIndex--
        }

        set(() => ({ indexQuestion: newIndex }))
    }
    
    return {
        questions,
        indexQuestion,
        inGame,
        setQuestions,
        selectAnswer,
        resetGame,
        goPreviousAnswer,
        goNextAnswer,
    }
}, { name: 'questions'}
))