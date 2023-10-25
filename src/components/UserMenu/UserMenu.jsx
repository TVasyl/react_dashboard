import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { USER_MENU_ITEMS } from "../../constants/user_menu";

import { HiOutlineUserCircle } from "react-icons/hi2";

export const UserMenu = ({ image }) => {
    const [userMenuOpen, setUserMenuOpen] = useState(false);

    const navigate = useNavigate();

    return (
        <div className="h-10 w-10 relative">
            <div
                className="h-full w-full rounded-full overflow-hidden  text-gray-500 active:text-gray-400 "
                onClick={() => {
                    setUserMenuOpen((prev) => !prev);
                }}
            >
                {/* Show user image or default icon */}
                {!image ? (
                    <HiOutlineUserCircle fontSize={40} />
                ) : (
                    <img
                        src={image}
                        className="h-full object-cover active:scale-90 cursor-pointer"
                    />
                )}

                {/* Show the drop down menu when click on user icon */}
                {userMenuOpen && (
                    <div className="absolute top-14 right-0 z-10 w-60 border border-gray-200">
                        <ul className="bg-white px-4 py-2 flex flex-col text-gray-500 rounded-md ">
                            {USER_MENU_ITEMS.map((item) => (
                                <li
                                    className="text-gray-500 flex items-start hover:no-underline hover:font-medium cursor-pointer py-2 last:text-red-500"
                                    key={item.key}
                                    onClick={() => navigate(item.path)}
                                >
                                    {item.title}
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </div>
    );
};
