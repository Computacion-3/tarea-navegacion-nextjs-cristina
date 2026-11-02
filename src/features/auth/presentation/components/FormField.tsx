type FormFieldProps = {
    id: string;
    label: string;
    type?: 'text' | 'email' | 'password';
    value: string;
    onChange: (value: string) => void;
    placeholder?: string;
    error?: string;
};

export function FormField({
    id,
    label,
    type = 'text',
    value,
    onChange,
    placeholder,
    error,
}: FormFieldProps) {
    return (
        <div className="flex flex-col gap-1">
            <label htmlFor={id} className="text-sm font-medium">
                {label}
            </label>
            <input
                id={id}
                type={type}
                value={value}
                onChange={(e) => onChange(e.target.value)}
                placeholder={placeholder}
                aria-invalid={Boolean(error)}
                className={`input w-full ${error ? 'input-error' : ''}`}
            />
            {error && (
                <p role="alert" className="text-error text-sm">
                    {error}
                </p>
            )}
        </div>
    );
}