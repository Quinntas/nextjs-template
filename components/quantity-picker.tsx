"use client"

import {useState} from "react";

type QuantityPickerProps = {
    quantity: number
    setQuantity: (quantity: number, operation: '-' | '+' | '=') => void
    min?: number
}

export default function QuantityPicker(props: QuantityPickerProps) {
    const [quantity, setQuantity] = useState(props.quantity)

    let min = 1;
    if (props.min != undefined) min = props.min;

    function handleDownClick() {
        if (quantity - 1 < min) {
            setQuantity(min)
            props.setQuantity(min, "=");
            return;
        }
        setQuantity(quantity - 1)
        props.setQuantity(quantity - 1, '-');
    }

    function handleUpClick() {
        setQuantity(quantity + 1)
        props.setQuantity(quantity + 1, '+');
    }

    return <div
        className="relative flex flex-row w-[100px] border-none outline-none h-10 rounded-lg bg-transparent text-background placeholder:text-background">
        <button
            onClick={handleDownClick}
            className="w-20 bg-primary rounded-l border-none outline-none cursor-pointer"
        >
            <span className="m-auto text-2xl font-light ">-</span>
        </button>
        <input
            type="number"
            min={min}
            disabled={true}
            className="flex text-background border-none placeholder:text-background bg-primary border-transparent focus:border-transparent focus:ring-0 items-center w-full font-normal text-center  outline-none focus:outline-none text-md "
            placeholder={String(quantity)}
        />
        <button
            onClick={handleUpClick}
            className="w-20 outline-none cursor-pointer border-none bg-primary rounded-r"
        >
            <span className="m-auto text-2xl font-light ">+</span>
        </button>
    </div>

}