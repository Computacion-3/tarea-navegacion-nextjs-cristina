import { useState, type SubmitEvent } from 'react';

const REQUIRED_MESSAGE = 'Este campo es obligatorio.';
const MISMATCH_MESSAGE = 'Las contraseñas no coinciden.';

export function useRegisterForm() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [submitted, setSubmitted] = useState(false);
    const [success, setSuccess] = useState(false);

    const getConfirmPasswordError = () => {
        if (!submitted) return '';
        if (!confirmPassword) return REQUIRED_MESSAGE;
        if (password !== confirmPassword) return MISMATCH_MESSAGE;
        return '';
    };

    const errors = {
        name: submitted && !name.trim() ? REQUIRED_MESSAGE : '',
        email: submitted && !email.trim() ? REQUIRED_MESSAGE : '',
        password: submitted && !password ? REQUIRED_MESSAGE : '',
        confirmPassword: getConfirmPasswordError(),
    };

    const handleSubmit = (event: SubmitEvent<HTMLFormElement>) => {
        event.preventDefault();
        setSubmitted(true);

        const isValid =
            Boolean(name.trim()) &&
            Boolean(email.trim()) &&
            Boolean(password) &&
            Boolean(confirmPassword) &&
            password === confirmPassword;

        setSuccess(isValid);
    };

    return {
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
    };
}