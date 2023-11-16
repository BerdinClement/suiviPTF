interface InputProps {
    placeholder: string;
    type: string;
    className: string;
}

const Input = ({ placeholder, type, className }: InputProps) => {
    return (
        <div className="flex items-center justify-center mt-6 w-full">
        <div className={`
                relative
                ${className}
            `}>
            <input
            id={`${placeholder}`}
            name={`${placeholder}`}
            type={type}
            className={`
                border-b 
                border-gray-300 
                py-1 
                focus:border-b-2 
                focus:border-purple 
                transition-colors 
                focus:outline-none 
                peer 
                bg-inherit
                w-full
                `}
            />
            <label htmlFor={`${placeholder}`}
            className="absolute left-0 top-1 cursor-text peer-focus:text-xs peer-focus:-top-4 transition-all peer-focus:text-purple"
            >{placeholder}</label>
        </div>
        </div>
    );
};

export default Input;