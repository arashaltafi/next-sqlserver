import { PackageOpen } from "lucide-react";

const EmptyProducts = () => {
    return (
        <div className="flex flex-col items-center justify-center px-6 py-16 text-center">

            <div className="
                rounded-2xl
                bg-slate-100
                p-4
                text-slate-400

                dark:bg-slate-800
                dark:text-slate-500
            ">
                <PackageOpen size={32} />
            </div>

            <h3 className="mt-4 text-lg font-semibold text-slate-900 dark:text-slate-100">
                No products found
            </h3>

            <p className="mt-1 max-w-sm text-sm text-slate-500 dark:text-slate-400">
                Start by creating your first product.
            </p>

        </div>
    );
};

export default EmptyProducts;