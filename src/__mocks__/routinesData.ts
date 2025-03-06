import { Assets } from "../assets";
import { Rutine } from "../types/rutine.type";

export const routinesData: { routines: Rutine[] } = {
  routines: [
    {
      routineName: "blue day",
      numberOfRepeticions: 15,
      numberOfSets: 4,
      duration: 60,
      exercises: [
        {
          name: "Cruces Polea",
          area: "pectorals",
          image: Assets.Cruces,
          number: 1,
        },
        {
          name: "Press Inclinado",
          area: "pectorals",
          image: Assets.PressInclinado,
          number: 2,
        },
        {
          name: "Remo bajo Polea",
          area: "legs",
          image: Assets.RemoBajoPolea,
          number: 3,
        },
        {
          name: "Jalon Pecho",
          area: "pectorals",
          image: Assets.JalonPecho,
          number: 4,
        },
        {
          name: "Curl Polea",
          area: "pectorals",

          image: Assets.CurlPoleaBiceps,
          number: 5,
        },
        {
          name: "Extensiones Maquina Cuadriceps",
          area: "legs",

          image: Assets.LegExtension,
          number: 6,
        },
        {
          name: "Sentadillas Sissy",
          area: "legs",
          image: Assets.SentadillasSissy,
          number: 7,
        },
        {
          name: "Femorales Acostado",
          area: "femorals",
          image: Assets.FemoralesAcostado,
          number: 8,
        },
        {
          name: "Abdominales Paralelos",
          area: "abdominals",
          image: Assets.AbdominalesParalelos,
          number: 9,
        },
      ],
    },
    {
      routineName: "green day",
      numberOfRepeticions: 15,
      numberOfSets: 4,
      duration: 60,
      exercises: [
        {
          name: "Press Banca",
          area: "pectorals",
          image: Assets.NotFound,
          number: 1,
        },
        {
          name: "Press Banca",
          area: "pectorals",
          image: Assets.NotFound,
          number: 2,
        },
      ],
    },
    {
      routineName: "red day",
      numberOfRepeticions: 15,
      numberOfSets: 4,
      duration: 60,
      exercises: [
        {
          name: "prensa discos levantar",
          area: "pectorals",
          image: Assets.PrensaDiscosLevantar,
          number: 1,
        },
        {
          name: "prensa espalda",
          area: "legs",
          image: Assets.PrensaEspalda,
          number: 2,
        },
        {
          name: "Apertura Maquina Pierna",
          area: "legs",
          image: Assets.AperturaMaquinaPierna,
          number: 3,
        },
        {
          name: "Press con maquina",
          area: "legs",
          image: Assets.PressMaquina,
          number: 4,
        },
        {
          name: "Curl Pecho Polea",
          area: "pectorals",
          image: Assets.NotFound,
          number: 5,
        },
        {
          name: "Press Frances",
          area: "triceps",
          image: Assets.PressFrances,
          number: 6,
        },
        {
          name: "Tirones Polea Triceps",
          area: "triceps",
          image: Assets.TironesPoleaTrices,
          number: 7,
        },
        {
          name: "Curl con Barra Z",
          area: "abdominals",
          image: Assets.CurlBarraZ,
          number: 8,
        },
        {
          name: "Lumbares",
          area: "abdominals",
          image: Assets.NotFound,
          number: 9,
        },
      ],
    },
  ],
};
