import { RoutineSummaryCard } from '@/src/features/routines/presentation/components/RoutineSummaryCard';
import { DEMO_ROUTINES } from '@/src/features/routines/presentation/data/demo-routines';

export default function RoutinesPage() {
    return (
        <section className="max-w-5xl mx-auto">
            <h1 className="text-2xl font-bold mb-4">Mis rutinas</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {DEMO_ROUTINES.map((routine) => (
                    <RoutineSummaryCard key={routine.id} routine={routine} />
                ))}
            </div>
        </section>
    );
}