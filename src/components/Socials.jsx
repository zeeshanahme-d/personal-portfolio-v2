import Link from "next/link";
import { RiFacebookFill, RiTwitterFill, RiLinkedinFill, RiGithubFill, RiInstagramFill } from 'react-icons/ri'

const Socials = () => {
    return (
        <div className="social-container">
            <Link href="https://www.linkedin.com/in/zeeshanahme-d" target="_blank">
                <RiLinkedinFill />
            </Link>
            <Link href="https://www.github.com/zeeshanahme-d" target="_blank">
                <RiGithubFill />
            </Link>
            <Link href="https://www.facebook.com/profile.php?id=100043989196385" target="_blank">
                <RiFacebookFill />
            </Link>
            <Link href="">
                <RiInstagramFill />
            </Link>
            <Link href="">
                <RiTwitterFill />
            </Link>
        </div>
    )
};

export default Socials;
