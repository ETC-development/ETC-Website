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
                    <ul className="flex flex-row gap-3 flex-right">
                        <li className='w-full flex items-center lg:flex-row'>
                            <div className="w-10 h-10 rounded-full border-2 border-white flex flex-row justify-center items-center">
                                <a href={githubLink}><FontAwesomeIcon icon={faGithubAlt} size='lg'  style={{color: "#ffffff"}} /></a>
                        </div>
                        </li>
                        <li className='flex items-center lg:flex-row'>
                            <div className="w-10 h-10 rounded-full border-2 border-white flex flex-row justify-center items-center">
                                <a href={`mailto:${emailLink}`}><FontAwesomeIcon icon={faEnvelope} size='lg'  className="text-white" /></a>
                            </div>
                        </li>
                        <li className='w-full flex items-center lg:flex-row'>
                            <div className="w-10 h-10 rounded-full border-2 border-white flex flex-row justify-center items-center">
                                <a href={linkedinLink}><FontAwesomeIcon icon={faLinkedinIn} size='lg'  className="text-white" /> </a>
                            </div>
                        </li>
                    </ul>
            </div>
    );
}

export default ManagerContact;