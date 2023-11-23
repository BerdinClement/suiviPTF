import React from 'react';
import Input from "@/components/Input";
import Button from "@/components/Button";

export interface InputItem {
    type: string,
    text: string
}

interface PopupProps {
    title?: string;
    inputList: InputItem[];
    buttonText: string;
    onClose: () => void;
}

const Popup = ({ title, inputList, buttonText, onClose }: PopupProps) => {
    return (
        <div className="bg-white px-16 py-8 flex flex-col justify-center items-center shadow-2xl rounded-xl">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">{title}</h2>
            {
                inputList.map((input, index) => {
                    return (
                        <div className="mb-4">
                            <label>{input.text}</label>
                            <Input type={input.type} placeholder={input.text}></Input>
                        </div>
                    )
                })
            }
            <Button type="submit" className="bg-slate-700 w-10/12" onClick={onClose}>
                {buttonText}
            </Button>
        </div>
    );
}

export default Popup;
