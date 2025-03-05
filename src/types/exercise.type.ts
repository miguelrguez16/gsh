import { Areas } from "./areas.type";

export interface IExercise {
  name: string;
  area: Areas;
  notes?: string;
  image?: string;
  number: number;
}
