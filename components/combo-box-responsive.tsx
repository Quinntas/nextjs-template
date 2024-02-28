"use client"

import * as React from "react"

import {Button} from "@/components/ui/button"
import {Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList,} from "@/components/ui/command"
import {Drawer, DrawerContent, DrawerTrigger,} from "@/components/ui/drawer"
import {Popover, PopoverContent, PopoverTrigger,} from "@/components/ui/popover"
import {useMediaQuery} from "@/components/ui/hooks/use-media-query";
import {cn} from "@/lib/utils";

export interface ComboBoxItem {
    value: string
    label: string
}

interface ComboBoxResponsiveProps {
    searchPlaceholder: string
    disableSearch?: boolean
    items: ComboBoxItem[]
    defaultValue?: ComboBoxItem
    onSelect: (item: ComboBoxItem) => void
    title: string

    fill?: boolean
}

export function ComboBoxResponsive(props: ComboBoxResponsiveProps) {
    const [open, setOpen] = React.useState(false)
    const isDesktop = useMediaQuery("(min-width: 768px)")
    const [selectedStatus, setSelectedStatus] = React.useState<ComboBoxItem | null>(
        props.defaultValue || null
    )

    if (isDesktop) {
        return (
            <Popover open={open} onOpenChange={setOpen}>
                <PopoverTrigger asChild>
                    <Button variant="outline" className={cn(
                        "justify-start",
                        props.fill ? "w-full" : ""
                    )}>
                        {selectedStatus ? <>{selectedStatus.label}</> : <>{props.title}</>}
                    </Button>
                </PopoverTrigger>
                <PopoverContent className="w-[200px] p-0" align="start">
                    <StatusList
                        disableSearch={props.disableSearch}
                        items={props.items}
                        searchPlaceholder={props.searchPlaceholder}
                        setOpen={setOpen} setSelectedStatus={(item) => {
                        if (!item)
                            return
                        setSelectedStatus(item)
                        props.onSelect(item)
                    }}/>
                </PopoverContent>
            </Popover>
        )
    }

    return (
        <Drawer open={open} onOpenChange={setOpen}>
            <DrawerTrigger asChild>
                <Button variant="outline" className={cn(
                    "justify-start",
                    props.fill ? "w-full" : ""
                )}>
                    {selectedStatus ? <>{selectedStatus.label}</> : <>{props.title}</>}
                </Button>
            </DrawerTrigger>
            <DrawerContent>
                <div className="mt-4 ">
                    <StatusList
                        disableSearch={props.disableSearch}
                        items={props.items}
                        searchPlaceholder={props.searchPlaceholder}
                        setOpen={setOpen} setSelectedStatus={(item) => {
                        if (!item)
                            return
                        setSelectedStatus(item)
                        props.onSelect(item)
                    }
                    }/>
                </div>
            </DrawerContent>
        </Drawer>
    )
}

function StatusList({
                        items,
                        searchPlaceholder,
                        disableSearch,
                        setOpen,
                        setSelectedStatus,
                    }: {
    items: ComboBoxItem[]
    searchPlaceholder: string
    disableSearch?: boolean
    setOpen: (open: boolean) => void
    setSelectedStatus: (status: ComboBoxItem | null) => void
}) {
    return (
        <Command>
            {!disableSearch && <CommandInput placeholder={searchPlaceholder}/>}
            <CommandList>
                <CommandEmpty>Nenhum encontrado.</CommandEmpty>
                <CommandGroup>
                    {items.map((status) => (
                        <CommandItem
                            key={status.value}
                            value={status.value}
                            onSelect={(value) => {
                                setSelectedStatus(
                                    items.find((priority) => priority.value === value) || null
                                )
                                setOpen(false)
                            }}
                        >
                            {status.label}
                        </CommandItem>
                    ))}
                </CommandGroup>
            </CommandList>
        </Command>
    )
}
