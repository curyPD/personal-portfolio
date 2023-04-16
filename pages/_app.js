import "@/styles/globals.css";
import { Rubik } from "@next/font/google";

const rubik = Rubik({
    subsets: ["latin", "cyrillic"],
    variable: "--font-rubik",
    // display: "swap",
});

export default function App({ Component, pageProps }) {
    return (
        <>
            <div className={`${rubik.variable} font-sans`}>
                <Component {...pageProps} />
            </div>
        </>
    );
}
