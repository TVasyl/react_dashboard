import React from "react";
import {
    HiOutlineBell,
    HiOutlineChatAlt,
    HiOutlineSearch,
} from "react-icons/hi";
import { UserMenu } from "../UserMenu/UserMenu";
import { IconButton } from "../IconButton/IconButton";

export const Header = () => {
    return (
        <div className="bg-white h-16 px-6 flex justify-between items-center border-b border-gray-200">
            <div className="relative">
                <HiOutlineSearch
                    fontSize={20}
                    className="text-gray-400 absolute top-1/2 -translate-y-1/2 left-3"
                />
                <input
                    type="text"
                    placeholder="Search..."
                    className="text-sm focus:outline-none h-10 w-[24rem] border border-gray-300 rounded-sm pl-11 pr-4"
                />
            </div>
            <div className="flex items-center gap-2 mr-2">
                <IconButton
                    title={"Message"}
                    newMsg={100}
                >
                    <HiOutlineChatAlt fontSize={24} />
                </IconButton>
                <IconButton title={"Notification"}>
                    <HiOutlineBell fontSize={24} />
                </IconButton>
                <UserMenu
                    image={
                        "https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?w=996&t=st=1698060720~exp=1698061320~hmac=994ea5e1dba8040626e6aae134d9fc353925415c9d52d7b3d0ace932b935944e"
                    }
                />
            </div>
        </div>
    );
};
