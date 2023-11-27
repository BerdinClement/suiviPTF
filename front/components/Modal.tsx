import React from 'react';
import Button from "@/components/Button";

interface ModalProps {
    buttonText: string;
    open: boolean;
    onClose: () => void;
    children?: React.ReactNode;
    className?: string;
}

const Modal = ({ children, buttonText, open, onClose, className }: ModalProps) => {
    if (!open) return null;
    return (
        <div>
            <div className={`fixed inset-0`} onClick={onClose}></div>
            <div className= {`${className} fixed  top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2`} onClick={(e) => {
                e.stopPropagation()
            }}>
               {children}
            </div>
        </div>

    );
}

export default Modal;
