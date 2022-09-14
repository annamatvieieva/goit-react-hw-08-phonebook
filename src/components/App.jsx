import { Component } from "react";
import { GlobalStyle } from './GlobalStyle';
import { FeedbackOptions } from "./FeedbackOptions";
import { Notification } from "./Notification";
import { Section } from "./Section";
import { Statistics } from "./Statistics";

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    oneFeedback: false,
  } 

  leaveFeedback = (feedback) => {
    this.setState(prevState => (
      {
        [feedback]: prevState[feedback] + 1,
        oneFeedback: true
      }
    ));
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
  
  render() {
    const { good, neutral, bad, oneFeedback } = this.state;
    const options = ['good', 'neutral', 'bad'];
    return (<>
      <GlobalStyle/>
      <Section title='Please leave feedback'>
        <FeedbackOptions options={options} onLeaveFeedback={this.leaveFeedback} />
        {oneFeedback ? <Statistics good={good} neutral={neutral} bad={bad} total={this.countTotalFeedback()} positivePercentage={this.countPositiveFeedbackPercentage()} /> : <Notification message='There is no feedback'/>}
      </Section>
      </>
    );
  };
}
