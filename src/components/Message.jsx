import PropTypes from "prop-types";
import AppIcon from "./AppIcon";
import DefaultUserIcon from "./DefaultUserIcon";

function UserMessage({ content }) {
  return (
    <div className="flex max-w-[66%] flex-row items-center justify-end gap-6 px-3 py-3">
      <p className="min-h-5 flex-grow text-left text-base">{content}</p>
      <DefaultUserIcon className="self-start" />
    </div>
  );
}

function BotMessage({ content }) {
  return (
    <div className="flex w-full flex-row items-center justify-start gap-6 py-3 pl-3 pr-[76px]">
      <div className="flex size-10 min-h-10 min-w-10 flex-row items-center justify-center self-start rounded-full border-2 border-gray-200 bg-secondary">
        <AppIcon className="size-6" />
      </div>
      <p className="min-h-5 flex-grow text-left text-base">{content}</p>
    </div>
  );
}

export default function Message({ content, botMessage = false }) {
  if (botMessage) return <BotMessage content={content} />;
  return <UserMessage content={content} />;
}

Message.propTypes = {
  content: PropTypes.string.isRequired,
  botMessage: PropTypes.bool,
};

UserMessage.propTypes = Message.propTypes;
BotMessage.propTypes = Message.propTypes;
