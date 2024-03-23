import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../ui/table";
import { ColumnDef, flexRender, getCoreRowModel, getPaginationRowModel, useReactTable } from "@tanstack/react-table";
import { Paginacao } from "./paginacao";
import { EsconderColunas } from "./esconderColunas";

interface TabelaProps<TData, TValue> {
    colunas: ColumnDef<TData, TValue>[];
    dados: TData[];
}

const Tabela = <TData, TValue>({ colunas, dados }: TabelaProps<TData, TValue>) => {
    const tabela = useReactTable({
        columns: colunas,
        data: dados,
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
    });
    return (
        <div className="flex flex-col w-[95%] h-[95%]">
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