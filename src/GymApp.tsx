import { Button, Typography } from "@mui/material";
import { ExerciseList } from "./components/ExerciseList";
import { useExerciseStore } from "./store/useExerciseStore";

export const GymApp = () => {
  const { routines, selectRoutine, selectedRoutine } = useExerciseStore();
  return (
    <main style={{ height: "100dvh" }}>
      <Typography variant="h3" align="center">
        Gym App
      </Typography>
      <p>Selected routine {selectedRoutine?.routineName}</p>
      <ExerciseList />
      <div
        style={{
          position: "fixed",
          bottom: 0,
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
          alignItems: "center",
          width: "100%",
          gap: "10px",
          padding: "10px",
        }}
      >
        {routines.map((routine) => (
          <Button
            variant="contained"
            key={routine.routineName}
            onClick={() => selectRoutine(routine.routineName)}
          >
            {routine.routineName}
          </Button>
        ))}
      </div>
    </main>
  );
};
