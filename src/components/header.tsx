import { MenuIcon } from "lucide-react";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerTitle,
  DrawerTrigger,
} from "./ui/drawer";
import { Separator } from "./ui/separator";
import { Button } from "./ui/button";

function Header() {
  return (
    <header className="flex items-center justify-center h-20 bg-gray-900 border-2 border-gray-500 text-white rounded-2xl m-1 shadow-xl shadow-gray-200 mb-0 hover:shadow-gray-300 transition duration-200 ease-in-out p-4">
      <Drawer direction="left">
        <DrawerTrigger className="w-10 h-10" asChild>
          <MenuIcon className="absolute  left-10 top-8 text-white hover:bg-gray-700 " />
        </DrawerTrigger>
        <DrawerContent className="p-2 bg-gray-900 text-white w-1/2 h-full">
          <div className="flex flex-col gap-2">
            <DrawerTitle className="text-white">
              There's nothing here yet
            </DrawerTitle>
            <p>Check back later!</p>
            <Separator className="bg-gray-500 w-full" />
            <DrawerDescription className="text-gray-400">
              This website is a work in progress. It's built using Astro, React,
              Tailwind and shadcn UI. It's hosted on Firebase and is updated
              with every commit to the main branch usering GitHub actions.
              <br />
              <a
                href="https://github.com/Demohstens/demohstens.dev"
                className="underline text-blue-400"
              >
                You can visit the repository here
              </a>
            </DrawerDescription>
            <Separator className="bg-gray-500 w-full" />
            <div className="flex flex-col gap-2">
              <a
                href="/todo"
                className="rounded-md bg-gray-950 border-white border-1 p-2 hover:bg-gray-800 transition duration-200 ease-in-out"
              >
                I plan to add a "blog" and a portfolio
              </a>
              <a
                href="/todo"
                className="rounded-md bg-gray-950 border-white border-1 p-2 hover:bg-gray-800 transition duration-200 ease-in-out"
              >
                also plan to add a contact form
              </a>
              <a
                href="/projects"
                className="rounded-md bg-gray-950 border-white border-1 p-2 hover:bg-gray-800 transition duration-200 ease-in-out"
              >
                and a "projects" page
              </a>
            </div>
          </div>
          <DrawerFooter className="flex flex-row justify-center items-center p-2 bg-gray-900 text-white w-full h-full">
            <Button className="rounded-md bg-gray-950 border-white border-1 p-2 hover:bg-gray-800 transition duration-200 ease-in-out">
              <a href="/">Return home</a>
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
      <h1 className="md:text-6xl text-2xl font-bold">Matt's To-Do list</h1>
    </header>
  );
}

export default Header;
