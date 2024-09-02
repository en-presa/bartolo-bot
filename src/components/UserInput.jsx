import PropTypes from "prop-types";
import TextField from "./TextField";
import { CONTENT_WIDTH } from "../constants/constants";

export default function UserInput({
  innerRef,
  textareaRef,
  inputValue,
  isMultiline,
  onChange,
}) {
  return (
    <div
      ref={innerRef}
      className={`fixed bottom-0 flex bg-accent ${CONTENT_WIDTH} flex-col items-center justify-start gap-2.5 pb-5`}
    >
      <TextField
        textareaRef={textareaRef}
        inputValue={inputValue}
        isMultiline={isMultiline}
        onChange={onChange}
      />
      <p className="text-sm text-gray-400">
        ¿Te está gustando BartoloBot? Cuéntanos qué te parece a través del
        siguiente <a href="">enlace</a>.
      </p>
    </div>
  );
}

UserInput.propTypes = {
  innerRef: PropTypes.object,
  textareaRef: PropTypes.object,
  inputValue: PropTypes.string,
  isMultiline: PropTypes.bool,
  onChange: PropTypes.func,
};
