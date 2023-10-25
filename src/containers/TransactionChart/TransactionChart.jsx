import React from 'react'
import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

import data from './data.json'


export const TransactionChart = () => {

    return (
        <div className='h-[22rem] bg-white p-4 rounded-sm border border-gray-200 flex flex-col flex-1'>
            <strong className='text-gray-700 font-medium'>Transaction</strong>
            <div className="w-full mt-3 flex-1 text-xs">
                {/* <ResponsiveContainer
                    width="100%"
                    height="100%"
                > */}
                    <BarChart
                        width={800}
                        height={300}
                        data={data}
                        margin={{
                            top: 28,
                            right: 18,
                            left: 18,
                            bottom: 8,
                        }}
                    >
                        <CartesianGrid
                            strokeDasharray={"3 3 0 0"}
                            vertical={false}
                        />
                        <XAxis dataKey={"name"} />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar
                            dataKey={"Income"}
                            fill="#0ea5e9"
                        />
                        <Bar
                            dataKey={"Expense"}
                            fill="#ea580c"
                        />
                    </BarChart>
                {/* </ResponsiveContainer> */}
            </div>
        </div>
    );
}