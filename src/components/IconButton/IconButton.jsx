import React from "react";

export const IconButton = ({ children, title, newMsg = 0 }) => {
    newMsg = +newMsg;

    return (
        <button
            className="text-gray-500 active:text-gray-400 relative"
            title={title}
            onClick={() => {
                console.log("Icon button clicked");
            }}
        >
            {newMsg !== 0 && (
                <span className="absolute top-[-5px] right-[-5px] h-4 w-4 flex items-center justify-center  bg-red-500 text-white font-medium rounded-full text-[7px] border border-white">
                    {newMsg < 100 ? newMsg : 99}
                </span>
            )}
            {children}
        </button>
    );
};
