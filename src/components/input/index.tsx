import { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  placeholder: string;
  label?: string;
}

function Input({ placeholder, label, ...rest }: InputProps) {
  return (
    <>
      <div>
        <label htmlFor="">{label}</label>
        <input type="text" placeholder={placeholder} />
      </div>
    </>
  );
}

export default Input;
