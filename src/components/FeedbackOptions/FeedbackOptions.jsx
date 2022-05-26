
import propTypes from "prop-types"
import "./FeedbackOptions.css"

export default function FeedbackOptions({handleChange}) {

  return (
    <div className="div">
      <button
        className="button"
        type="button"
        onClick={handleChange}
        name="good"
      >
        Good
      </button>
      <button
        className="button"
        type="button"
        onClick={handleChange}
        name="neutral"
      >
        Neutral
      </button>
      <button
        className="button"
        type="button"
        onClick={handleChange}
        name="bad"
      >
        Bad
      </button>
    </div>
  );
}

FeedbackOptions.propTypes = {
  handleChange: propTypes.func.isRequired,
};