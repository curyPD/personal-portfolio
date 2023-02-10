export default function GradientButton({ curColor }) {
    const buttonStyles = {
        boxShadow: `0 0 40px ${
            curColor === "purple"
                ? "#a855f756"
                : curColor === "red"
                ? "#f9731656"
                : "#06b6d456"
        }`,
        backgroundImage: `linear-gradient(to right bottom, ${
            curColor === "purple"
                ? "#6366f1, #a855f7, #d946ef"
                : curColor === "red"
                ? "#f43f5e, #f97316, #eab308"
                : "#14b8a6, #06b6d4, #3b82f6"
        })`,
    };
    return (
        <div className="group relative lg:flex-1">
            <span
                style={buttonStyles}
                className="absolute top-0 left-0 -z-10 h-full w-full rounded"
            >
                &nbsp;
            </span>
            <a
                href="#"
                className="flex w-full items-center justify-center rounded border-2 border-transparent bg-gray-50 bg-clip-padding py-2.5 text-base font-medium text-gray-900 shadow-md transition-colors duration-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-900 focus-visible:ring-offset-2 group-hover:bg-transparent group-hover:text-white xl:py-3 xl:text-xl 2xl:py-3.5 2xl:text-2xl"
            >
                <span className="">Resume</span>
            </a>
        </div>
    );
}
