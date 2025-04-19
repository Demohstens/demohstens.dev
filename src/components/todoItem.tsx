import { useState } from "react";
import { Checkbox } from "./ui/checkbox";

export default function TodoItem(props: {title: string, completed: boolean, id: number, onChecked?: Function, onUnchecked?: Function}) {
    const { onChecked, onUnchecked } = props;
    const  [checked, setChecked] = useState<boolean>(props.completed)

    const onToggle = () => {
       checked ? onUnchecked?.() : onChecked?.()
       setChecked(!checked)
    }

    return (
        <div className="todo-item p-2 flex justify-start items-center rounded-xl bg-gray-800" onClick={() => onToggle()}>
            <Checkbox checked={checked} className="size-6"></Checkbox>
            <span className="todo-title p-4 w-fit text-white text-xl font-bold">{props.title}</span>
        </div>
    )
}