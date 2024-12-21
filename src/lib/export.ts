import {type Table} from "@tanstack/react-table"

export function exportTableToCSV<TData>(
    table: Table<TData>,
    opts: {
        filename?: string
        excludeColumns?: (keyof TData | "select" | "actions")[]
        onlySelected?: boolean
    } = {}
): void {
    const {filename = "table", excludeColumns = [], onlySelected = false} = opts

    // Retrieve headers (column names)
    const headers = table
        .getAllLeafColumns()
        .map((column) => column.id)
        // @ts-expect-error - Exclude columns is not a valid property of Column
        .filter((id) => !excludeColumns.includes(id))

    // Build CSV content
    const csvContent = [
        headers.join(","),
        ...(onlySelected
                ? table.getSelectedRowModel().rows // Changed this line to get all selected rows
                : table.getRowModel().rows
        ).map((row) =>
            headers
                .map((header) => {
                    const cellValue = row.getValue(header)
                    // Handle values that might contain commas or newlines
                    return typeof cellValue === "string"
                        ? `"${cellValue.replace(/"/g, '""')}"`
                        : cellValue
                })
                .join(",")
        ),
    ].join("\n")

    // Create a Blob with CSV content
    const blob = new Blob([csvContent], {type: "text/csv;charset=utf-8;"})

    // Create a link and trigger the download
    const url = URL.createObjectURL(blob)
    const link = document.createElement("a")
    link.setAttribute("href", url)
    link.setAttribute("download", `${filename}.csv`)
    link.style.visibility = "hidden"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
}