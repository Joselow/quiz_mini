import { useQuestions } from "../hooks/useQuestions"
import { type Question as QuestionI } from "../types"

interface QuestionProps {
    info: QuestionI
}

export function AnswerItem ({ answer, select } : { answer: string, select: () => void }) {
    const hadleClickAnswer = () => {
        select()
    }
    return <>
        <div
            onClick={hadleClickAnswer} 
            style={{ borderBottom: '1px solid #393939', cursor: 'pointer'}}>
            <span>{answer}</span>
        </div>
    </>
}

export function Question ({ info }: QuestionProps) {
    console.log({
        info
    })
    const { selectAnswer } = useQuestions()

    const handleSelectAnswer = (indexSelected: number) => {
        selectAnswer(info.id, indexSelected)
    }
    
    return <>
        <section>
            <div>
                <h4>{info.question}</h4>
                <h4>{info.isCorrectAnswer && 'Respuesta correcta'}</h4>
            </div>
            <div>
                { info.code }
            </div>
            <div style={{ background: '#161616', borderRadius: '5px', padding: '1px', margin:'10px 0' }}>
                <ul style={{ listStyle: 'none', padding: '3px 0', margin: 0}}>
                    { 
                        info.answers.map((el, index) => (
                            <AnswerItem 
                                key={el} 
                                answer={el} 
                                select={() => handleSelectAnswer(index)} />
                        ))
                    }
                </ul>
            </div>
        </section>
    </>
}

export function Game () {
    const { questions, indexQuestion} = useQuestions()

    const question = questions[indexQuestion]

    return <>
        <Question 
            info={question}
        />
    </>
}