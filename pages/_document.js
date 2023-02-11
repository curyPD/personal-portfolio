import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
    return (
        <Html lang="en">
            <Head />
            <body className="bg-gray-50 scrollbar scrollbar-track-gray-100 scrollbar-thumb-gray-300 selection:bg-purple-200 selection:text-purple-800 hover:scrollbar-thumb-gray-400/60">
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
