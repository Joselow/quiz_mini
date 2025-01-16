import { create } from "zustand";
import { type Question } from "../types";

interface Store  {
    questions: Question[],
    currentQuestion: number,
    setQuestions: (comments: Question[]) => void
}

export const useQuestionStore = create<Store>((set) => {
    const questions: Question[] = []
    const currentQuestion = 0

    const setQuestions =  (questions: Question[]) => {
        set((state) => ({ questions }))
    }
    
    return {
        questions,
        currentQuestion,
        setQuestions
    }
})