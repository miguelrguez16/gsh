import { Assets } from "../assets";
import { Rutine } from "../types/rutine.type";

export const routinesData: { routines: Rutine[] } = {
  routines: [
    {
      routineName: "green day",
      numberOfRepeticions: 15,
      numberOfSets: 4,
      duration: 60,
      exercises: [
        {
          name: "Prensa Discos",
          area: "piernas",
          image: Assets.PrensaDiscosLevantar,
          number: 1,
        },
        {
          name: "HACK_A",
          area: "piernas",
          image: Assets.PrensaHack,
          number: 2,
        },
        {
          name: "Apertura Maquina - Abductores",
          area: "piernas",
          image: Assets.AperturaMaquinaPierna,
          number: 3,
        },
        {
          name: "Cerradura Maquina - Aductores",
          area: "piernas",
          image: Assets.AperturaMaquinaPierna,
          number: 4,
        },
        {
          name: "Extension de Cuadriceps",
          area: "piernas",
          image: Assets.LegExtension,
          number: 5,
        },
        {
          name: "Femorales Acostado",
          area: "piernas",
          image: Assets.FemoralesAcostado,
          number: 6,
        },
        {
          name: "Hip Thrust",
          area: "piernas",

          number: 7,
        },
        {
          name: "Abdominales Paralelos",
          area: "abdominales",
          image: Assets.AbdominalesParalelos,
          number: 8,
        },
      ],
    },
    {
      routineName: "blue day",
      numberOfRepeticions: 15,
      numberOfSets: 4,
      duration: 60,
      exercises: [
        {
          name: "Press Inclinado",
          area: "pectorals",
          image: Assets.PressInclinado,
          number: 1,
        },
        {
          name: "Cruces Poleas",
          area: "pectorals",
          image: Assets.Cruces,
          number: 2,
        },
        {
          name: "Curl Poleas",
          area: "pectorals",
          image: Assets.CurlPoleaBiceps,
          number: 3,
        },
        {
          name: "Jalon Pecho",
          area: "pectorals",
          image: Assets.JalonPecho,
          number: 4,
        },
        {
          name: "Lumbares",
          area: "espalda",
          videoSrc: "PicwGUbAjb4",
          number: 5,
        },
        {
          name: "Press Frances",
          area: "triceps",
          image: Assets.PressFrances,
          number: 6,
        },
        {
          name: "Abdominales Paralelos",
          area: "abdominales",
          image: Assets.AbdominalesParalelos,
          number: 7,
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
          name: "Pull face",
          area: "espalda",

          number: 1,
        },
        {
          name: "Elevaciones Laterales",
          area: "hombros",

          number: 2,
        },
        {
          name: "Press Arnold",
          area: "hombros",

          number: 3,
        },
        {
          name: "Gemelos",
          area: "piernas",
          number: 4,
        },
        {
          name: "Jalon al pecho polea alta",
          area: "espalda",
          number: 5,
        },
        {
          name: "Abdinales o Lumbares",
          area: "abdominales",
          number: 6,
        },
      ],
    },
  ],
};
