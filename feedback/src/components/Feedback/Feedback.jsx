import { useState } from "react";
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

  positiveFeedbackPercentage =
    totalFeedback === 0 ? 0 : Math.round((goodCount / totalFeedback) * 100);

  return (
    <Container>
      <Title>Please leave feedback</Title>

      <FeedbackOptions handleIncrement={handleIncrement} />

      <StatisticsTitle>Statistics</StatisticsTitle>

      {totalFeedback > 0 ? (
        <Statistics
          goodCount={goodCount}
          neutralCount={neutralCount}
          badCount={badCount}
          totalFeedback={totalFeedback}
          positivePercentage={positiveFeedbackPercentage}
        />
      ) : (
        <NotificationMessage />
      )}
    </Container>
  );
}
