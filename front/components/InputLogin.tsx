"use client";

interface InputProps {
  type: string;
  placeholder: string;
  className: string;
  inputValue: any;
  setInputValue: (newInputValue: any) => void;
}

const InputLogin = ({
  placeholder,
  type,
  className,
  inputValue,
  setInputValue,
}: InputProps) => {
  return (
    <div className="flex items-center justify-center mt-6 w-full">
      <div
        className={`
                relative
                ${className}
            `}
      >
        <input
          id={`${placeholder}`}
          name={`${placeholder}`}
          value={inputValue}
          onChange={(e) => {
            setInputValue(e.target.value);
          }}
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
        <label
          htmlFor={`${placeholder}`}
          className={`absolute left-0 top-1 cursor-text 
            ${inputValue == "" ? "peer-focus:text-xs" : "text-xs"}
            ${inputValue == "" ? "peer-focus:-top-4" : "-top-4"} 
            ${inputValue == "" ? "peer-focus:text-purple" : "text-purple"}
            ${inputValue != "" ? "peer-focus:text-xs" : "text-xs"}
            ${inputValue != "" ? "peer-focus:-top-4" : "-top-4"}
             transition-all `}
        >
          {inputValue == "" ? placeholder : ""}
        </label>
      </div>
    </div>
  );
};

export default InputLogin;
