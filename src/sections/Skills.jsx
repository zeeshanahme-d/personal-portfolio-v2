
import { useState } from "react";
import TabSwitcher from "@/components/TabSwitcher";

// icons
import {
    FaHtml5,
    FaCss3,
    FaJs,
    FaReact,
    FaBootstrap,
    FaNodeJs,
    FaGitAlt,
    FaGithub,
    FaAws
} from "react-icons/fa";

import {
    SiNextdotjs,
    SiFirebase,
    SiTailwindcss,
    SiMongodb,
    SiExpress,
    SiAntdesign,
    SiRedux,
    SiShadcnui,
    SiFigma,
    SiVercel,
    SiNetlify,
    SiNestjs
} from "react-icons/si";
import MaterialUiIcon from "../assets/material-ui-icon.svg?react";
import TypescriptIcon from "../assets/typescript-icon.svg?react";

//  data
const aboutData = [
    {
        title: "skills",
        info: [
            {
                title: "Frontend Development",
                icons: [
                    { name: "Html", icon: < FaHtml5 /> },
                    { name: "Css", icon: < FaCss3 /> },
                    { name: "Javascript", icon: < FaJs /> },
                    { name: "Typescript", icon: < TypescriptIcon /> },
                    { name: "React", icon: < FaReact /> },
                    { name: "Next.js", icon: < SiNextdotjs /> },
                    { name: "Redux / Toolkit", icon: < SiRedux /> },
                    { name: "Zustand", icon: < FaReact /> },
                    { name: "Tailwind Css", icon: < SiTailwindcss /> },
                    { name: "Bootstrap", icon: < FaBootstrap /> },
                    { name: "Ant Design", icon: < SiAntdesign /> },
                    { name: "Material UI", icon: < MaterialUiIcon /> },
                    { name: "Shadcn UI", icon: < SiShadcnui /> },
                ],
            },
            {
                title: "Backend Development",
                icons: [
                    { name: "Node.js", icon: < FaNodeJs /> },
                    { name: "Express.js", icon: < SiExpress /> },
                    { name: "NestJS", icon: < SiNestjs /> },
                    { name: "Firebase", icon: < SiFirebase /> },
                    { name: "Mongodb", icon: < SiMongodb /> },
                ],
            },
            {
                title: "Other Tools",
                icons: [
                    { name: "Git", icon: < FaGitAlt /> },
                    { name: "Github", icon: < FaGithub /> },
                    { name: "AWS", icon: < FaAws /> },
                    { name: "Vercel", icon: < SiVercel /> },
                    { name: "Netlify", icon: < SiNetlify /> },
                    { name: "Figma", icon: < SiFigma /> },
                ],
            },
        ],
    },
    {
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
    },
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
    }

];

const tabs = [
    { label: "Skills", key: "skills", },
    { label: "Experience", key: "experience", className: "flex-2 md:flex-1" },
    { label: "Education", key: "education" },
];

const Skills = () => {
    const [selectedTab, setSelectedTab] = useState(0);

    const handleSelectTab = (idx) => {
        setSelectedTab(idx);
    };

    const currentKey = tabs[selectedTab].key;
    const currentSection = aboutData.find((section) => section.title === currentKey);

    return (
        <div id="skills" className="pb-20 text-center xl:text-left relative">

            <div className="container mx-auto gap-x-10 md:gap-y-10 gap-y-5 items-start">
                <div className="w-full">
                    <TabSwitcher selectedTab={selectedTab} onSelectTab={handleSelectTab} tabs={tabs} />
                </div>

                {/* content */}
                <div className="mt-16">
                    {currentKey === "skills" && (
                        <div className="flex flex-col gap-8">
                            {currentSection?.info?.map((group, gIdx) => (
                                <div key={gIdx} className="text-center lg:text-left">
                                    <h4 className="font-semibold mb-4">{group.title}</h4>
                                    <div className="flex flex-wrap gap-x-4 gap-y-3 justify-center lg:justify-start">
                                        {group.icons.map((item, idx) => (
                                            <div key={idx} className="flex items-center gap-2 rounded-md px-4 py-[10px] backdrop-blur-xl contrast-[0.9]">
                                                <span className="text-xl md:text-2xl text-primary">{item.icon}</span>
                                                <span className="text-sm md:text-base">{item.name}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}

                    {currentKey === "education" && (
                        <div className="space-y-5">
                            {currentSection?.info?.map((item, idx) => (
                                <div key={idx} className="flex flex-col gap-4">
                                    <div className="flex md:flex-row flex-col gap-4 rounded-md p-4 md:p-5 backdrop-blur-xl contrast-[0.9]">
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

                                    {idx !== (currentSection.info?.length || 0) - 1 && (
                                        <hr className="opacity-20" />
                                    )}
                                </div>
                            ))}
                        </div>
                    )}

                    {currentKey === "experience" && (
                        <div className="flex justify-between flex-col md:flex-row gap-5 items-stretch">
                            {currentSection?.info?.map((item, idx) => (
                                <div key={idx}>
                                    <div className="rounded-md h-full space-y-5 flex flex-col items-center overflow-hidden backdrop-blur-xl contrast-[0.9] p-4 md:p-5">
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
                    )}
                </div>
            </div>
        </div>
    )
};

export default Skills;
