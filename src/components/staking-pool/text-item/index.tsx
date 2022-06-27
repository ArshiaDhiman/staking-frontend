import React from "react";

export const TextItem: React.FC<{ title: string; text: string }> = ({
    title,
    text,
}) => {
    return (
        <div className="flex md:inline">
            <p className="flex-1 text-base text-gray-300">{title}</p>
            <h4 className="text-lg">
                <strong>{text}</strong>
            </h4>
        </div>
    );
};
