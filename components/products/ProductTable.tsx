import Card from "../Card";
import ProductRow, {
    Product,
} from "./ProductRow";

type Props = {
    products: Product[];
    onEdit: (product: Product) => void;
    onDelete: (id: number) => void;
};

const ProductTable = ({
    products,
    onEdit,
    onDelete,
}: Props) => {
    return (
        <Card className="overflow-hidden">

            {/* Header */}
            <div className="border-b border-slate-100 dark:border-slate-800 px-6 py-5">

                <h2 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
                    Product List
                </h2>

                <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                    {products.length} products
                </p>

            </div>

            {/* Table */}
            <div className="overflow-x-auto">

                <table className="w-full min-w-[750px]">

                    <thead className="bg-slate-50 dark:bg-slate-950">

                        <tr>

                            <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                                Product
                            </th>

                            <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                                Price
                            </th>

                            <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                                Stock
                            </th>

                            <th className="px-6 py-4 text-right text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                                Actions
                            </th>

                        </tr>

                    </thead>

                    <tbody className="divide-y divide-slate-100 dark:divide-slate-800">

                        {products.map((product) => (
                            <ProductRow
                                key={product.Id}
                                product={product}
                                onEdit={onEdit}
                                onDelete={onDelete}
                            />
                        ))}

                    </tbody>

                </table>

            </div>

        </Card>
    );
};

export default ProductTable;