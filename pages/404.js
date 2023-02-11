import Link from "next/link";

export default function Custom404() {
    return (
        <div className="absolute left-0 top-0 h-screen w-screen bg-gray-50">
            <div className="absolute top-1/2 left-1/2 w-5/6 max-w-2xl -translate-x-1/2 -translate-y-1/2 text-center">
                <h1 className="mb-4 text-lg font-bold text-gray-900 md:mb-6 md:text-xl lg:mb-8 lg:text-2xl xl:mb-10 xl:text-3xl 2xl:mb-11 2xl:text-4xl">
                    404 - Page Not Found
                </h1>
                <p className="mb-12 text-sm font-medium text-gray-600 md:mb-14 md:text-base lg:mb-16 lg:text-lg xl:text-xl">
                    Hey, how did you end up here? This website only has one
                    page. Come on, let&apos;s go back home.
                </p>
                <div className="flex w-full flex-col sm:mx-auto sm:w-64">
                    <Link
                        href="/"
                        className="rounded border-2 border-gray-900 bg-gray-900 py-2.5 text-base font-medium text-white shadow-md transition-colors duration-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-900 focus-visible:ring-offset-2 hover:bg-transparent hover:text-gray-900 lg:flex-1 xl:py-3 xl:text-xl 2xl:py-3.5 2xl:text-2xl"
                    >
                        Go back home
                    </Link>
                </div>
            </div>
        </div>
    );
}
