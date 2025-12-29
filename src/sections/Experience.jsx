import Wrapper from "../components/Wrapper";

const EXPERIANCE_DATA = {
    title: "experience",
    info: [
        {
            company: "XtecSoft",
            role: "Front-End Developer (React / Next.js / JavaScript / TypeScript)",
            duration: "Jan 2024 – Mar 2025",
            logo: <img src="/images/xtecsoft-logo.png" alt="Xtecsoft" />,
            summary:
                "Worked as a Front-End Developer on ioMoVo, an enterprise-level digital asset management platform showcased at IBC Show 2024. Contributed to building scalable, high-performance web applications with modern React and TypeScript architecture.",
            highlights: [
                "Developed and optimized the ioPortal module with role-based access, file management, and live video streaming features.",
                "Migrated the legacy codebase from JavaScript to TypeScript and upgraded React (16→18) and MUI (4→5) for improved stability.",
                "Implemented localization and RTL support for global accessibility, including Arabic interface support.",
                "Enhanced app performance through lazy loading, dynamic imports, and code splitting, reducing load times by 30%.",
                "Collaborated with UI/UX designers and backend engineers in an Agile environment to deliver enterprise-grade solutions.",
            ],
        },
        {
            company: "IR Solutions",
            role: "Front-End Developer (React / Next.js / JavaScript / TypeScript)",
            duration: "June 2025 – Present",
            logo: <img src="images/irlogowhite.png" alt="IR Solutions" className="w-14" />,
            summary:
                "Working as a Front-End Developer at IR Solutions, building modern, responsive web applications using Next.js and TypeScript. Completed multiple client projects focused on interactivity, scalability, and multilingual functionality.",
            highlights: [
                "Delivered 4 client projects in 5 months using Next.js, Tailwind CSS, and REST API integrations.",
                "Built dynamic dashboards and user interfaces with authentication and role-based access control.",
                "Implemented real-time functionality using WebSockets for live user interaction and gameplay features.",
                "Developed multilingual and RTL-supported front-end interfaces for international clients.",
                "Collaborated with cross-functional teams to ensure pixel-perfect UI/UX and optimized performance.",
            ],
        },
    ],
};

const Experience = () => {

    return (
        <section id="experience" className="py-20 text-center xl:text-left relative">

            <Wrapper>
                <div className="flex flex-col justify-center items-center gap-y-4 mb-10 md:mb-10">
                    <h2 className="text-4xl xsm:text-5xl md:text-6xl font-semibold">
                        Experience
                    </h2>

                    <p className="max-w-full md:max-w-200 font-light leading-normal text-light-gray text-center text-base xl:text-lg">
                        Built and optimized web applications while collaborating with cross-functional teams in various companies.
                    </p>
                </div>
                {/* content */}
                <div className="mt-16">
                    <div className="flex justify-between flex-col md:flex-row gap-5 items-stretch">
                        {EXPERIANCE_DATA?.info?.map((item, idx) => (
                            <div key={idx}>
                                <div className="rounded-lg h-full space-y-5 flex flex-col items-center overflow-hidden backdrop-blur-xl contrast-[0.9] p-4 md:p-8">
                                    {/* header band */}
                                    <div className="flex-centered px-6">
                                        <p className="text-base md:text-lg font-semibold">{item.company}</p>
                                    </div>

                                    <div className="w-24 h-24 shadow-2xl bg-white/5 p-2 rounded-full backdrop-blur-xl flex items-center justify-center">
                                        {item.logo}
                                    </div>

                                    {/* body */}
                                    <div className="text-center">
                                        <h4 className="text-lg md:text-xl font-semibold">{item.role}</h4>
                                        <p className="mt-2 text-sm opacity-80">{item.duration}</p>
                                        {item.summary && (
                                            <p className="mt-5 text-sm opacity-80 w-full md:max-w-4xl mx-auto">{item.summary}</p>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </Wrapper>
        </section>
    )
};

export default Experience;
