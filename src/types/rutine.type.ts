import { IExercise } from "./exercise.type";

export type Rutine = {
  routineName: string;
  exercises: IExercise[];
  notes?: string;
  numberOfRepeticions?: number;
  numberOfSets?: number;
  duration?: number; // in seconds
};
