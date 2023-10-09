import Image from "next/image";
import './footer.css';

import { faPhone, faLocationDot, faEnvelope, faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faDiscord,
    faFacebook,
    faGithub,
    faInstagram,
    faLinkedinIn,
    faXTwitter,
} from "@fortawesome/free-brands-svg-icons";


const data = {
    phone: "+213-555-933-788",
    address: {
        name:  "ENSIA - Sidi Abdallah",
        url: "https://goo.gl/maps/K12YhBFhtwvtb3d68"
    },
    mail: "tech-community@ensia.edu.dz"
}

const links = {
    instagram: "https://www.instagram.com/etc_.club/",
    github: "https://github.com/ETC-development",
    discord: 'https://discord.gg/zRKqVc67hN',
    linkedin: 'https://www.linkedin.com/company/ensia-tech-community/mycompany/',
    twitter: 'https://twitter.com/ETC_ensia_club',
    facebook: 'https://www.facebook.com/ensia.tech.community/'
}
const Footer = () => {
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
                    <h1 className='text-white font-montserrat text-2xl mb-3'>Contact us:</h1>
                    <ul className="flex flex-col flex-right">
                        <li className='w-full flex items-center mt-2 mb-2 lg:flex-row'>
                            <div className="w-10 h-10 rounded-full border-4 border-white flex flex-row justify-center items-center">
                                <FontAwesomeIcon icon={faPhone} size="lg" className="text-white" />
                            </div>
                            <a href={`tel:${data.phone}`} className="text-white font-montserrat text-base pl-4"> {data.phone} </a>
                        </li>
                        <li className='flex items-center mt-2 mb-2 lg:flex-row'>
                            <div className="w-10 h-10 rounded-full border-4 border-white flex flex-row justify-center items-center">
                                <FontAwesomeIcon icon={faEnvelope} size="lg" className="text-white" />
                            </div>
                            <a href={`mailto:${data.mail}`} className="text-white font-montserrat text-base pl-4"> {data.mail} </a>
                        </li>
                        <li className='w-full flex items-center mt-2 mb-2 lg:flex-row'>
                            <div className="w-10 h-10 rounded-full border-4 border-white flex flex-row justify-center items-center">
                                <FontAwesomeIcon icon={faLocationDot} size="lg" className="text-white" />
                            </div>
                            <a href={data.address.url} className="text-white font-montserrat text-base pl-4"> {data.address.name} </a>
                        </li>
                    </ul>
                </div>
                <div className='flex flex-col items-center lg:order-1 mt-10 mb-10 lg:mt-0 lg:mb-0 !text-bg-color lg:w-1/3'>
                    <h1 className='text-white font-montserrat text-2xl mb-3'>Follow us:</h1>
                    <div className='flex flex-row justify-between mt-4 mb-2'>
                        <a className='social-media w-10 h-10 rounded-full border-4 border-white flex flex-row justify-center items-center bg-white mr-4 ml-4' href={links.instagram} target="_blank">
                            <FontAwesomeIcon icon={faInstagram} size="xl" />
                        </a>
                        <a href={links.github} target="_blank">
                            <FontAwesomeIcon icon={faGithub} className="w-10 h-10 text-white" />
                        </a>
                        <a className='social-media w-10 h-10 rounded-full border-4 border-white flex flex-row justify-center items-center bg-white mr-4 ml-4' href={links.discord} target="_blank">
                            <FontAwesomeIcon icon={faDiscord} size="xl"/>
                        </a>
                    </div>
                    <div className='flex flex-row justify-between mt-2 mb-4'>
                        <a className='social-media w-10 h-10 rounded-full border-4 border-white flex flex-row justify-center items-center bg-white mr-4 ml-4' href={links.linkedin} target="_blank">
                            <FontAwesomeIcon icon={faLinkedinIn} size="xl" />
                        </a>
                        <a className='social-media w-10 h-10 rounded-full border-4 border-white flex flex-row justify-center items-center bg-white' href={links.twitter} target="_blank">
                            <FontAwesomeIcon icon={faXTwitter} size="xl" />
                        </a>
                        <a href={links.facebook} target="_blank">
                            <FontAwesomeIcon icon={faFacebook} size="xl" className="w-10 h-10 text-white mr-4 ml-4" target="_blank" />
                        </a>
                    </div>
                </div>
                <div className='flex flex-col items-center lg:order-2 lg:w-1/3'>
                    <div className="flex items-center gap-2">
                        <span className='text-white font-montserrat text-2xl'>Made with </span>
                        <FontAwesomeIcon icon={faHeart} size="xl" className="text-heart inline" />
                        <span className='text-white font-montserrat text-2xl'> by: </span>
                    </div>
                    <Image
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
