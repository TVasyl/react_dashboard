import React, { useState } from "react";
import { HiOutlineUserCircle } from "react-icons/hi2";
import { Link } from "react-router-dom";

export const UserMenu = ({ image }) => {
    const [userMenuOpen, setUserMenuOpen] = useState(false);
    const userMenuItems = [
        {
            title: "Profile",
            key: "profile",
            path: "/profile",
        },
        {
            title: "Settings",
            key: "settings",
            path: "/settings",
        },
        {
            title: "LogOUT",
            key: "logout",
            path: "/logout",
        },
    ];

    const userMenuHandler = () => {
        console.log("User menu clicked");
        setUserMenuOpen((prev) => !prev);
    };

    return (
        <button className="h-10 w-10 relative">
            <div
                className="h-full w-full rounded-full overflow-hidden cursor-pointer text-gray-500 active:text-gray-400 "
                onClick={userMenuHandler}
            >
                {!image ? (
                    <HiOutlineUserCircle fontSize={40} />
                ) : (
                    <img
                        src={image}
                        className="h-full object-cover active:scale-90"
                    />
                )}
                {userMenuOpen && (
                    <div className="absolute top-14 right-0 z-10 w-40">
                        <ul className="bg-white p-4 flex flex-col text-gray-500 rounded-md ">
                            {userMenuItems.map((item) => (
                                <li
                                    key={item.key}
                                    className="my-2 last:text-red-500"
                                >
                                    <Link
                                        to={item.path}
                                        className="text-gray-500 flex items-start hover:no-underline hover:text-gray-400 "
                                    >
                                        {item.title}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </button>
    );
};
