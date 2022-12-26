import React from 'react';

import FeedbackOptions from 'components/FeedbackOptions';
import Section from 'components/Section';

import Statistics from 'components/Statistics';
import css from './Statistics/Statistics.module.css';

import Notification from 'components/Notification';

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
    const total = this.countTotalFeedback();
    return total ? Math.round((this.state.good / total) * 100).toFixed(2) : 0;
  };

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    const positive = this.countPositiveFeedbackPercentage();
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
          {total !== 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback()}
              positivePercentage={positive}
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
