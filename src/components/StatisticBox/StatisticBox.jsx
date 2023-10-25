import classNames from "classnames";
import React from "react";

import { IoBagHandle } from "react-icons/io5";

export const StatisticBox = ({
    iconColor = "sky",
    title = "",
    currency = "",
    amount = 0,
    profit = "",
}) => {

    return (
        <div className="bg-white rounded-sm p-4 flex-1 border border-gray-200 flex items-center gap-4">
            <div
                className={classNames(
                    iconColor,
                    "rounded-full h-12 w-12 flex items-center justify-center"
                )}
            >
                <IoBagHandle className="text-2xl text-white" />
            </div>
            <div>
                <span className="text-sm text-gray-500 font-light">
                    {title}
                </span>
                <div className="flex items-center">
                    <strong className="text-sl text-gray-700 font-semibold">
                        {`${currency}${amount}`}
                    </strong>
                    <span
                        className={classNames("text-sl pl-2", profit[0] === "-" ? "text-red-500" : "text-green-500")}
                    >
                        {profit}
                    </span>
                </div>
            </div>
        </div>
    );
};
