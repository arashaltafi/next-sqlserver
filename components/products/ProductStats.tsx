import {
    Package,
    Boxes,
    DollarSign,
    AlertTriangle,
} from "lucide-react";
import Card from "../Card";

type Props = {
    totalProducts: number;
    totalStock: number;
    inventoryValue: number;
    lowStock: number;
};

const ProductStats = ({
    totalProducts,
    totalStock,
    inventoryValue,
    lowStock,
}: Props) => {
    const stats = [
        {
            title: "Products",
            value: totalProducts,
            icon: Package,
        },
        {
            title: "Total Stock",
            value: totalStock,
            icon: Boxes,
        },
        {
            title: "Inventory Value",
            value: `$${inventoryValue.toLocaleString()}`,
            icon: DollarSign,
        },
        {
            title: "Low Stock",
            value: lowStock,
            icon: AlertTriangle,
        },
    ];

    return (
        <div className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">

            {stats.map((stat) => {
                const Icon = stat.icon;

                return (
                    <Card
                        key={stat.title}
                        className="p-5"
                    >
                        <div className="flex items-center justify-between">

                            <div>
                                <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
                                    {stat.title}
                                </p>

                                <p className="mt-2 text-2xl font-bold text-slate-900 dark:text-slate-100">
                                    {stat.value}
                                </p>
                            </div>

                            <div className="rounded-xl bg-blue-50 p-3 text-blue-600 dark:bg-blue-500/10 dark:text-blue-400">
                                <Icon size={21} />
                            </div>

                        </div>
                    </Card>
                );
            })}

        </div>
    );
};

export default ProductStats;