const Projects = () => {

    return (
        <div id="projects" className="py-20">

            <div className="container mx-auto">
                {/* text */}
                <div className="flex flex-col justify-center items-center gap-y-4 mb-20">
                    <h2 className="text-4xl xsm:text-5xl md:text-6xl font-semibold">
                        Projects
                    </h2>

                    <p className="max-w-full md:max-w-[50rem] font-light leading-[1.5] text-white/60 text-center text-base xl:text-lg">
                        Here you will find some of the personal and clients projects that I created with each project containing its own case study.
                    </p>
                </div>

                <div className="w-full">
                    <div className="flex justify-between gap-x-4 mb-5 items-stretch">
                        <div className="rounded-xl h-full flex flex-col items-center overflow-hidden backdrop-blur-xl contrast-[0.9] p-5">
                            <div className="w-full h-auto flex items-center justify-center rounded-lg">
                                <img src="/images/thumb1.webp" alt="Movie Discovery Platform" className="w-full rounded-xl object-contain" loading="lazy" width="400" height="300" />
                            </div>
                            {/* body */}
                            <div className="text-start mt-5">
                                <h4 className="text-xl font-semibold">Movie Discovery Platform</h4>
                                <p className="mt-2 text-base opacity-80">
                                    Dopefolio is a successful Open-Source project that I created which have been featured on some of the biggest tech sites like CSS-Tricks, Hostinger,</p>
                            </div>
                        </div>
                        <div className="rounded-xl h-full flex flex-col items-center overflow-hidden backdrop-blur-xl contrast-[0.9] p-5">
                            <div className="w-full h-auto flex items-center justify-center rounded-lg">
                                <img src="/images/thumb6.png" alt="Movie Discovery Platform" className="w-full rounded-lg object-contain" loading="lazy" width="400" height="300" />
                            </div>
                            {/* body */}
                            <div className="text-start mt-5">
                                <h4 className="text-xl font-semibold">Movie Discovery Platform</h4>
                                <p className="mt-2 text-base opacity-80">
                                    Dopefolio is a successful Open-Source project that I created which have been featured on some of the biggest tech sites like CSS-Tricks, Hostinger,
                                </p>
                            </div>
                        </div>
                        <div className="rounded-xl h-full flex flex-col items-center overflow-hidden backdrop-blur-xl contrast-[0.9] p-5">
                            <div className="w-full h-auto flex items-center justify-center rounded-lg">
                                <img src="/images/thumb8.png" alt="Movie Discovery Platform" className="w-full rounded-lg object-contain" loading="lazy" width="400" height="300" />
                            </div>
                            {/* body */}
                            <div className="text-start mt-5">
                                <h4 className="text-xl font-semibold">Movie Discovery Platform</h4>
                                <p className="mt-2 text-base opacity-80">
                                    Dopefolio is a successful Open-Source project that I created which have been featured on some of the biggest tech sites like CSS-Tricks, Hostinger,
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-between gap-x-4 items-stretch">
                        <div className="rounded-xl h-full flex flex-col items-center overflow-hidden backdrop-blur-xl contrast-[0.9] p-5">
                            <div className="w-full h-auto flex items-center justify-center rounded-lg">
                                <img src="/images/thumb1.webp" alt="Movie Discovery Platform" className="w-full rounded-lg object-contain" />
                            </div>
                            {/* body */}
                            <div className="text-start mt-5">
                                <h4 className="text-xl font-semibold">Movie Discovery Platform</h4>
                                <p className="mt-2 text-base opacity-80">
                                    Dopefolio is a successful Open-Source project that I created which have been featured on some of the biggest tech sites like CSS-Tricks, Hostinger,
                                </p>
                            </div>
                        </div>
                        <div className="rounded-xl h-full flex flex-col items-center overflow-hidden backdrop-blur-xl contrast-[0.9] p-5">
                            <div className="w-full h-auto flex items-center justify-center rounded-lg">
                                <img src="/images/thumb2.webp" alt="Movie Discovery Platform" className="w-full rounded-lg object-contain" loading="lazy" width="400" height="300" />
                            </div>
                            {/* body */}
                            <div className="text-start mt-5">
                                <h4 className="text-xl font-semibold">Movie Discovery Platform</h4>
                                <p className="mt-2 text-base opacity-80 ">
                                    Dopefolio is a successful Open-Source project that I created which have been featured on some of the biggest tech sites like CSS-Tricks, Hostinger,
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Projects;
