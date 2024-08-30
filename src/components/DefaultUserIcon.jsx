import PropTypes from "prop-types";
import { UserIcon } from "@heroicons/react/24/outline";

export default function DefaultUserIcon({ className = "" }) {
  return (
    <div
      className={`${className} size-10 min-h-10 min-w-10 rounded-full bg-primary p-2`}
    >
      <UserIcon />
    </div>
  );
}

DefaultUserIcon.propTypes = {
  className: PropTypes.string,
};
