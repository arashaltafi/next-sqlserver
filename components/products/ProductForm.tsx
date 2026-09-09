import { FormEvent, useEffect, useState } from "react";
import { Plus, Save, X } from "lucide-react";
import Input from "../Input";
import Button from "../Button";
import Card from "../Card";

type Product = {
    Id: number;
    Name: string;
    Description?: string;
    Price: number;
    Stock: number;
};

type Props = {
    editingProduct: Product | null;
    onSubmit: (data: {
        Name: string;
        Description: string;
        Price: number;
        Stock: number;
    }) => Promise<void>;
    onCancel: () => void;
};

const ProductForm = ({
    editingProduct,
    onSubmit,
    onCancel,
}: Props) => {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [stock, setStock] = useState("");
    const [saving, setSaving] = useState(false);

    useEffect(() => {
        if (!editingProduct) {
            setName("");
            setDescription("");
            setPrice("");
            setStock("");

            return;
        }

        setName(editingProduct.Name);
        setDescription(editingProduct.Description || "");
        setPrice(String(editingProduct.Price));
        setStock(String(editingProduct.Stock));
    }, [editingProduct]);

    const handleSubmit = async (
        event: FormEvent<HTMLFormElement>
    ) => {
        event.preventDefault();

        try {
            setSaving(true);

            await onSubmit({
                Name: name.trim(),
                Description: description.trim(),
                Price: Number(price),
                Stock: Number(stock),
            });

            if (!editingProduct) {
                setName("");
                setDescription("");
                setPrice("");
                setStock("");
            }
        } finally {
            setSaving(false);
        }
    };

    return (
        <Card>
            <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 px-6 py-5">
                <div>
                    <h2 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
                        {editingProduct
                            ? "Edit Product"
                            : "Add Product"}
                    </h2>

                    <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                        {editingProduct
                            ? "Update product information."
                            : "Create a new product."}
                    </p>
                </div>

                {editingProduct && (
                    <button
                        type="button"
                        onClick={onCancel}
                        className="
                            rounded-lg
                            p-2
                            text-slate-400
                            hover:bg-slate-100
                            hover:text-slate-700
                            dark:hover:bg-slate-800
                            dark:hover:text-slate-200
                        "
                    >
                        <X size={20} />
                    </button>
                )}
            </div>

            <form
                onSubmit={handleSubmit}
                className="p-6"
            >
                <div className="grid gap-5 md:grid-cols-2">

                    <Input
                        label="Product Name"
                        value={name}
                        onChange={setName}
                        placeholder="Enter product name"
                        required
                    />

                    <Input
                        label="Description"
                        value={description}
                        onChange={setDescription}
                        placeholder="Enter description"
                    />

                    <Input
                        label="Price"
                        type="number"
                        value={price}
                        onChange={setPrice}
                        placeholder="0.00"
                        min="0"
                        step="0.01"
                        required
                    />

                    <Input
                        label="Stock"
                        type="number"
                        value={stock}
                        onChange={setStock}
                        placeholder="0"
                        min="0"
                        required
                    />

                </div>

                <div className="mt-6 flex justify-end gap-3 border-t border-slate-100 dark:border-slate-800 pt-6">

                    {editingProduct && (
                        <Button
                            type="button"
                            variant="secondary"
                            onClick={onCancel}
                        >
                            Cancel
                        </Button>
                    )}

                    <Button
                        type="submit"
                        loading={saving}
                    >
                        {editingProduct ? (
                            <>
                                <Save size={17} />
                                Update Product
                            </>
                        ) : (
                            <>
                                <Plus size={17} />
                                Add Product
                            </>
                        )}
                    </Button>

                </div>
            </form>
        </Card>
    );
};

export default ProductForm;