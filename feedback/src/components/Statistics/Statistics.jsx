import { ListFeedback, FeedbackItem, Value } from "./Statistics.styled";

export default function Statistics({
  goodCount,
  neutralCount,
  badCount,
  totalFeedback,
  positivePercentage,
}) {
  const feedbackValue = [
    { key: "id-1", value: goodCount, name: "Good" },
    { key: "id-2", value: neutralCount, name: "Neutral" },
    { key: "id-3", value: badCount, name: "Bad" },
    { key: "id-4", value: totalFeedback, name: "Total" },
    { key: "id-5", value: positivePercentage, name: "Positive feedback" },
  ];
  return (
    <ListFeedback>
      {feedbackValue.map(({ key, value, name }) => (
        <FeedbackItem key={key}>
          {name}:{" "}
          <Value>
            {value}
            {name === "Positive feedback" && "%"}
          </Value>
        </FeedbackItem>
      ))}
    </ListFeedback>
  );
}
