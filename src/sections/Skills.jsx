import Wrapper from "../components/Wrapper";
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
const SKILLS_DATA = {
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
};

const Skills = () => {


    return (
        <section id="skills" className="py-20 text-center xl:text-left relative">
            <Wrapper>
                <div className="flex flex-col justify-center items-center gap-y-4 mb-10 md:mb-10">
                    <h2 className="text-4xl xsm:text-5xl md:text-6xl font-semibold">
                        Skills
                    </h2>

                    <p className="max-w-full md:max-w-200 font-light leading-normal text-light-gray text-center text-base xl:text-lg">
                        Building interactive and responsive web experiences using modern frontend technologies.
                    </p>
                </div>
                {/* content */}
                <div className="mt-16">
                    <div className="flex flex-col gap-8">
                        {SKILLS_DATA.info.map((group, gIdx) => (
                            <div key={gIdx} className="text-center lg:text-left">
                                <h4 className="font-semibold mb-4">{group.title}</h4>
                                <div className="flex flex-wrap gap-x-4 gap-y-3 justify-center lg:justify-start">
                                    {group.icons.map((item, idx) => (
                                        <div key={idx} className="flex items-center gap-2 rounded-lg px-4 py-[10px] backdrop-blur-xl contrast-[0.9]">
                                            <span className="text-xl md:text-2xl text-primary">{item.icon}</span>
                                            <span className="text-sm md:text-base">{item.name}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </Wrapper>
        </section>
    )
};

export default Skills;
