import { COLOR_ANSWERS } from "../assets/constants/colors"
import { useQuestions } from "../hooks/useQuestions"

import { type Question as QuestionI } from "../types"
import { AnswerItem } from "./AnswerItem"

interface QuestionProps {
    info: QuestionI
}

const getBackgroundAsnwer = (answerIndex: number, question: QuestionI) => {
    // || answerIndex !== question.selectedAnswer
    // console.log(question);

    const isSelected = question.selectedAnswer != null

    if (!isSelected) return COLOR_ANSWERS.DEFAULT

    if (question.correctAnswer === answerIndex) {
        return answerIndex === question.selectedAnswer 
                                ? COLOR_ANSWERS.CORRECT 
                                : COLOR_ANSWERS.CORRECT_INDICATOR
    } 

    if (answerIndex === question.selectedAnswer) {
        return COLOR_ANSWERS.INCORRECT
    }
    
    return COLOR_ANSWERS.DEFAULT
}

export function Question ({ info }: QuestionProps) {

    const { selectAnswer } = useQuestions()

    const handleSelectAnswer = (indexSelected: number) => {
        if (info.selectedAnswer != null ) return
        selectAnswer(info.id, indexSelected)
    }

  
    
    return <>
        <section>
            <div>
                <h4>{info.question}</h4>
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
                                background={getBackgroundAsnwer(index, info)}
                                answer={el} 
                                disabled={info.selectedAnswer != null}
                                selectAnswer={() => handleSelectAnswer(index)} />
                        ))
                    }
                </ul>
            </div>
            <div>
                <h4>{info.isCorrectAnswer && 'Respuesta correcta seleccionada'}</h4>
            </div>
        </section>
    </>
}