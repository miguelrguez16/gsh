import { Button, ButtonGroup } from "@mui/material";
import { ExerciseList } from "./components/ExerciseList";
import { useExerciseStore } from "./store/useExerciseStore";

export const GymApp = () => {
  const { routines, selectRoutine, restoreData } = useExerciseStore();
  return (
    <main style={{ height: "100dvh" }}>
      <ExerciseList />
      <section className="button-footer">
        <ButtonGroup variant="contained" aria-label="Basic button group">
          {routines.map((routine) => (
            <Button
              variant="contained"
              key={routine.routineName}
              onClick={() => selectRoutine(routine.routineName)}
            >
              {routine.routineName}
            </Button>
          ))}
          <Button variant="contained" onClick={restoreData}>
            RESET
          </Button>
        </ButtonGroup>
      </section>
    </main>
  );
};
