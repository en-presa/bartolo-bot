import PropTypes from "prop-types";

export default function Icon({ className = "" }) {
  const newClassName = `${className} min-w-10 min-h-10 size-10 bg-white rounded-full`;
  return <div className={newClassName}></div>;
}

Icon.propTypes = {
  className: PropTypes.string,
};
