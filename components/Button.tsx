import { Loader2 } from "lucide-react";

type Props = {
    children: React.ReactNode;
    type?: "button" | "submit";
    variant?: "primary" | "secondary";
    loading?: boolean;
    onClick?: () => void;
};

const Button = ({
    children,
    type = "button",
    variant = "primary",
    loading = false,
    onClick,
}: Props) => {
    const base = `
        inline-flex
        items-center
        justify-center
        gap-2
        rounded-xl
        px-5
        py-2.5
        text-sm
        font-semibold
        transition
        disabled:cursor-not-allowed
        disabled:opacity-60
    `;

    const variants = {
        primary: `
            bg-blue-600
            text-white
            hover:bg-blue-700
            dark:bg-blue-600
            dark:hover:bg-blue-500
        `,

        secondary: `
            border
            border-slate-200
            bg-white
            text-slate-700
            hover:bg-slate-50

            dark:border-slate-700
            dark:bg-slate-900
            dark:text-slate-300
            dark:hover:bg-slate-800
        `,
    };

    return (
        <button
            type={type}
            onClick={onClick}
            disabled={loading}
            className={`${base} ${variants[variant]}`}
        >
            {loading && (
                <Loader2
                    size={17}
                    className="animate-spin"
                />
            )}

            {children}
        </button>
    );
};

export default Button;