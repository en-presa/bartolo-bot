import { useState, useRef, useEffect } from "react";

export default function useAutoResizeTextarea({
  maxLines = 10,
  lineHeight = 24,
}) {
  const [inputValue, setInputValue] = useState("");
  const [isMultiline, setIsMultiline] = useState(false);
  const textareaRef = useRef(null);

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      const newHeigth = textareaRef.current.scrollHeight;
      textareaRef.current.style.height = `${Math.min(newHeigth, maxLines * lineHeight)}px`;

      setIsMultiline(newHeigth > 24);
    }
  }, [inputValue, maxLines, lineHeight]);

  return {
    textareaRef,
    inputValue,
    isMultiline,
    setInputValue,
  };
}
