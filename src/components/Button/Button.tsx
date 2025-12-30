import './Button.css'

type ButtonVariant = 'primary' | 'secondary';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: ButtonVariant;
    loading?: boolean;
}

export function Button({
    variant = 'primary',
    loading = false,
    children,
    ...props
}: ButtonProps) {
    return (
        <button
            className={`btn btn--${variant}`}
            disabled={loading || props.disabled}
            {...props}
        >
            {loading ? 'Loading...' : children}
        </button>
    );
}