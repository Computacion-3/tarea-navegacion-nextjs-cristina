import { useState, type SubmitEvent } from 'react';
import { useRouter } from 'next/navigation';

const REQUIRED_MESSAGE = 'Este campo es obligatorio.';

export function useLoginForm() {
    const router = useRouter();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const errors = {
        email: submitted && !email.trim() ? REQUIRED_MESSAGE : '',
        password: submitted && !password ? REQUIRED_MESSAGE : '',
    };

    const handleSubmit = (event: SubmitEvent<HTMLFormElement>) => {
        event.preventDefault();
        setSubmitted(true);

        if (!email.trim() || !password) return;

        router.replace('/routines');
    };

    return {
        email,
        password,
        errors,
        setEmail,
        setPassword,
        handleSubmit,
    };
}