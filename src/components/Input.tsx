import React, {HTMLInputTypeAttribute} from "react";

interface IProps {
    id?: string;
    // type?: HTMLInputTypeAttribute;
    name: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    disabled?: boolean;
    className?: string;
}

const Input = ({disabled = false, className, ...props}: IProps) => {
    return (
        <input
            disabled={disabled}
            className={`${className} rounded-md shadow-sm border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50`}
            {...props}
        />
    )
}

export default Input
