import { useRef, useState } from "react";
import TodoItem from "./todoItem";
import { AnimatePresence, motion } from "motion/react";
import SocialLink from "./socialLinke";
import { Separator } from "./ui/separator";
import ContactPopup from "./contactPopup";
import { Button } from "./ui/button";

export default function TodoGetAJob() {
  const handleChecked = () => {
    const rect = todoRef.current!.getBoundingClientRect();
    setOrigin(rect);
    setShowOverlay(true);
  };
  const handleUnchecked = () => {
    console.log("Unchecked!");
  };

  const [checked, setChecked] = useState(false);
  const todoRef = useRef<HTMLDivElement | null>(null);
  const [showOverlay, setShowOverlay] = useState(false);
  const [origin, setOrigin] = useState<DOMRect | null>(null);

  return (
    <div>
      <AnimatePresence>
        {showOverlay && origin && (
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
              transition: { duration: 0.3, ease: "easeIn" },
            }}
            exit={{
              opacity: 0,
              transition: { duration: 0.4 },
            }}
            className="fixed inset-0 bg-black/50 z-50"
            onClick={() => {
              setShowOverlay(false);
              setChecked(false);
            }}
          >
            <ContactPopup />
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div layout className="relative">
        <div className="hidden xl:block">
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
        </div>
        <div ref={todoRef}>
          <div
            className="todo-item p-2 flex justify-start items-center rounded-md bg-gray-600"
            onClick={() => {
              checked ? handleUnchecked() : handleChecked();
              setChecked(!checked);
            }}
          >
            {/* <Checkbox checked={checked} className="size-6"></Checkbox> */}
            <input
              type="checkbox"
              checked={checked}
              onChange={() => {
                checked ? handleUnchecked() : handleChecked();
                setChecked(!checked);
              }}
              className="size-6 rounded-md border-gray-500 bg-gray-500"
            />
            <span className="todo-title p-4 m-1 w-fit text-white text-xl font-bold">
              Get a job!
            </span>
            <Button>Fix this!</Button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
