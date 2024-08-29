import PropTypes from "prop-types";

export default function Icon({ position = "" }) {
  let className = `${position} size-10 bg-white rounded-full`;
  return <div className={className}></div>;
}

Icon.propTypes = {
  position: PropTypes.string,
};
