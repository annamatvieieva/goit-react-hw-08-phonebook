// import PropTypes from 'prop-types';
import { Component } from "react";
// import { nanoid } from 'nanoid'
import { Statistics } from './Statistics/Statistics';
import {FeedbackOptions} from './FeedbackOptions/FeedbackOptions'
import { Section } from './Section/Section';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }

  leaveFeedback = (feedback) => {
    console.log(feedback);
    this.setState(prevState => (
      { [feedback]: prevState[feedback] + 1 }));
  }
  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;
    return total;
  }
  countPositiveFeedbackPercentage = () => {
    const {good} = this.state;
    const total = this.countTotalFeedback();
    const goodPercentage = (good===0 ? 0 : Math.round((good / total) * 100)) + '%';
    return goodPercentage;

  }

  // feedbackButtonId = nanoid();
    
  render() {
    const { good, neutral, bad } = this.state;
    const options = ['good', 'neutral', 'bad'];
    return (
      <Section title='Please leave feedback'>
        <FeedbackOptions options={options} onLeaveFeedback={this.leaveFeedback} />
        <Statistics good={good} neutral={neutral} bad={bad} total={this.countTotalFeedback()} positivePercentage={this.countPositiveFeedbackPercentage()} />
      </Section>
    );
  };
}
