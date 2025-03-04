import { IExercise } from "./exercise.type";

export interface Rutine {
  name: string;
  exercises: IExercise[];
  notes?: string;
  numberOfRepeticions?: number;
  numberOfSets?: number;
  duration?: number; // in seconds
}
