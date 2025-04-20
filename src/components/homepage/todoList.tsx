import TodoGetAJob from "./todoGetAJob"
import TodoItem from "./todoItem"
import { ScrollArea } from "../ui/scroll-area"
import { Separator } from "../ui/separator"

export default function TodoList() {

    const todosPast = [
        { title: "Learn to code", completed: true, id: 1 },
        { title: "Become proficient in Python & dart", completed: true, id: 2 },
        { title: <>Write an app <a className="underline text-blue-200" href="/projects">(My projects)</a></>, completed: true, id: 3 },
        { title: "Learn Rust 🦀", completed: true, id: 4 },
        { title: "Finish school", completed: true, id: 5 },
    ]


    return (
        <div className="p-2 border-black h-9/10 w-screen md:w-4/5 xl:w-2/5 bg-gray-100 rounded-xl border-1 flex flex-col gap-2 scroll ">
            {todosPast.map((todo) => (
                <TodoItem title={todo.title} completed={todo.completed}  />
            ))}
            <Separator className="bg-gray-500 w-full" />
            <TodoItem title="[WIP] Study Computer science (Get a masters?)" completed={false} />
            <TodoGetAJob />
            <TodoItem title="Learn UI-Design and styling" completed={false} />


        </div>

    )
}