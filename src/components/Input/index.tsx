import { InputHTMLAttributes, ForwardRefRenderFunction, forwardRef } from "react";
import "./styles.css";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label: string;
}

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = ({ label, name, ...rest }, ref) => {
    return (
        <div className="input-container">
            <label htmlFor={name}>{label}</label>
            <input id={name}{...rest} ref={ref} />
        </div>
    )
}

export const Input = forwardRef(InputBase);
