import { useQuestions } from "../hooks/useQuestions"

export function FooterInfo () {
    const { correct, incorrect, answered } = useQuestions()

    return <>
        <div>
            <strong>
                ✅ { correct } correct
                ❌ { incorrect } incorrect
                ❓ { answered } not answered
            </strong>
        </div>
    </>
}