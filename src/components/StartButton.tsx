import { LIMIT_QUESTIONS } from "../assets/constants/questionInfo"
import { useQuestions } from "../hooks/useQuestions"

export function StartButton () {
    const { getQuestions } = useQuestions()
    const handleStart = () => {
        getQuestions(LIMIT_QUESTIONS)
    }
    return <>
        <button onClick={handleStart}>START</button>
    </>
}
