type Props = {
    label: string;
    value: string;
    onChange: (value: string) => void;
    placeholder?: string;
    type?: string;
    required?: boolean;
    min?: string;
    step?: string;
};

const Input = ({
    label,
    value,
    onChange,
    placeholder,
    type = "text",
    required,
    min,
    step,
}: Props) => {
    return (
        <div>
            <label className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300">
                {label}

                {required && (
                    <span className="ml-1 text-red-500">*</span>
                )}
            </label>

            <input
                type={type}
                value={value}
                onChange={(e) => onChange(e.target.value)}
                placeholder={placeholder}
                required={required}
                min={min}
                step={step}
                className="
                    w-full
                    rounded-xl
                    border
                    border-slate-200
                    bg-white
                    px-4
                    py-3
                    text-sm
                    text-slate-900
                    outline-none
                    transition

                    placeholder:text-slate-400

                    hover:border-slate-300

                    focus:border-blue-500
                    focus:ring-4
                    focus:ring-blue-500/10

                    dark:border-slate-700
                    dark:bg-slate-950
                    dark:text-slate-100
                    dark:placeholder:text-slate-500
                    dark:hover:border-slate-600
                    dark:focus:border-blue-500
                "
            />
        </div>
    );
};

export default Input;