import type { DemoRoutine, RoutineGoal } from '@/src/features/routines/presentation/data/demo-routines';

const GOAL_BADGE_STYLES: Record<RoutineGoal, string> = {
    Fuerza: 'badge-primary',
    Hipertrofia: 'badge-secondary',
    Resistencia: 'badge-accent',
};

type RoutineSummaryCardProps = {
    routine: DemoRoutine;
};

export function RoutineSummaryCard({ routine }: RoutineSummaryCardProps) {
    return (
        <article className="card bg-base-100 shadow-sm border border-base-200">
            <div className="card-body">
                <h2 className="card-title">{routine.title}</h2>
                <p className="text-sm opacity-70">{routine.description}</p>
                <div className="card-actions">
                    <span className={`badge badge-outline ${GOAL_BADGE_STYLES[routine.goal]}`}>
                        {routine.goal}
                    </span>
                </div>
            </div>
        </article>
    );
}