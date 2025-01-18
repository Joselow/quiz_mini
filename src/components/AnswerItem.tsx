interface AnswerItemProps {
    answer: string, 
    selectAnswer: () => void,
    background: string,
    disabled: boolean
}

export function AnswerItem ({ answer, selectAnswer, background, disabled }: AnswerItemProps) {
    const hadleClickAnswer = () => {
        selectAnswer()
    }
    return <>
        <div>
            <button 
                disabled={disabled}
                onClick={hadleClickAnswer} 
                style={{ width: '100%', background}}>
                <span>{answer}</span>
            </button>
        </div>
    </>
}