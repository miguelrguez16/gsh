import { Assets } from '../assets';
import { Rutine } from "../types/rutine.type";

export const routinesData: { routines: Rutine[] } = {
  routines: [
    {
      routineName: "Blue Routine",
      numberOfRepeticions: 15,
      numberOfSets: 4,
      duration: 60,
      exercises: [
        {
          name: "Cruces",
          area: "pectorals",
          image: Assets.Cruces,
          number: 1,
        },
        {
          name: "PRESS INCLINADO (multyPower)",
          area: "piernas",
          image: Assets.PressInclinado,
          number: 2,
        },
        {
          name: "REMO BAJO POLEA  (con la pala -> ^)",
          area: "piernas",
          image: Assets.RemoBajoPolea,
          number: 3,
        },
        {
          name: "JALON PECHO barra ancha (con polea)",
          area: "piernas",
          number: 4,
        },
        {
          name: "CURL CON POLEA (biceps) pecho hacia afuera",
          area: "piernas",
          number: 5,
        },
        {
          name: "EXTENSIONES MAQUINA -> cuadriceps",
          area: "piernas",
          image: Assets.LegExtension,
          number: 6,
        },
        {
          name: "SENTADILLAS (PLACA)",
          image: Assets.SentadillasSissy,
          area: "piernas",
          number: 7,
        },
        {
          name: "FEMORALES ACOSTADO",
          area: "abdominales",
          image: Assets.FemoralesAcostado,
          number: 8,
        },
        {
          name: "ABDOMINALES",
          area: "abdominales",
          image: Assets.AbdominalesParalelos,
          number: 9,
        },
      ],
    },
    {
      routineName: "RED ROUTINE",
      numberOfRepeticions: 15,
      numberOfSets: 4,
      duration: 60,
      exercises: [
        {
          name: "PRENSA DISCOS",
          area: "espalda",
          image: Assets.PrensaDiscosLevantar,
          number: 1,
        },
        {
          name: "HACKA",
          area: "hombros",
          image: Assets.PrensaHack,
          number: 2,
        },
        {
          name: "APERTURA MAQUINA ->  Cerrar",
          area: "hombros",
          image: Assets.SentadillasSissy,
          number: 3,
        },
        {
          name: "PRESS MAQUINA DISCOS",
          area: "piernas",
          image: Assets.PressMaquina,
          number: 4,
        },
        {
          name: "PRESS AL PECHO con Polea",
          area: "espalda",
          number: 5,
        },
        {
          name: "PRESS FRANCES",
          area: "triceps",
          image: Assets.PressFrances,
          number: 6,
        },
        {
          name: "TIRONES POLEA triceps",
          area: "triceps",
          image: Assets.TironesPoleaTrices,
          number: 7,
        },
        {
          name: "CURL CON BARRA -> 'Z'",
          area: "biceps",
          number: 8,
        },
        {
          name: "Lumbares",
          area: "abdominales",
          number: 9,
        },
      ],
    },
  ],
};
