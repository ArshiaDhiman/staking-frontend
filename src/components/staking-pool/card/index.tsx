import React from "react";

export const Card: React.FC = ({ children }) => {
    return (
        <div>
            <div className="border rounded-lg text-left bg-level-one border-white border-opacity-5 w-full max-w-4xl mx-auto py-4">
                {children}
            </div>
        </div>
    );
};
