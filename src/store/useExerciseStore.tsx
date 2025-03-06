import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import { routinesData } from "../__mocks__/routinesData";
import { Rutine } from "../types/rutine.type";

interface State {
  selectRoutine: (routine: string) => void;
  routines: Rutine[];
  selectedRoutine: Rutine | null;
  markAsDone: (exerciseID: number) => void;
  markAsNotDone: (exerciseID: number) => void;
}

export const useExerciseStore = create<State>()(
  devtools(
    persist(
      (set, get) => {
        return {
          routines: routinesData.routines,
          selectedRoutine: null,

          selectRoutine: (r: string) => {
            const { routines } = get();
            const selectedRoutine = routines.find(
              (routine) => routine.routineName === r
            );
            if (selectedRoutine) {
              set({ selectedRoutine: selectedRoutine });
            }
          },
          markAsDone: (exerciseID: number) => {
            const { selectedRoutine } = get();
            if (selectedRoutine) {
              const exercise = selectedRoutine.exercises.find(
                (exercise) => exercise.number === exerciseID
              );
              if (exercise) {
                exercise.done = true;
                set({ selectedRoutine });
              }
            }
          },
          markAsNotDone: (exerciseID: number) => {
            const { selectedRoutine } = get();
            if (selectedRoutine) {
              const exercise = selectedRoutine.exercises.find(
                (exercise) => exercise.number === exerciseID
              );
              if (exercise) {
                exercise.done = false;
                set({ selectedRoutine });
              }
            }
          },
        };
      },
      {
        name: "exercise-storage",
      }
    )
  )
);
