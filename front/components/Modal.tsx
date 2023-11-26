import React from 'react';
import Input from "@/components/Input";
import Button from "@/components/Button";

export interface InputItem {
    type: string,
    text: string
}

interface ModalProps {
    title?: string;
    inputList: InputItem[];
    buttonText: string;
    open: boolean;
    onClose: () => void;
}

const Modal = ({ title, inputList, buttonText, open, onClose }: ModalProps) => {
    if (!open) return null;
    return (
        <div>
            <div className={`fixed inset-0`} onClick={onClose}></div>
            <div className='fixed  top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  bg-white flex flex-col rounded-xl' onClick={(e) => {
                e.stopPropagation()
            }}>
                <Button type="button" className="bg-purple " onClick={onClose}>
                    X
                </Button>
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
        </div>

    );
}

export default Modal;
