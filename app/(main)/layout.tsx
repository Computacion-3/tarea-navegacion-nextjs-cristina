import { AppHeader } from '@/src/shared/components/layout/AppHeader';
import { AppNavbar } from '@/src/shared/components/layout/AppNavbar';

export default function AppLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <AppHeader />
            <AppNavbar />
            <main className="flex-1 p-4">{children}</main>
        </>
    );
}