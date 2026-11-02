import type { Metadata } from "next";
import "./globals.css";
import { StoreProvider } from "@/src/store/StoreProvider";

export const metadata: Metadata = {
    title: "GymRoutines",
    description: "Gestión de rutinas de gimnasio",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
    return (
        <html
            lang="es"
            className={`h-full antialiased`}
        >
            <body className="min-h-full flex flex-col">
                <StoreProvider>
                    {children}
                </StoreProvider>
            </body>
        </html>
    );
}
