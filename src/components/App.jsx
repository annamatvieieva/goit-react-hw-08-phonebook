// import PropTypes from 'prop-types';
import { Component } from "react";

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }
  
  leaveFeedback = (e) => {
    const { name } = e.target;
    console.log(name);
    this.setState(prevState => (
      { [name]: prevState[name] + 1 }));
  }

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;
    return total;
  }

  countPositiveFeedbackPercentage = () => {
    const {good} = this.state;
    const total = this.countTotalFeedback();
    const goodPercentage = (good==0 ? 0 : Math.round((good / total) * 100)) + '%';
    return goodPercentage;

  }
    
  render() {
    return (
      <>
        <h1>Please leave feedback</h1>
        <div>
          <button type='button' name='good' onClick={this.leaveFeedback}>Good</button>
          <button type='button' name='neutral' onClick={this.leaveFeedback}>Neutral</button>
          <button type='button' name='bad' onClick={this.leaveFeedback}>Bad</button>
        </div>
        <div>
          <h2>Statistics</h2>
          <p>Good: {this.state.good}</p>
          <p>Neutral: {this.state.neutral}</p>
          <p>Bad: {this.state.bad}</p>
          <p>Total: {this.countTotalFeedback()} </p>
          <p>Positive feedback: {this.countPositiveFeedbackPercentage()} </p>
        </div>
      </>
    );
  };
}
