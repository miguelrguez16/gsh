import "@justinribeiro/lite-youtube";
import { IExercise } from "../types/exercise.type";
import { ImageWithLoading } from "./ImageWithLoading";

export const Exercise: React.FC<IExercise> = ({
  name,
  area,
  notes,
  image,
  number,
  videoSrc,
}) => {
  return (
    <>
      <h1> {`${name} (${number})`}</h1>
      {image && <ImageWithLoading src={image} alt={name} />}
      {videoSrc && <lite-youtube videoid={videoSrc}></lite-youtube>}
      <p>{area}</p>
      <p>{notes}</p>
      <p>{number}</p>
    </>
  );
};
