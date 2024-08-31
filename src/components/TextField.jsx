import { useState, useRef, useEffect } from "react";
import { ArrowUpIcon } from "@heroicons/react/24/outline";

export default function TextField() {
  const [inputValue, setInputValue] = useState("");
  const [isMultiline, setIsMultiline] = useState(false);
  const textareaRef = useRef(null);

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      const newHeigth = textareaRef.current.scrollHeight;
      textareaRef.current.style.height = `${Math.min(newHeigth, 10 * 24)}px`;

      setIsMultiline(newHeigth > 24);
    }
  }, [inputValue]);

  return (
    <form
      className={`flex w-full flex-row items-center gap-2.5 bg-neutral py-2.5 pl-7 pr-3 ${isMultiline ? "min-h-[96px] rounded-3xl" : "min-h-16 rounded-full"}`}
    >
      <textarea
        ref={textareaRef}
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        className={`w-full resize-none overflow-y-auto text-pretty bg-transparent pr-1 text-gray-400 outline-none ${isMultiline ? "align-top" : "align-middle"}`}
        placeholder="Escribe una instrucción aquí"
        rows="1"
        style={{ lineHeight: "24px" }}
      />
      <button
        type="submit"
        className={`size-10 rounded-full bg-secondary px-2 py-2 transition-all duration-300 ${isMultiline ? "self-end" : "self-center"}`}
      >
        <ArrowUpIcon />
      </button>
    </form>
  );
}
