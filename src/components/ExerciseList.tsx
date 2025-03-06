import Typography from "@mui/joy/Typography";
import { Button, ButtonGroup, Card, List } from "@mui/material";
import { useExerciseStore } from "../store/useExerciseStore";

export const ExerciseList = () => {
  const selectedRoutine = useExerciseStore((store) => store.selectedRoutine);
  const markAsDone = useExerciseStore((store) => store.markAsDone);
  const markAsNotDone = useExerciseStore((store) => store.markAsNotDone);

  return (
    <List>
      {selectedRoutine?.exercises.map((exercise) => (
        <Card key={exercise.number + exercise.name}>
          <Typography level="title-lg">{exercise.name}</Typography>
          <img
            src={exercise?.image}
            style={
              exercise.done
                ? { filter: "blur(5px)", width: "100%" }
                : { width: "100%" }
            }
            alt={exercise.name}
            loading="lazy"
          />
          <ButtonGroup variant="text" fullWidth>
            <Button onClick={() => markAsDone(exercise.number)} color="success">
              Done
            </Button>
            <Button
              onClick={() => markAsNotDone(exercise.number)}
              color="error"
            >
              Not Done
            </Button>
          </ButtonGroup>
        </Card>
      ))}
    </List>
  );
};
