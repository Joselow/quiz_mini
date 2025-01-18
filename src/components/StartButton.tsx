import { useQuestions } from "../hooks/useQuestions"


const LIMIT_QUESTIONS = 10

export function StartButton () {
    const { getQuestions } = useQuestions()
    const handleStart = (params) => {
        getQuestions(LIMIT_QUESTIONS)
    }
    return <>
        <button onClick={handleStart}>START</button>
    </>
}
