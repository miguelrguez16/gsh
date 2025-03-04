import { IExercise } from "../types/exercise.type";
import { ImageWithLoading } from "./ImageWithLoading";

export const Exercise: React.FC<IExercise> = ({
  name,
  area,
  notes,
  image,
  equipment,
  number,
}) => {
  return (
    <li key={name} style={{ height: "100vdh" }}>
      <div style={{ height: "100vdh", padding: "1rem" }}>
        <h1> {`${name} (${number})`}</h1>
        {image && <ImageWithLoading src={image} alt={name} />}
        <p>{area}</p>
        <p>{equipment}</p>
        <p>{notes}</p>
        <p>{number}</p>
      </div>
    </li>
  );
};
