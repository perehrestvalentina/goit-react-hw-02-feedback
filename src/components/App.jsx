import React from 'react';

import FeedbackOptions from 'components/FeedbackOptions/FeedbackOptions';
import Section from './Section/Section';

import Statistics from 'components/Statistics/Statistics';
import css from './Statistics/Statistics.module.css';

import Notification from './Notification/Notification';

export class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = option => {
    this.setState(valueState => ({ [option]: valueState[option] + 1 }));
  };

  countTotalFeedback = () => {
    return Object.values(this.state).reduce((x, y) => x + y);
  };

  countPositiveFeedbackPercentage = () => {
    const positiveFeedBack = (
      (this.state.good / this.countTotalFeedback()) *
      100
    ).toFixed(2);
    if (positiveFeedBack > 0) {
      return positiveFeedBack;
    } else return '0';
  };

  render() {
    return (
      <div className={css.counter}>
        <Section title={'Please leave feedback'}>
          <div>
            <FeedbackOptions
              options={Object.keys(this.state)}
              onLeaveFeedback={this.onLeaveFeedback}
            />
          </div>
        </Section>

        <Section title={'Statistics'}>
          {this.countTotalFeedback() !== 0 ? (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification
              message={'There is no feedback'}
              className={css.message__item}
            />
          )}
        </Section>
      </div>
    );
  }
}
