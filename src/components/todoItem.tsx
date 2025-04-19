import { useState } from "react";
import { Checkbox } from "./ui/checkbox";

import { type ReactNode } from "react";
export default function TodoItem(props: {title: ReactNode, completed: boolean, id: number, onChecked?: Function, onUnchecked?: Function}) {
    const { onChecked, onUnchecked } = props;
    const  [checked, setChecked] = useState<boolean>(props.completed)

    const onToggle = () => {
       checked ? onUnchecked?.() : onChecked?.()
       setChecked(!checked)
    }

    return (
        <div className="todo-item p-2 m-1 flex justify-start items-center rounded-md bg-gray-600" >
            {/* <Checkbox checked={checked} className="size-6"></Checkbox> */}
            <input type="checkbox" checked={checked} onChange={() => onToggle()} className="size-6 rounded-md border-gray-500 bg-gray-500" />
            <span className="todo-title p-3 w-fit text-white text-xl font-bold">{props.title}</span>
        </div>
    )
}