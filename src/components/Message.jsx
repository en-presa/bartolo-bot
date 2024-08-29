import PropTypes from "prop-types";
import Icon from "./Icon";

function UserMessage({ content }) {
  return (
    <div className="flex flex-row items-start justify-end gap-6 py-3 pl-[76px] pr-3">
      <p className="min-h-5 flex-grow text-left align-middle text-base">
        {content}
      </p>
      <Icon />
    </div>
  );
}

function BotMessage({ content }) {
  return (
    <div className="flex flex-row items-start justify-start gap-6 py-3 pl-3 pr-[76px]">
      <Icon />
      <p className="min-h-5 flex-grow text-left align-middle text-base">
        {content}
      </p>
    </div>
  );
}

export default function Message({ content, reverse = false }) {
  if (reverse) return <BotMessage content={content} />;
  return <UserMessage content={content} />;
}

Message.propTypes = {
  content: PropTypes.string.isRequired,
  reverse: PropTypes.bool,
};
