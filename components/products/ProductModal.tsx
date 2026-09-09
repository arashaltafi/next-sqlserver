import { AlertTriangle, X } from "lucide-react";

type Props = {
    title: string;
    description: string;
    confirmText: string;
    onConfirm: () => void;
    onCancel: () => void;
};

const ProductModal = ({
    title,
    description,
    confirmText,
    onConfirm,
    onCancel,
}: Props) => {
    return (
        <div
            className="
                fixed
                inset-0
                z-50
                flex
                items-center
                justify-center
                bg-slate-950/50
                p-4
                backdrop-blur-sm
            "
        >
            <div
                className="
                    w-full
                    max-w-md
                    overflow-hidden
                    rounded-2xl
                    bg-white
                    shadow-2xl

                    dark:border
                    dark:border-slate-800
                    dark:bg-slate-900
                "
            >
                <div className="p-6">

                    <div className="flex items-start gap-4">

                        <div className="rounded-xl bg-red-50 p-3 text-red-600">
                            <AlertTriangle size={22} />
                        </div>

                        <div className="flex-1">

                            <div className="flex items-center justify-between gap-4">

                                <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
                                    {title}
                                </h3>

                                <button
                                    onClick={onCancel}
                                    className="rounded-lg p-1.5 text-slate-400 hover:bg-slate-100"
                                >
                                    <X size={18} />
                                </button>

                            </div>

                            <p className="mt-2 text-sm leading-6 text-slate-500 dark:text-slate-400">
                                {description}
                            </p>

                        </div>

                    </div>

                </div>

                <div
                    className="
                        flex
                        justify-end
                        gap-3
                        border-t
                        border-slate-100
                        bg-slate-50
                        px-6
                        py-4

                        dark:border-slate-800
                        dark:bg-slate-950
                    "
                >

                    <button
                        onClick={onCancel}
                        className="rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-slate-700 hover:bg-slate-50"
                    >
                        Cancel
                    </button>

                    <button
                        onClick={onConfirm}
                        className="rounded-xl bg-red-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-red-700"
                    >
                        {confirmText}
                    </button>

                </div>

            </div>
        </div>
    );
};

export default ProductModal;