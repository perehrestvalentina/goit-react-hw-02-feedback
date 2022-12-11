import React from 'react';
import css from './StateFeedback.module.css';

class Counter extends React.Component {
  static propTypes = {};

  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  goodReview = () => {
    this.setState(valueState => ({
      good: valueState.good + 1,
    }));
  };
  neutralReview = () => {
    this.setState(valueState => ({
      neutral: valueState.neutral + 1,
    }));
  };
  badReview = () => {
    this.setState(valueState => ({
      bad: valueState.bad + 1,
    }));
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
    } else return ' ';
  };

  render() {
    return (
      <div className={css.counter}>
        <h2 className={css.counter__title}>Please leave feedback</h2>
        <div>
          <button
            className={css.button}
            type="button"
            onClick={this.goodReview}
          >
            Good
          </button>
          <button
            className={css.button}
            type="button"
            onClick={this.neutralReview}
          >
            Neutral
          </button>
          <button className={css.button} type="button" onClick={this.badReview}>
            Bad
          </button>
        </div>
        <h2 className={css.counter__title}>Statistics</h2>
        <ul className={css.counter__list}>
          <li className={css.statistics__item}>Good: {this.state.good}</li>
          <li className={css.statistics__item}>
            Neutral: {this.state.neutral}
          </li>
          <li className={css.statistics__item}>Bad: {this.state.bad}</li>
          <li className={css.statistics__item}>
            Total:{this.countTotalFeedback()}
          </li>
          <li className={css.statistics__item}>
            Positive feedback: {this.countPositiveFeedbackPercentage()} %
          </li>
        </ul>
      </div>
    );
  }
}

export default Counter;
