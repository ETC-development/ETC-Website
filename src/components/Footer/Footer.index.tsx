import Image from "next/image";
import "./footer.css";

import { faEnvelope, faHeart, faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faDiscord,
    faFacebookSquare,
    faGithub,
    faInstagram,
    faLinkedinIn,
    faXTwitter
} from "@fortawesome/free-brands-svg-icons";
import { Database } from "@/lib/database.types";


interface IFooterProps {
    clubInfo: Database["public"]["Tables"]["club_info"]["Row"];
}


const Footer = ({ clubInfo }: IFooterProps) => {
    return (
        <footer id="Contacts" className="footer flex flex-col justify-center font-bold bg-cover relative">
            <div className="flex flex-row absolute bottom-4 invisible lg:visible justify-between w-full">
                <Image
                    src={"/circuit-footer-left.webp"}
                    alt="ETC logo"
                    width={271}
                    height={261}
                />
                <Image
                    src={"/circuit-footer-right.webp"}
                    alt="ETC logo"
                    width={271}
                    height={261}
                />
            </div>
            <div className="flex flex-col justify-center font-bold lg:flex-row lg:justify-evenly lg:gap-20 pt-60">
                <div className="flex flex-col items-center lg:order-3 lg:w-1/3">
                    <h1 className="text-white font-montserrat text-2xl mb-3">Contact us:</h1>
                    <ul className="flex flex-col flex-right">
                        <li className="w-full flex items-center mt-2 mb-2 lg:flex-row">
                            <div
                                className="w-10 h-10 rounded-full border-4 border-white flex flex-row justify-center items-center">
                                <FontAwesomeIcon icon={faPhone} size="lg" className="text-white" />
                            </div>
                            <a href={`tel:${clubInfo.phone}`}
                               className="text-white font-montserrat text-base pl-4"> {clubInfo.phone} </a>
                        </li>
                        <li className="flex items-center mt-2 mb-2 lg:flex-row">
                            <div
                                className="w-10 h-10 rounded-full border-4 border-white flex flex-row justify-center items-center">
                                <FontAwesomeIcon icon={faEnvelope} size="lg" className="text-white" />
                            </div>
                            <a href={`mailto:${clubInfo.email}`}
                               className="text-white font-montserrat text-base pl-4"> {clubInfo.email} </a>
                        </li>
                        <li className="w-full flex items-center mt-2 mb-2 lg:flex-row">
                            <div
                                className="w-10 h-10 rounded-full border-4 border-white flex flex-row justify-center items-center">
                                <FontAwesomeIcon icon={faLocationDot} size="lg" className="text-white" />
                            </div>
                            <a href={clubInfo.address_link}
                               className="text-white font-montserrat text-base pl-4"> {clubInfo.address_text} </a>
                        </li>
                    </ul>
                </div>
                <div
                    className="flex flex-col items-center lg:order-1 mt-10 mb-10 lg:mt-0 lg:mb-0 !text-bg-color lg:w-1/3">
                    <h1 className="text-white font-montserrat text-2xl mb-3">Follow us:</h1>
                    <div className="flex flex-row justify-between mt-4 mb-2">
                        <a className="social-media w-10 h-10 rounded-full border-4 border-white flex flex-row justify-center items-center bg-white mx-2"
                           href={clubInfo.insta_link} target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faInstagram} size="xl" className="text-bg-color" />
                        </a>
                        <a className={"social-media w-10 h-10 rounded-full border-4 border-white flex flex-row justify-center items-center bg-white mx-2"}
                           href={clubInfo.github_link} target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon size={"xl"} icon={faGithub} className="text-bg-color" />
                        </a>
                        <a className="social-media w-10 h-10 rounded-full border-4 border-white flex flex-row justify-center items-center bg-white mx-2"
                           href={clubInfo.discord_link} target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faDiscord} size="xl" className="text-bg-color" />
                        </a>
                    </div>
                    <div className="flex flex-row justify-between mt-2 mb-4">
                        <a className="social-media w-10 h-10 rounded-full border-4 border-white flex flex-row justify-center items-center bg-white mx-2"
                           href={clubInfo.linkedin_link} target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faLinkedinIn} size="xl" className="text-bg-color" />
                        </a>
                        <a className="social-media w-10 h-10 rounded-full border-4 border-white flex flex-row justify-center items-center bg-white mx-2"
                           href={clubInfo.twitter_link} target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faXTwitter} size="xl" className="text-bg-color" />
                        </a>
                        <a className={"social-media w-10 h-10 rounded-full border-4 border-white flex flex-row justify-center items-center bg-white mx-2"}
                           href={clubInfo.facebook_link} target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faFacebookSquare} size="xl" className="text-bg-color" />
                        </a>
                    </div>
                </div>
                <div className="flex flex-col items-center lg:order-2 lg:w-1/3">
                    <div className="flex items-center gap-2">
                        <span className="text-white font-montserrat text-2xl">Made with </span>
                        <FontAwesomeIcon icon={faHeart} size="xl" className="text-heart inline" />
                        <span className="text-white font-montserrat text-2xl"> by: </span>
                    </div>
                    <Image
                        className={"w-52 md:w-72"}
                        src={"/etc-logo.webp"}
                        alt="ETC logo"
                        width={271}
                        height={261}
                    />
                </div>
            </div>
            <div className="text-white font-montserrat mb-4">
                <p className="text-center">All Rights Reserved {new Date().getFullYear()}</p>
                <a href="https://www.gnu.org/licenses/gpl-3.0.txt">
                    <p className="text-white font-montserrat text-center">License Information</p>
                </a>
            </div>
        </footer>
    );
};

export default Footer;
