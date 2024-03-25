import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../ui/table";
import { ColumnDef, ColumnFiltersState, SortingState, flexRender, getCoreRowModel, getFilteredRowModel, getPaginationRowModel, getSortedRowModel, useReactTable } from "@tanstack/react-table";
import { Paginacao } from "./paginacao";
import { EsconderColunas } from "./esconderColunas";
import React from "react";
import { Input } from "../ui/input";

interface TabelaProps<TData, TValue> {
    colunas: ColumnDef<TData, TValue>[];
    dados: TData[];
}

const Tabela = <TData, TValue>({ colunas, dados }: TabelaProps<TData, TValue>) => {
    const [sorting, setSorting] = React.useState<SortingState>([])
    const [globalFilter, setGlobalFilter] = React.useState("")

    const tabela = useReactTable({
        columns: colunas,
        data: dados,
        state: {
            sorting,
            globalFilter,
        },
        getFilteredRowModel: getFilteredRowModel(),
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        onGlobalFilterChange: setGlobalFilter,
        onSortingChange: setSorting,
        getSortedRowModel: getSortedRowModel(),
    });
    return (
        <div className="flex flex-col w-[95%] h-[95%]">
            <div className="p-2">
                <div className="flex items-center py-4">
                    <Input
                        value={tabela.getState().globalFilter}
                        onChange={(e) => setGlobalFilter(e.target.value)}
                        placeholder="Pesquisar..."
                        className="w-[30%]"
                    />
                </div>
            </div>
            <EsconderColunas table={tabela} />
            <div className="rounded-md border">
                <Table>
                    <TableHeader>
                        {tabela.getHeaderGroups().map((headerGroup) => (
                            <TableRow key={headerGroup.id}>
                                {headerGroup.headers.map((header) => {
                                    return (
                                        <TableHead key={header.id}>
                                            {flexRender(header.column.columnDef.header, header.getContext())}
                                        </TableHead>
                                    )
                                }
                                )}
                            </TableRow>
                        ))}
                    </TableHeader>
                    <TableBody>
                        {tabela.getRowModel().rows.length ? (
                            tabela.getRowModel().rows.map((row) => (
                                <TableRow key={row.id}>
                                    {row.getVisibleCells().map((cell) => (
                                        <TableCell key={cell.id}>
                                            {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                        </TableCell>
                                    ))
                                    }
                                </TableRow>
                            ))
                        ) : (
                            <TableRow>
                                <TableCell colSpan={colunas.length} className="text-center">
                                    Nenhum resultado encontrado
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </div>
            <Paginacao table={tabela} />
        </div>
    )
}

export default Tabela;