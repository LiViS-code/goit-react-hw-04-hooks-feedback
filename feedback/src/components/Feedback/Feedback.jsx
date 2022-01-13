import React, { useState } from "react";
import { Container, Title, StatisticsTitle } from "./Feedback.styled";
import FeedbackOptions from "../FeedbackOptions/FeedbackOptions";
import Statistics from "../Statistics/Statistics";
import NotificationMessage from "../NotificationMessage/NotificationMessage";

export default function Feedback() {
  let totalFeedback = 0;
  let positiveFeedbackPercentage = 0;
  const [goodCount, setGoodCount] = useState(0);
  const [neutralCount, setNeutralCount] = useState(0);
  const [badCount, setBadCount] = useState(0);

  const handleIncrement = (key) => {
    console.log("click", typeof key);
    switch (key) {
      case "good":
        setGoodCount((c) => c + 1);
        break;

      case "neutral":
        setNeutralCount((c) => c + 1);
        break;

      case "bad":
        setBadCount((c) => c + 1);
        break;

      default:
        return;
    }
  };

  totalFeedback = goodCount + neutralCount + badCount;

  function countPositiveFeedbackPercentage(n, total) {
    positiveFeedbackPercentage =
      totalFeedback === 0 ? 0 : Math.round((n / total) * 100);
    return positiveFeedbackPercentage;
  }

  return (
    <Container>
      <Title>Please leave feedback</Title>

      <FeedbackOptions handleIncrement={handleIncrement} />

      <StatisticsTitle>Statistics</StatisticsTitle>

      {totalFeedback > 0 ? (
        <Statistics
          good={goodCount}
          neutral={neutralCount}
          bad={badCount}
          total={totalFeedback}
          positivePercentage={countPositiveFeedbackPercentage(
            goodCount,
            totalFeedback
          )}
        />
      ) : (
        <NotificationMessage />
      )}
    </Container>
  );
}
