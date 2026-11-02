'use client';

import Link from 'next/link';
import { FormField } from '@/src/features/auth/presentation/components/FormField';
import { useRegisterForm } from '@/src/features/auth/presentation/hooks/use-register-form';

export function RegisterForm() {
    const {
        name,
        email,
        password,
        confirmPassword,
        errors,
        success,
        setName,
        setEmail,
        setPassword,
        setConfirmPassword,
        handleSubmit,
    } = useRegisterForm();

    return (
        <form
            onSubmit={handleSubmit}
            noValidate
            className="card bg-base-100 shadow-sm w-full max-w-md mx-auto"
        >
            <div className="card-body gap-4">
                <h1 className="card-title text-2xl">Crear cuenta</h1>

                <FormField
                    id="name"
                    label="Nombre"
                    value={name}
                    onChange={setName}
                    placeholder="Tu nombre"
                    error={errors.name}
                />
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
                <FormField
                    id="confirm-password"
                    label="Confirmar contraseña"
                    type="password"
                    value={confirmPassword}
                    onChange={setConfirmPassword}
                    placeholder="••••••••"
                    error={errors.confirmPassword}
                />

                {success && (
                    <div role="status" className="alert alert-success text-sm">
                        <span>Cuenta creada. Ya puedes iniciar sesión.</span>
                    </div>
                )}

                <button type="submit" className="btn btn-primary w-full">
                    Registrarse
                </button>

                <p className="text-sm text-center">
                    ¿Ya tienes cuenta?{' '}
                    <Link href="/login" className="link link-primary">
                        Inicia sesión
                    </Link>
                </p>
            </div>
        </form>
    );
}