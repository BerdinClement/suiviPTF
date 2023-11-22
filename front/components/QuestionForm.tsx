import React from 'react';

interface QuestionFormProps {
    id: string;
    question: string;
}

const QuestionForm = ({ id, question }: QuestionFormProps) => {
    return (
        <div>
            <div className="w-full flex flex-wrap p-[20px]">
                <h2 className="font-bold w-full">Question {id} :</h2>
                <p className="pb-[10px]">{question}</p>
                <textarea placeholder="Votre réponse" className="border focus:border-none focus:outline-none bg-white rounded-3xl px-2 py-1 min-w-full min-h-[200px]"></textarea>
            </div>
        </div>
    )
}

export default QuestionForm;