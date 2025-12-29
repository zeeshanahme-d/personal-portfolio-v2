import { Link } from 'react-router-dom';
import { RiFacebookFill, RiLinkedinFill, RiGithubFill, RiTwitterXFill } from 'react-icons/ri';


const SOCIALS_LINKS = [
    { name: "Github", url: "https://www.github.com/zeeshanahme-d", icon: <RiGithubFill /> },
    { name: "Linkedin", url: "https://www.linkedin.com/in/zeeshanahme-d", icon: <RiLinkedinFill /> },
    { name: "Facebook", url: "https://www.facebook.com/profile.php?id=100043989196385", icon: <RiFacebookFill /> },
    { name: "X", url: "https://x.com/Zeeshanahme_d", icon: <RiTwitterXFill /> }
]

const Socials = () => {
    return (
        <div className="flex items-center gap-2">
            {SOCIALS_LINKS.map((link, index) => {
                return (
                    <div key={index} className='p-2 rounded-lg text-2xl! hover:bg-primary transition-all duration-300'>
                        <Link to={link.url} target="_blank" rel="noopener noreferrer">
                            {link.icon}
                        </Link>
                    </div>
                )
            })}
        </div>
    )
};

export default Socials;
