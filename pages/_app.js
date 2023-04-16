import "@/styles/globals.css";
import { Rubik } from "@next/font/google";
import LanguageProvider from "@/context/LanguageProvider";

const rubik = Rubik({
    subsets: ["latin", "cyrillic"],
    variable: "--font-rubik",
    display: "swap",
});

export default function App({ Component, pageProps }) {
    return (
        <LanguageProvider>
            <div className={`${rubik.variable} font-sans`}>
                <Component {...pageProps} />
            </div>
        </LanguageProvider>
    );
}
