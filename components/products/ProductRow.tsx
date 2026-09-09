import { Pencil, Trash2 } from "lucide-react";
import Badge from "../Badge";
import Avatar from "../Avatar";

export type Product = {
    Id: number;
    Name: string;
    Description?: string | null;
    Price: number;
    Stock: number;
};

type Props = {
    product: Product;
    onEdit: (product: Product) => void;
    onDelete: (id: number) => void;
};

const ProductRow = ({
    product,
    onEdit,
    onDelete,
}: Props) => {
    return (
        <tr className="group transition hover:bg-slate-50 dark:hover:bg-slate-800/50">

            {/* Product */}
            <td className="px-6 py-5">

                <div className="flex items-center gap-3">

                    <Avatar name={product.Name} />

                    <div className="min-w-0">

                        <p className="truncate font-semibold text-slate-900 dark:text-slate-100">
                            {product.Name}
                        </p>

                        {product.Description && (
                            <p className="mt-1 max-w-xs truncate text-sm text-slate-500 dark:text-slate-400">
                                {product.Description}
                            </p>
                        )}

                    </div>

                </div>

            </td>

            {/* Price */}
            <td className="px-6 py-5">
                <span className="font-semibold text-slate-900 dark:text-slate-100">
                    ${Number(product.Price).toLocaleString()}
                </span>
            </td>

            {/* Stock */}
            <td className="px-6 py-5">
                <Badge stock={Number(product.Stock)} />
            </td>

            {/* Actions */}
            <td className="px-6 py-5">

                <div className="flex justify-end gap-2">

                    <button
                        type="button"
                        onClick={() => onEdit(product)}
                        className="
                            inline-flex
                            items-center
                            gap-2
                            rounded-lg
                            border
                            border-slate-200
                            px-3
                            py-2
                            text-sm
                            font-medium
                            text-slate-700
                            transition
                            hover:bg-slate-100
                            dark:border-slate-700
                            dark:text-slate-300
                            dark:hover:bg-slate-800
                        "
                    >
                        <Pencil size={16} />
                        Edit
                    </button>

                    <button
                        type="button"
                        onClick={() => onDelete(product.Id)}
                        className="
                            inline-flex
                            items-center
                            gap-2
                            rounded-lg
                            border
                            border-red-200
                            px-3
                            py-2
                            text-sm
                            font-medium
                            text-red-600
                            transition
                            hover:bg-red-50
                            dark:border-red-900/50
                            dark:text-red-400
                            dark:hover:bg-red-950/40
                        "
                    >
                        <Trash2 size={16} />
                        Delete
                    </button>

                </div>

            </td>

        </tr>
    );
};

export default ProductRow;