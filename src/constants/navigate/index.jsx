import {
    HiOutlineCog,
    HiOutlineCube,
    HiOutlineQuestionMarkCircle,
    HiOutlineViewGrid
} from "react-icons/hi";

export const DASHBOARD_SIDEBAR_LINKS = [
    {
        key: "dashboard",
        lable: "Dashboard",
        path: "/",
        icon: <HiOutlineViewGrid />,
    },
    {
        key: "counterdata",
        lable: "CounterData",
        path: "/counterdata",
        icon: <HiOutlineCube />,
    },
];

export const DASHBOARD_SIDEBAR_BOTTOM_LINKS = [
    {
        key: "settings",
        lable: "Settings",
        path: "/settings",
        icon: <HiOutlineCog />,
    },
    {
        key: "support",
        lable: "Support",
        path: "/support",
        icon: <HiOutlineQuestionMarkCircle />,
    },
];
