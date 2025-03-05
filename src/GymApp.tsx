import { useState } from "react";
import { useRoutineData } from "./__mocks__/useRoutineMock";
import { Exercise } from "./components";
import { Rutine } from "./types/rutine.type";

export const GymApp = () => {
  const data = useRoutineData();
  const [selectedRoutine, setSelectedRoutine] = useState<Rutine | null>(
    data[0]
  );

  return (
    <div style={{ height: "100vdh" }}>
      {selectedRoutine && (
        <div>
          <h1>{selectedRoutine.name}</h1>
          <ul>
            {selectedRoutine.exercises.map((exercise) => (
              <Exercise key={exercise.name} {...exercise} />
            ))}
          </ul>
        </div>
      )}
      <div
        style={{
          position: "fixed",
          bottom: 0,
          display: "flex",
          alignContent: "center",
          width: "100dvw",
          justifyContent: "space-around",
        }}
      >
        {Object.entries(data).map(([key, value]) => (
          <button
            key={key}
            onClick={() => setSelectedRoutine(value)}
            style={{
              fontSize: "1.3rem",
              fontFamily: "Arial",
              cursor: "pointer",
            }}
          >
            {value.name}
          </button>
        ))}
      </div>
    </div>
  );
};
