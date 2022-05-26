import propTypes from "prop-types";

export default function Statistics(props) {

  const styles = {
    fontFamily: 'Lato',
    fontWeight: 200,
    lineHeight: 0.7,
    marginTop: "35px"
  }
    
  return (
    <div style={styles}>
      <h2>Statistics</h2>
     
      <h4>{props.good + props.neutral + props.bad > 0 ? "Good: " + props.good : "No feedback given"}</h4>
      <h4>{props.good + props.neutral + props.bad > 0 ? "Neutral: " + props.neutral : ""}</h4>
      <h4>{props.good + props.neutral + props.bad > 0 ? "Bad: " + props.bad : ""}</h4>
     

      <h4>{props.good + props.neutral + props.bad > 0 ? "Total: " + props.total() : ""}</h4>
      <h4>{props.good + props.neutral + props.bad > 0 ? "Positive feedback: " + props.positive() + "%" : ""}</h4>
    </div>
  );
}

Statistics.propTypes = {
  good: propTypes.number,
  neutral: propTypes.number,
  bad: propTypes.number,
  total: propTypes.func.isRequired,
  positive: propTypes.func.isRequired,
  
};