export default function Custom500() {
    return (
        <div className="absolute left-0 top-0 h-screen w-screen bg-gray-50">
            <h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center text-lg font-bold text-gray-900 md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl">
                500 - Server-side error occurred
            </h1>
        </div>
    );
}
