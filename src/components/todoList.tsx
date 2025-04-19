import TodoGetAJob from "./todoGetAJob"
import TodoItem from "./todoItem"
import { ScrollArea } from "./ui/scroll-area"
import { Separator } from "./ui/separator"

export default function TodoList() {

    const todosPast = [
        { title: "Learn to code", completed: true, id: 1 },
        { title: "Become proficient in Python & dart", completed: true, id: 2 },
        { title: <>Write an app <a className="underline text-blue-200" href="https://github.com/Demohstens/Sketchspace">(sketchspace)</a></>, completed: true, id: 3 },
        { title: "Learn Rust 🦀", completed: true, id: 4 },
        { title: "Finish school", completed: true, id: 5 },
    ]

    const todosFuture = [
        { title: "[WIP] Study Computer science", completed: false, id: 6 },
        { title: "Get a master in CS", completed: false, id: 7 },
    ]



    return (
        <div className="p-2 border-black h-9/10 w-screen md:w-2/5 bg-gray-100 rounded-xl border-1 flex flex-col gap-2 scroll ">
            {todosPast.map((todo) => (
                <TodoItem title={todo.title} completed={todo.completed} id={todo.id} onChecked={() => { }} onUnchecked={() => { }} />
            ))}
            <Separator className="bg-gray-500 w-full" />
            {todosFuture.map((todo) => (
                <TodoItem title={todo.title} completed={todo.completed} id={todo.id} onChecked={() => { }} onUnchecked={() => { }} />
            ))}
            <TodoGetAJob />

        </div>

    )
}