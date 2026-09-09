import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                {/* Browser Title */}
                <title>Product Management</title>

                {/* SEO */}
                <meta
                    name="description"
                    content="Manage your products, inventory, prices and stock."
                />

                <meta
                    name="keywords"
                    content="products, inventory, stock, management"
                />

                <meta name="author" content="Arash Altafi" />

                {/* Responsive */}
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />

                {/* Browser Theme Color */}
                <meta
                    name="theme-color"
                    content="#0f172a"
                />

                {/* Favicon */}
                <link
                    rel="icon"
                    href="/logo.png"
                />

                <link
                    rel="apple-touch-icon"
                    href="/logo.png"
                />

                {/* Open Graph */}
                <meta property="og:title" content="Product Management" />

                <meta
                    property="og:description"
                    content="Manage your products and inventory."
                />

                <meta
                    property="og:type"
                    content="website"
                />

                <meta
                    property="og:image"
                    content="/og-image.png"
                />
            </Head>

            <Component {...pageProps} />
        </>
    );
}