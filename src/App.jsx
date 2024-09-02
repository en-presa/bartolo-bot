import TopAppBar from "./components/TopAppBar";
import ChatContainer from "./components/ChatContainer";
import UserInput from "./components/UserInput";
import { useState, useRef, useEffect } from "react";
import useAutoResizeTextarea from "./hooks/useAutoResizeTextarea";

function App() {
  const { textareaRef, inputValue, isMultiline, setInputValue } =
    useAutoResizeTextarea(10, 24);
  const [bottomSpacing, setBottomSpacing] = useState(114);
  const userInputRef = useRef(null);
  const chatContainerRef = useRef(null);

  useEffect(() => {
    if (userInputRef.current) {
      const userInputHeight = userInputRef.current.scrollHeight;
      setBottomSpacing(userInputHeight);
      if (chatContainerRef.current) {
        chatContainerRef.current.scrollTop = userInputHeight;
      }
    }
  }, [inputValue]);

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div className="flex h-full min-h-screen flex-col items-center overflow-hidden bg-accent text-gray-200">
      <TopAppBar />
      <ChatContainer
        innerRef={chatContainerRef}
        bottomSpacing={bottomSpacing}
      />
      <UserInput
        innerRef={userInputRef}
        textareaRef={textareaRef}
        inputValue={inputValue}
        isMultiline={isMultiline}
        onChange={handleChange}
      />
    </div>
  );
}

export default App;
