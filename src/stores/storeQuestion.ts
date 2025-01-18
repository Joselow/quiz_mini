import { create } from "zustand";
import { type Question } from "../types";

interface Store  {
    questions: Question[],
    indexQuestion: number,
    inGame: boolean,
    userSelectedAnswer: boolean
}

interface Actions {
    setQuestions: (comments: Question[]) => void
    selectAnswer: (id: number, answersIndex: number) => void
    resetGame: () => void,
    goNextAnswer: () => void,
    goPreviousAnswer: () => void
}

function getRandomInt(x: number) {
    return Math.floor(Math.random() * (x + 1));
}


export const useQuestionStore = create<Store & Actions>((set, get) => {
    const questions: Question[] = []
    const indexQuestion = 0
    const inGame = false
    const userSelectedAnswer = false

    const setQuestions =  (questions: Question[]) => {
        set((state) => ({ questions, inGame: true }))
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

        set((state) => ({ questions: newQuestions, userSelectedAnswer: true }))
    }

    const resetGame = () => {
        const { questions } = get()

        const resetedQuestions =  questions.map((question) => ({
            ...question,
            selectedAnswer: undefined,
            isCorrectAnswer: undefined,
        }))


        // const randomNumber = getRandomInt(resetedQuestions.length)


        set((state) => ({ questions: resetedQuestions, indexQuestion: 0, userSelectedAnswer: false }))
    }

    const goNextAnswer = () => {
        const { questions, indexQuestion } = get()

        let newIndex = indexQuestion
        if (indexQuestion < questions.length -1) {
            newIndex++
        }

        set((state) => ({ indexQuestion: newIndex }))
    }
    const goPreviousAnswer = () => {
        const { indexQuestion } = get()

        let newIndex = indexQuestion

        if (indexQuestion > 0) {
            newIndex--
        }

        set((state) => ({ indexQuestion: newIndex }))
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
        userSelectedAnswer
    }
})