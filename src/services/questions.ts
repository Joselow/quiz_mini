const END_POINT = 'http://localhost:5173/data.json'

export const fetchQuestions = async () => {
    const response = await fetch(END_POINT)
    if (!response.ok) {
        throw Error('Something was wrong')
    }
    const questions = await response.json()
    return questions
}