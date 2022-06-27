import React from "react";

interface InputProps {
    label?: string;
    id: string;
    placeholder?: string;
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    type?: string;
}

export const Input: React.FC<InputProps> = ({
    label,
    id,
    placeholder,
    value,
    onChange,
    type = "text",
}) => {
    return (
        <div className="mb-4 mx-auto">
            <label className="block font-bold mb-2" htmlFor={id}>
                {label}
            </label>
            <input
                className="rounded py-2 px-3 text-black w-full"
                id={id}
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
            />
        </div>
    );
};
