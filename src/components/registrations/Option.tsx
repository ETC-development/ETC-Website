import { Applicant } from './Applicant';
import './registration.css';

interface CardProps {
  placeholder: string,
  options: string[], // Assuming options is an array of strings
  name: string,
  value: string,
  applicant: Applicant,
  setInputValue: (updateAppicant: Applicant) => void,
  id: string
}

export default function Option({
  placeholder,
  options,
  name,
  value,
  setInputValue,
  applicant,
  id
}: CardProps) {

  return (
    <div id={id} className='flex justify-center items-center p-1  bg-transparent borderGradient rounded-2xl '>
    <select
      className={`focus:bg-[#074F57] capitalize bg-[#093441] z-20  self-stretch flex-1 rounded-xl  font-montserrat outline-none text-[#C7C7C7] pl-8 py-3 lg:py-4   text-[12px] lg:text-[16px] `}
      name={name}
      value={value}
      onChange={(e) => {
        setInputValue(({
          ...applicant,
          [name]: e.target.value
        }));
      }}
    >

        <option value="">{placeholder}</option> 

      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
    </div>
  );
}
