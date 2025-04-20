import { IconButton } from "@mui/material";
import SocialLinks from "../SocialLinks";
import TodoItem from "./todoItem";
import TodoList from "./todoList";
import MenuIcon from "@mui/icons-material/Menu";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerTitle,
  DrawerTrigger,
} from "../ui/drawer";
import { Separator } from "../ui/separator";
export default function Home() {
  const todos = [
    { title: "Todo 1", completed: false, id: 1 },
    { title: "Todo 2", completed: true, id: 2 },
    { title: "Todo 3", completed: false, id: 3 },
  ];

  return (
    <>
      <div className="flex flex-col h-screen bg-gray-100">
        
        <div className="flex align-middle items-center justify-around flex-col h-full ">
          <TodoList />
        </div>
        <div className="lg:block hidden">
        <img
          src="/images/arrow.png"
          className="absolute w-20 h-40 -rotate-65 top-15 left-15"
        />
        <p className="absolute left-40 top-45 text-black font-bold text-5xl">
          More
        </p>
      </div>
        <footer className="z-10 flex items-center justify-center h-20 bg-gray-900 grow text-white">
          <SocialLinks />
        </footer>
      </div>
    </>
  );
}
