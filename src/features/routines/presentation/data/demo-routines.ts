export type RoutineGoal = 'Fuerza' | 'Hipertrofia' | 'Resistencia';

export type DemoRoutine = {
    id: number;
    title: string;
    description: string;
    goal: RoutineGoal;
};

export const DEMO_ROUTINES: DemoRoutine[] = [
    {
        id: 1,
        title: 'Pierna pesada',
        description: 'Sentadilla, peso muerto y zancadas',
        goal: 'Fuerza',
    },
    {
        id: 2,
        title: 'Torso y brazos',
        description: 'Press banca, remo y dominadas',
        goal: 'Hipertrofia',
    },
    {
        id: 3,
        title: 'Cardio suave',
        description: 'Bicicleta y caminata inclinada',
        goal: 'Resistencia',
    },
];