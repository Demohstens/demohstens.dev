import TodoItem from "./todoItem";
import TodoList from "./todoList";

export default function Home() {
  const todos = [
    { title: "Todo 1", completed: false, id: 1 },
    { title: "Todo 2", completed: true, id: 2 },
    { title: "Todo 3", completed: false, id: 3 },
  ];

  return (
    <>
      <header className="flex items-end justify-center h-20 bg-black text-white">
        <h1 className="text-4xl font-bold mb-4">Matt's To-Do list</h1>
      </header>
      <div className="flex align-middle items-center justify-around flex-col h-screen ">
        <TodoList />
      </div>
    </>
  );
}
