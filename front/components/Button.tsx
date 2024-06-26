import { forwardRef } from "react";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(({
  className,
  children,
  disabled,
  type = 'button',
  ...props
}, ref) => {
  return (
    <button
      type={type}
      className={
        `
        rounded-full 
        bg-green-500
        border
        border-transparent
        px-3 
        py-3 
        disabled:cursor-not-allowed 
        disabled:opacity-50
        text-white
        font-bold
        hover:opacity-75
        transition
        ${className}
      `}
      disabled={disabled}
      ref={ref}
      {...props}
    >
      {children}
    </button>
  );
});

export default Button;