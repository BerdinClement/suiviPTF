import React from 'react';

interface QuestionFormProps {
    id: string;
    question: string;
    response: {
        questionId: string;
        text: string;
        student: {
            user: {
                _id: string;
            };
        };
    }[];
    setResponse: (response:{
        questionId: string;
        text: string;
        student: {
            user: {
                _id: string;
            };
        };
    }[] ) => void;
}

const QuestionForm = ({ id, question, response, setResponse }: QuestionFormProps) => {

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        const value = e.target.value;
        const index = response.findIndex((r) => r.questionId === id);
        if (index !== -1) {
            response[index].text = value;
        } else {
            response.push({ questionId: id, text: value, student: { user: { _id: '' } } });
        }
        console.log(response);
        
        setResponse(response);
    }

    const defaultValue = response ? response.find((r) => r.questionId === id)?.text : '';

    return (
        <div>
            <div className="w-full flex flex-wrap p-[20px]">
                <h2 className="font-bold w-full">Question :</h2>
                <p className="pb-[10px]">{question}</p>
                <textarea defaultValue={defaultValue} onChange={handleChange} placeholder="Votre réponse" className="border focus:border-none focus:outline-none bg-white rounded-3xl px-2 py-1 min-w-full min-h-[200px]"></textarea>
            </div>
        </div>
    )
}

export default QuestionForm;