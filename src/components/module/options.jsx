import PropTypes from 'prop-types';

export default function FeedbackOption({ options, onLeaveFeedback }) {
  return (
    <>
      {options.map(option => (
        <button
          key={option}
          onClick={() => onLeaveFeedback(option)}
          type="button"
          name={option}
        >
          {option.charAt(0).toUpperCase() + option.slice(1)}
        </button>
      ))}
    </>
  );
}

FeedbackOption.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
