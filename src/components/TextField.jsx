import PropTypes from "prop-types";
import { ArrowUpIcon } from "@heroicons/react/24/outline";

export default function TextField({
  textareaRef,
  inputValue,
  isMultiline,
  onChange,
}) {
  return (
    <form
      className={`flex w-full flex-row items-center gap-2.5 bg-neutral py-2.5 pl-7 pr-3 ${isMultiline ? "rounded-3xl" : "min-h-16 rounded-full"}`}
    >
      <textarea
        ref={textareaRef}
        value={inputValue}
        onChange={onChange}
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

TextField.propTypes = {
  textareaRef: PropTypes.object,
  inputValue: PropTypes.string,
  isMultiline: PropTypes.bool,
  onChange: PropTypes.func,
};
