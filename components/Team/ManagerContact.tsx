import {  faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
        faGithubAlt,
        faLinkedinIn,
    } from "@fortawesome/free-brands-svg-icons";

interface ManagerContactProps {
    emailLink : string,
    linkedinLink : string,
    githubLink : string,    
  }
  

const ManagerContact = ({
emailLink,
linkedinLink,
githubLink,

} : ManagerContactProps ) => {

    return (
            <div    className="flex justify-center items-center gap-6">
                    <div className=" w-[85px] h-7 shrink-0 text-white text-right font-montserrat ">
                    Contact: 
                    </div>
                    <ul className="flex flex-row flex-right">
                        <li className='w-full flex items-center lg:flex-row'>
                            <div className="w-10 h-10 rounded-full border-2 border-white flex flex-row justify-center items-center">
                            <FontAwesomeIcon icon={faGithubAlt} size='lg'  style={{color: "#ffffff",}} />
                        </div>
                            <a href={githubLink} className="text-white font-montserrat text-base pl-4"> {githubLink} </a>
                        </li>
                        <li className='flex items-center lg:flex-row'>
                            <div className="w-10 h-10 rounded-full border-2 border-white flex flex-row justify-center items-center">
                                <FontAwesomeIcon icon={faEnvelope} size='lg'  className="text-white" />
                            </div>
                            <a href={emailLink} className="text-white font-montserrat text-base pl-4"> </a>
                        </li>
                        <li className='w-full flex items-center lg:flex-row'>
                            <div className="w-10 h-10 rounded-full border-2 border-white flex flex-row justify-center items-center">
                                <FontAwesomeIcon icon={faLinkedinIn} size='lg'  className="text-white" />
                            </div>
                            <a href={linkedinLink} className="text-white font-montserrat text-base pl-4"> {linkedinLink} </a>
                        </li>
                    </ul>
            </div>
    );
}

export default ManagerContact;