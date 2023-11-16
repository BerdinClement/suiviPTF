import React from 'react';

interface QuestionFormProps {

}

const QuestionForm = ({ }: QuestionFormProps) => {
    return (
        <div>
            <div className="w-full bg-grey flex flex-wrap p-[20px]">
                <h2 className="font-bold w-full">Question 1 :</h2>
                <p className="pb-[10px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ex erat, scelerisque sit amet orci et, viverra convallis sapien. Nunc porta nulla eu fringilla sagittis. Aenean facilisis tincidunt lacus, quis accumsan justo facilisis in. Donec ac ipsum et libero tempus tristique nec a mi. Maecenas eu scelerisque leo. </p>
                <textarea placeholder="Votre réponse" className="bg-white rounded-3xl border-gray-300 text-black px-2 py-1 min-w-[98%] min-h-[200px]"></textarea>
            </div>
        </div>
    )
}

export default QuestionForm;