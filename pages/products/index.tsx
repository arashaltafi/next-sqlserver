import ProductPage from "@/components/products/ProductPage";
import Head from "next/head";

const ProductsPage = () => {
    return (
        <>
            <Head>
                <title>Products | Product Management</title>

                <meta
                    name="description"
                    content="Manage your products and inventory."
                />
            </Head>

            <ProductPage />
        </>
    );
}

export default ProductsPage;