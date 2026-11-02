import Link from 'next/link';

export function AppHeader() {
    return (
        <header className="navbar bg-base-100 border-b border-base-200 px-4">
            <div className="flex-1">
                <Link href="/routines" className="text-xl font-bold">
                    GymRoutines
                </Link>
            </div>

            <button type="button" aria-label="Perfil" className="btn btn-ghost btn-circle">
                <div className="avatar avatar-placeholder">
                    <div className="bg-primary text-primary-content w-10 rounded-full">
                        <span className="text-sm">AP</span>
                    </div>
                </div>
            </button>
        </header>
    );
}