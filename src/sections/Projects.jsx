const Projects = () => {

    return (
        <div id="projects" className="py-12 md:py-20">

            <div className="container mx-auto">
                {/* text */}
                <div className="flex flex-col justify-center items-center gap-y-4 mb-10 md:mb-20">
                    <h2 className="text-4xl xsm:text-5xl md:text-6xl font-semibold">
                        Projects
                    </h2>

                    <p className="max-w-full md:max-w-200 font-light leading-normal text-light-gray text-center text-base xl:text-lg">
                        Here you will find some of the personal and clients projects that I created with each project containing its own case study.
                    </p>
                </div>

                <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-2 gap-y-5">
                    {/* div1 */}
                    <div className="rounded-md h-full flex flex-col items-center overflow-hidden backdrop-blur-xl contrast-[0.9] p-2 md:p-4 lg:p-5">
                        <div className="w-full h-auto flex items-center justify-center rounded-md">
                            <img src="/images/thumb1.webp" alt="Movie Discovery Platform" className="w-full rounded-md object-contain" loading="lazy" width="400" height="300" />
                        </div>
                        {/* body */}
                        <div className="text-start mt-4">
                            <h4 className="text-lg md:text-xl font-semibold">Movie Discovery Platform</h4>
                            <p className="mt-1 md:mt-2 text-sm md:text-base opacity-80">
                                Dopefolio is a successful Open-Source project that I created which have been featured on some of the biggest tech sites like CSS-Tricks, Hostinger,
                            </p>
                        </div>
                    </div>

                    {/* div2 */}
                    <div className="rounded-md h-full flex flex-col items-center overflow-hidden backdrop-blur-xl contrast-[0.9] p-2 md:p-4 lg:p-5">
                        <div className="w-full h-auto flex items-center justify-center rounded-md">
                            <img src="/images/thumb6.png" alt="Movie Discovery Platform" className="w-full rounded-md object-contain" loading="lazy" width="400" height="300" />
                        </div>
                        {/* body */}
                        <div className="text-start mt-4">
                            <h4 className="text-lg md:text-xl font-semibold">Movie Discovery Platform</h4>
                            <p className="mt-1 md:mt-2 text-sm md:text-base opacity-80">
                                Dopefolio is a successful Open-Source project that I created which have been featured on some of the biggest tech sites like CSS-Tricks, Hostinger,
                            </p>
                        </div>
                    </div>

                    {/* div3 */}
                    <div className="rounded-md h-full flex flex-col items-center overflow-hidden backdrop-blur-xl contrast-[0.9] p-2 md:p-4 lg:p-5">
                        <div className="w-full h-auto flex items-center justify-center rounded-md">
                            <img src="/images/thumb8.png" alt="Movie Discovery Platform" className="w-full rounded-md object-contain" loading="lazy" width="400" height="300" />
                        </div>
                        {/* body */}
                        <div className="text-start mt-4">
                            <h4 className="text-lg md:text-xl font-semibold">Movie Discovery Platform</h4>
                            <p className="mt-1 md:mt-2 text-sm md:text-base opacity-80">
                                Dopefolio is a successful Open-Source project that I created which have been featured on some of the biggest tech sites like CSS-Tricks, Hostinger,
                            </p>
                        </div>
                    </div>

                    {/* div4 */}
                    <div className="rounded-md h-full flex flex-col items-center overflow-hidden backdrop-blur-xl contrast-[0.9] p-2 md:p-4 lg:p-5">
                        <div className="w-full h-auto flex items-center justify-center rounded-md">
                            <img src="/images/thumb1.webp" alt="Movie Discovery Platform" className="w-full rounded-md object-contain" />
                        </div>
                        {/* body */}
                        <div className="text-start mt-4">
                            <h4 className="text-lg md:text-xl font-semibold">Movie Discovery Platform</h4>
                            <p className="mt-1 md:mt-2 text-sm md:text-base opacity-80">
                                Dopefolio is a successful Open-Source project that I created which have been featured on some of the biggest tech sites like CSS-Tricks, Hostinger,
                            </p>
                        </div>
                    </div>

                    {/* div5 */}
                    <div className="rounded-md h-full flex flex-col items-center overflow-hidden backdrop-blur-xl contrast-[0.9] p-2 md:p-4 lg:p-5">
                        <div className="w-full h-auto flex items-center justify-center rounded-md">
                            <img src="/images/thumb2.webp" alt="Movie Discovery Platform" className="w-full rounded-md object-contain" loading="lazy" width="400" height="300" />
                        </div>
                        {/* body */}
                        <div className="text-start mt-4">
                            <h4 className="text-lg md:text-xl font-semibold">Movie Discovery Platform</h4>
                            <p className="mt-1 md:mt-2 text-sm md:text-base opacity-80 ">
                                Dopefolio is a successful Open-Source project that I created which have been featured on some of the biggest tech sites like CSS-Tricks, Hostinger,
                            </p>
                        </div>
                    </div>

                    {/* div6 */}
                    <div className="rounded-md h-full flex flex-col items-center overflow-hidden backdrop-blur-xl contrast-[0.9] p-2 md:p-4 lg:p-5">
                        <div className="w-full h-auto flex items-center justify-center rounded-md">
                            <img src="/images/thumb2.webp" alt="Movie Discovery Platform" className="w-full rounded-md object-contain" loading="lazy" width="400" height="300" />
                        </div>
                        {/* body */}
                        <div className="text-start mt-4">
                            <h4 className="text-lg md:text-xl font-semibold">Movie Discovery Platform</h4>
                            <p className="mt-1 md:mt-2 text-sm md:text-base opacity-80 ">
                                Dopefolio is a successful Open-Source project that I created which have been featured on some of the biggest tech sites like CSS-Tricks, Hostinger,
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Projects;
