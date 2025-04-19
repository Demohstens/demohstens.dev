import TodoItem from "./todoItem";
import { Button } from "./ui/button";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from "./ui/dialog";

export default function TodoGetAJob() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="relative">
          <div className="absolute left-200 -top-20 w-75">
            <h1 className="font-bold text-4xl"> Help me check this off!</h1>
          </div>
          <div className="absolute left-130 -top-10 w-75 rotate-180">
            <img
              src="/images/arrow.png"
              alt="arrow to 'get a job' todo item"
              className="w-40 h-20"
            />
          </div>

          <TodoItem
            title="Get a job"
            completed={false}
            id={0}
            onChecked={() => {}}
            onUnchecked={() => {}}
          />
        </div>
      </DialogTrigger>
      <DialogContent className="w-[400px]">
        <DialogTitle>Contact me</DialogTitle>
        <div className="flex flex-row gap-4 justify-evenly ">
          <button className="bg-black w-full text-white px-4 py-2 rounded-lg hover:bg-gray-500">
            <a href="mailto:demohstens@gmail.com">Email me!</a>
          </button>

          <DialogClose asChild>
            <button className="bg-black w-full text-white px-4 py-2 rounded-lg hover:bg-gray-500">
              Close
            </button>
          </DialogClose>
        </div>
      </DialogContent>
    </Dialog>
  );
}
