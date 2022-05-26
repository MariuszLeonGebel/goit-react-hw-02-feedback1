import React, {useState} from 'react';
import Header from "./components/Header/Header"
import FeedbackOptions from "./components/FeedbackOptions/FeedbackOptions"
import Statistics from "./components/Statistics/Statistics"


function App() {

  const [count, setCount] = useState({
    good: 0,
    neutral: 0,
    bad: 0
  });

  const increment = (event) => {
    const { name } = event.target;
    return setCount(prevCount => ({
      ...prevCount,
      [name]: prevCount[name] + 1
    })); 
  };
  
  function total() {
    return count.good + count.neutral + count.bad;
  }

  function positive() {
    const sum = total();
    const result = count.good * 100 / sum;
    return Math.floor(result);
  }

  return (
     <>   
      <Header />
      <FeedbackOptions handleChange={increment} />
      <Statistics good={count.good} neutral={count.neutral} bad={count.bad} total={total} positive={positive}/>
    </>
  );
}

export default App;
