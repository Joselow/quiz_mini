import { useQuestions } from "../hooks/useQuestions"

export function StartButton () {
    const { getQuestions } = useQuestions()
    const handleStart = (params) => {
        getQuestions()
    }
    return <>
        <button onClick={handleStart}>START</button>
    </>
}
