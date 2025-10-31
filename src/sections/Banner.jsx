//icons
import { HiArrowRight } from "react-icons/hi2";
import BannerSideillustration from "../assets/banner-image.svg?react"

//components
import { Link } from "react-router-dom";

const Banner = () => {

  return (
    <div id="home" className="pt-72 pb-32">
      <div className="flex flex-row justify-between container mx-auto">
        <div className="flex flex-col justify-center items-center w-full flex-1 mt-10">
          <h1 className="mb-6 text-[10vw] xsm:text-5xl md:text-6xl font-semibold leading-tight xsm:leading-[1.3] text-center">
            Transforming Ideas
            Into <span className="text-primary">Digital Reality</span>
          </h1>

          {/* subtitle */}
          <p className="max-w-full md:max-w-200 font-light leading-normal text-white/60 text-center text-base xl:text-lg">
            Hi, I’m Zeeshan Ahmed, a Front-End Web Developer focused on creating responsive, high performance web applications that seamlessly integrate with backend technologies
          </p>

          {/* button */}
          <div className="flex justify-center mt-12 md:mt-10 md:justify-start">
            <div className="buttonContainer">
              <Link to={'/#work'} className="link">
                <img
                  src={'/images/rounded-text.png'}
                  width={140}
                  height={140}
                  alt=""
                  className="image"
                />
                <HiArrowRight className="arrow-icon" />
              </Link>
            </div>
          </div>
        </div>
        {/* <div className='flex items-center justify-center w-full flex-1'>
          <BannerSideillustration />
        </div> */}
      </div>
    </div >

  )
}

export default Banner