import React, { useState, useEffect } from "react";
import {
    createColumnHelper,
    getCoreRowModel,
    useReactTable,
    flexRender,
} from "@tanstack/react-table";

// import data from "./data.json";

export const ProductsList = () => {
    const [productsData, setProductsData] = useState([]);

    const columnHelper = createColumnHelper();
    const columns = [
        columnHelper.accessor("id", {
            // cell: (info) => info.getValue,
            header: () => <span>#</span>,
            footer: (info) => info.column.id,
        }),
        columnHelper.accessor("title", {
            // cell: (info) => info.getValue,
            header: () => <span>Name</span>,
            footer: (info) => info.column.id,
        }),
        columnHelper.accessor("brand", {
            // cell: (info) => info.getValue,
            header: () => <span>Brand</span>,
            footer: (info) => info.column.id,
        }),
        columnHelper.accessor("price", {
            // cell: (info) => info.getValue,
            header: () => <span>Price</span>,
            footer: (info) => info.column.id,
        }),
        columnHelper.accessor("rating", {
            // cell: (info) => info.getValue,
            header: () => <span>Rating</span>,
            footer: (info) => info.column.id,
        }),
        columnHelper.accessor("stock", {
            // cell: (info) => info.getValue,
            header: () => <span>Stock</span>,
            footer: (info) => info.column.id,
        }),
    ];

    const table = useReactTable({
        data: productsData,
        columns,
        getCoreRowModel: getCoreRowModel(),
    });

    useEffect(() => {
        fetch("https://dummyjson.com/products?limit=0")
            .then((res) => res.json())
            .then((data) => {
                setProductsData(data.products);
            });
    }, []);

    return (
        <div className="bg-white px-4 pt-4 pb-4 rounded-sm border border-gray-200 flex-1 flex flex-col gap-4">
            <strong>Orders List</strong>

            <div>
                <table className="w-full text-gray-700 text-left">
                    <thead>
                        {table.getHeaderGroups().map((headerGroup) => (
                            <tr key={headerGroup.id}>
                                {headerGroup.headers.map((header) => (
                                    <th key={header.id}>
                                        {header.isPlaceholder
                                            ? null
                                            : flexRender(
                                                  header.column.columnDef
                                                      .header,
                                                  header.getContext()
                                              )}
                                    </th>
                                ))}
                            </tr>
                        ))}
                    </thead>
                    <tbody>
                        {table.getRowModel().rows.map((row) => (
                            <tr key={row.id}>
                                {row.getVisibleCells().map((cell) => (
                                    <td key={cell.id}>
                                        {flexRender(
                                            cell.column.columnDef.cell,
                                            cell.getContext()
                                        )}
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};
