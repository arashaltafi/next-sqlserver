import { ReactNode } from "react";

type CardProps = {
    children: ReactNode;
    className?: string;
};

const Card = ({
    children,
    className = "",
}: CardProps) => {
    return (
        <div
            className={`
                rounded-2xl
                border
                border-slate-200
                bg-white
                shadow-sm

                dark:border-slate-800
                dark:bg-slate-900
                dark:shadow-black/20

                ${className}
            `}
        >
            {children}
        </div>
    );
};

export default Card;