import { ListButton, ListButtonItem, Button } from "./FeedbackOptions.styled";

export default function FeedbackOptions({ handleIncrement }) {
  const controlBtn = [
    { key: "id-1", name: "good" },
    { key: "id-2", name: "neutral" },
    { key: "id-3", name: "bad" },
  ];
  return (
    <ListButton>
      {controlBtn.map(({ key, name }) => (
        <ListButtonItem key={key}>
          <Button type="button" onClick={() => handleIncrement(name)}>
            {name}
          </Button>
        </ListButtonItem>
      ))}
    </ListButton>
  );
}
