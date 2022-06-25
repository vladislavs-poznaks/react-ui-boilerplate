import React from "react";

interface IProps {
    children: JSX.Element | string;
    className?: string;
    htmlFor?: string;
}

const Label = ({children, className, ...props}: IProps) => {
    return (
        <label
            className={`${className} block font-medium text-sm text-gray-700`}
            {...props}>
            {children}
        </label>
    )
}

export default Label
