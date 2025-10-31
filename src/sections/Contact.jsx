import { BsArrowRight } from "react-icons/bs";
import AboutImage from "../assets/about-image.svg?react";


const Contact = () => {

    return (
        <div id="contact" className="py-20">
            <div className="container mx-auto ">
                <div className="flex flex-col justify-center items-center gap-y-4 mb-20">
                    <h2 className="text-4xl xsm:text-5xl md:text-6xl font-semibold">
                        Contact
                    </h2>

                    <p className="max-w-full md:max-w-200 font-light leading-normal text-white/60 text-center text-base xl:text-lg">
                        Feel free to Contact me by submitting the form below and I will get back to you as soon as possible.
                    </p>
                </div>

                <div className="grid grid-cols-1 xl:grid-cols-2 gap-x-10 gap-y-10 items-start">
                    {/* text */}
                    <div className="flex flex-col justify-center gap-y-4 mt-10">
                        <form className="flex-1 flex flex-col gap-6 w-full mx-auto">
                            {/* group */}
                            <div className="flex gap-6 w-full">
                                <input type="text" placeholder="Name" className="h-12 flex-1 rounded-xl px-6 capitalize bg-transparent border border-border-gray outline-none focus:border-primary hover:border-primary transition-all duration-300" />
                                <input type="email" placeholder="Email" className="h-12 flex-1 rounded-xl px-6 capitalize bg-transparent border border-border-gray outline-none focus:border-primary hover:border-primary transition-all duration-300 hover:border-accen" />
                            </div>

                            <input type="text" placeholder="Subject" className="h-12 rounded-xl px-6 capitalize bg-transparent border border-border-gray outline-none transition-all duration-300 hover:border-accen focus:border-primary hover:border-primary" />
                            <textarea type="text" placeholder="Message" className="w-full h-[215px] p-6 capitalize rounded-lg resize-none bg-transparent outline-none focus:border-primary border border-border-gray placeholder:text-white/30 placeholder:font-light transition-all duration-300 hover:border-primary"></textarea>

                        </form>
                    </div>

                    {/* animation */}
                    <div className="flex flex-col items-center xl:items-end">
                        <AboutImage />
                    </div>
                </div>

            </div>

        </div>
    )
};

export default Contact;
