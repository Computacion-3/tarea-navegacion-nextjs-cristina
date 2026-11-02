'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { NAV_LINKS } from '@/src/shared/navigation/nav-links';

function isActiveLink(pathname: string, href: string) {
    return pathname === href || pathname.startsWith(`${href}/`);
}

type NavItemsProps = {
    pathname: string;
    onNavigate?: () => void;
};

function NavItems({ pathname, onNavigate }: NavItemsProps) {
    return (
        <>
            {NAV_LINKS.map(({ label, href }) => {
                const active = isActiveLink(pathname, href);

                return (
                    <li key={href}>
                        <Link
                            href={href}
                            onClick={onNavigate}
                            aria-current={active ? 'page' : undefined}
                            className={active ? 'menu-active' : ''}
                        >
                            {label}
                        </Link>
                    </li>
                );
            })}
        </>
    );
}

export function AppNavbar() {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="navbar bg-base-100 border-b border-base-200 px-4 min-h-0 py-2">
            {/* Escritorio */}
            <ul className="menu menu-horizontal hidden md:flex gap-1">
                <NavItems pathname={pathname} />
            </ul>

            {/* Móvil */}
            <div className={`dropdown md:hidden ${isOpen ? 'dropdown-open' : 'dropdown-close'}`}>
                <button
                    type="button"
                    aria-label="Abrir menú"
                    aria-expanded={isOpen}
                    onClick={() => setIsOpen((prev) => !prev)}
                    className="btn btn-ghost btn-square"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M4 6h16M4 12h16M4 18h7"
                        />
                    </svg>
                </button>
                <ul className="menu dropdown-content bg-base-100 rounded-box z-10 mt-2 w-52 p-2 shadow-sm">
                    <NavItems pathname={pathname} onNavigate={() => setIsOpen(false)} />
                </ul>
            </div>
        </nav>
    );
}