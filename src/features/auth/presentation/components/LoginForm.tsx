'use client';

import Link from 'next/link';
import { FormField } from '@/src/features/auth/presentation/components/FormField';
import { useLoginForm } from '@/src/features/auth/presentation/hooks/use-login-form';

export function LoginForm() {
    const { email, password, errors, setEmail, setPassword, handleSubmit } =
        useLoginForm();

    return (
        <form
            onSubmit={handleSubmit}
            noValidate
            className="card bg-base-100 shadow-sm w-full max-w-md mx-auto"
        >
            <div className="card-body gap-4">
                <h1 className="card-title text-2xl">Iniciar sesión</h1>

                <FormField
                    id="email"
                    label="Correo"
                    type="email"
                    value={email}
                    onChange={setEmail}
                    placeholder="correo@ejemplo.com"
                    error={errors.email}
                />
                <FormField
                    id="password"
                    label="Contraseña"
                    type="password"
                    value={password}
                    onChange={setPassword}
                    placeholder="••••••••"
                    error={errors.password}
                />

                <button type="submit" className="btn btn-primary w-full">
                    Iniciar sesión
                </button>

                <p className="text-sm text-center">
                    ¿No tienes cuenta?{' '}
                    <Link href="/register" className="link link-primary">
                        Regístrate
                    </Link>
                </p>
            </div>
        </form>
    );
}