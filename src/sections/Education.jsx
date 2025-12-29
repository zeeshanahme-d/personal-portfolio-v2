import Wrapper from "../components/Wrapper";

//  data
const EDUCATION_DATA =
{
    title: "education",
    info: [
        {
            university: "Govt. Dehli Science College",
            degree: "Intermediate (HSC) in Computer Science",
            duration: "June 2021 – June 2023",
            logo: "/images/globe.svg",
            highlights: [
                "Completed coursework focused on programming fundamentals, computer systems, and mathematics.",
                "Built a strong foundation in problem-solving, algorithms, and front-end development concepts.",
            ],
        },
        {
            university: "Saylani Mass IT Training (SMIT)",
            degree: "MERN Stack Web and App Development Certification",
            duration: "Dec 2022 – Dec 2023",
            logo: "/images/globe.svg",
            highlights: [
                "Completed a professional MERN Stack training program focused on React, Node.js, and modern web technologies.",
                "Developed multiple full-stack projects using JavaScript, TypeScript, and RESTful APIs.",
            ],
        },
    ],
};;

const Education = () => {

    return (
        <section id="education" className="py-20 text-center xl:text-left relative">

            <Wrapper>
                <div className="flex flex-col justify-center items-center gap-y-4 mb-10 md:mb-10">
                    <h2 className="text-4xl xsm:text-5xl md:text-6xl font-semibold">
                        Education
                    </h2>

                    <p className="max-w-full md:max-w-200 font-light leading-normal text-light-gray text-center text-base xl:text-lg">
                        Academic background and professional certifications that strengthen my web development expertise.
                    </p>
                </div>

                {/* content */}
                <div className="mt-16">

                    <div className="space-y-5">
                        {EDUCATION_DATA?.info?.map((item, idx) => (
                            <div key={idx} className="flex flex-col gap-4">
                                <div className="flex md:flex-row flex-col gap-4 rounded-lg p-4 md:p-8 backdrop-blur-xl contrast-[0.9]">
                                    <div className="w-full md:w-20 h-16 md:h-20 shrink-0 rounded-full overflow-hidden flex items-center justify-center bg-white/5">
                                        <img src={item.logo} alt="logo" className="w-8 h-8 object-contain" loading="lazy" />
                                    </div>
                                    <div className="flex flex-col gap-y-5">
                                        <div className="flex-1 text-start">
                                            <p className="text-base font-semibold">{item.university}</p>
                                            <p className="text-sm mt-1">{item.degree}</p>
                                            <p className="text-xs opacity-70 mt-1">{item.duration}</p>
                                        </div>
                                        <div className="flex-1 text-start">
                                            <ul className="ml-4 list-disc space-y-1 text-sm opacity-80">
                                                {item.highlights.map((h, i) => (
                                                    <li key={i}>{h}</li>
                                                ))}
                                            </ul>
                                        </div>
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

export default Education;
