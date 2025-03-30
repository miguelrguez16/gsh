import "@justinribeiro/lite-youtube";
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
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              width: "100%",
              padding: "10px",
            }}
          >
            <h4 style={{ flex: 1 }}>{exercise.name}</h4>
            <p>{exercise.done?.valueOf() ? "✅" : "❌"}</p>
          </div>
          {exercise.image && (
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
          )}
          {exercise.videoSrc && (
            <lite-youtube
              autoload
              videoid={exercise.videoSrc}
              style={{ width: "100%", height: "100%" }}
            ></lite-youtube>
          )}
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
