type Props = {
    stock: number;
};

const Badge = ({ stock }: Props) => {
    if (stock === 0) {
        return (
            <span className="
                inline-flex
                rounded-full
                bg-red-50
                px-3
                py-1
                text-xs
                font-semibold
                text-red-700

                dark:bg-red-500/10
                dark:text-red-400
            ">
                Out of stock
            </span>
        );
    }

    if (stock <= 5) {
        return (
            <span className="
                inline-flex
                rounded-full
                bg-amber-50
                px-3
                py-1
                text-xs
                font-semibold
                text-amber-700

                dark:bg-amber-500/10
                dark:text-amber-400
            ">
                Low stock · {stock}
            </span>
        );
    }

    return (
        <span className="
            inline-flex
            rounded-full
            bg-emerald-50
            px-3
            py-1
            text-xs
            font-semibold
            text-emerald-700

            dark:bg-emerald-500/10
            dark:text-emerald-400
        ">
            In stock · {stock}
        </span>
    );
};

export default Badge;