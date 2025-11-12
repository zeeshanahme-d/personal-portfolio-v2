import AboutImage from "../assets/about-image.svg?react";

const About = () => {

    return (
        <div id="about" className="pt-20 pb-12 md:pt-0 md:pb-20 text-center xl:text-left">
            <div className="container mx-auto ">

                <div className="flex flex-col justify-center items-center gap-y-4 mb-10 lg:mb-20">
                    <h2 className="text-4xl xsm:text-5xl md:text-6xl font-semibold">
                        About Me
                    </h2>

                    <p className="max-w-full md:max-w-200 font-light leading-normal text-light-gray text-center text-base xl:text-lg">
                        Here you will find more information about me, what I do, and my current skills mostly in terms of programming and technology.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-10 gap-y-10 items-start">
                    {/* text */}
                    <div className="flex flex-col justify-center items-center gap-y-4">
                        <h2 className="text-2xl  md:text-3xl font-semibold">
                            Get to <span className="text-primary">know</span> me!
                        </h2>

                        <p className="max-w-full lg:max-w-160 font-light leading-normal text-light-gray text-center lg:text-left text-base xl:text-lg">
                            Dedicated Front-End Developer with <strong className="font-semibold">2 years of professional experience</strong> building responsive and high quality web applications using React, Next.js, javascript, and TypeScript. Skilled in creating clean, user friendly interfaces, improving performance, and delivering smooth, accessible experiences.
                        </p>
                        <p className="max-w-full lg:max-w-160 font-light leading-normal text-light-gray text-center lg:text-left text-base xl:text-lg">
                            I was part of the team behind <strong className="font-semibold">ioMoVo</strong>, an award winning digital asset management platform showcased at <strong className="font-semibold">IBC Show 2024</strong>, recognized for its innovation and performance.
                        </p>
                        <p className="max-w-full lg:max-w-160 font-light leading-normal text-light-gray text-center lg:text-left text-base xl:text-lg">
                            I’m passionate about learning new technologies, solving real world problems, and creating products that make a difference.
                        </p>
                        <p className="max-w-full lg:max-w-160 font-light leading-normal text-light-gray text-center lg:text-left text-base xl:text-lg">
                            I’m open to job opportunities where I can contribute, learn, and grow.
                            If you have a role that matches my skills and experience, don’t hesitate to reach out!
                        </p>

                        {/* counter */}
                        <div className="flex-1 xl:gap-x-6 hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8">
                            {/* experience */}
                            <div className="relative flex-1 after:w-px after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                                <p className="text-2xl xl:text-4xl font-extrabold text-primary mb-2">
                                    2+
                                </p>
                                <p className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px] text-light-gray">Years of experience</p>
                            </div>
                            {/* project */}
                            <div className="relative flex-1 after:w-px after:h-full ">
                                <p className="text-2xl xl:text-4xl font-extrabold text-primary mb-2">
                                    25+
                                </p>
                                <p className="text-xs w-full uppercase tracking-[1px] leading-[1.4] max-w-[100px] text-light-gray">Finished projects</p>
                            </div>

                        </div>
                    </div>

                    {/* animation */}
                    <div className="h-full flex flex-col items-center justify-center">
                        <AboutImage className="w-full md:w-3/4 lg:w-full animated" />
                    </div>
                </div>
            </div>

        </div>
    )
};

export default About;
