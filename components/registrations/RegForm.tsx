"use client"
import Image from "next/image";
import bot1 from "@/public/assets/registration/Bot1.svg";
import bot1P from "@/public/assets/registration/Bot1P.svg";
import bot2 from "@/public/assets/registration/Bot2.svg";
import Input from "@/components/registrations/Input";
import Option from "@/components/registrations/Option";
import discord from "@/public/assets/registration/discord.svg";
import bot2P from "@/public/assets/registration/Bot2P.svg";
import bot3P from "@/public/assets/registration/Bot3P.svg";
import bot3 from "@/public/assets/registration/Bot3.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination , Navigation} from "swiper/modules";
import { Departements } from "@/constants";
import bot4P from "@/public/assets/registration/Bot4P.svg";
import bot4 from "@/public/assets/registration/Bot4.svg";
import "./registration.css"
import "swiper/css";
import "swiper/css/pagination";
import RegistrationTitle from "@/components/registrations/RegistrationTitle";
import { useState } from "react";
import { Applicant } from "./Applicant";
import { checkDepartments, checkParagraphs, validEmail, validName, validOption } from "./validation.fun";
import { addNewApplicant } from "./functions";
import { getUserData, signInWithDiscord } from "./discrod";
import supabase from "@/supabase";



const applicantInfo: Applicant = {
        fullname: "",
        email: "",
        level: "",
        discord: "",
        self_description: "",
        dep_first_choice: "",
        dep_second_choice: "",
        dep_third_choice: "",
        first_choice_motivation: "",
        second_choice_motivation: "",
        third_choice_motivation: "",
        selection_justification: "",
        github_portfolio: "",
        discord_id: ""
}


export default function RegistrationForm() {

        const departments = ['design', 'development', 'events', 'marketing', 'multimedia'];
        const levels = ["1CP / 1L", "2CP / 2L", "1CS / 3L", "2CS / 1M", "3CS / 2M"];

        const paragraphs = ['self_description', 'selection_justification', 'first_choice_motivation', 'second_choice_motivation', 'third_choice_motivation' ];
        const depart = ['dep_first_choice', 'dep_second_choice', 'dep_third_choice'];

        const [applicant, setApplicantInfo] = useState<Applicant>(applicantInfo);
        const [errors, setErrors] = useState<Applicant>(applicantInfo);
        const [insertionError, setInsertionError] = useState(String);
        const [insertionMessage, setInsertionMessage] = useState(String);

        function checkIfErrors(updatedErrors: Applicant) {
                setInsertionError("");
                let hasErrors = false;
                let firstErrorKey = "";
                for (const key in updatedErrors) {
                  if (updatedErrors[key] !== applicantInfo[key]) {
                    hasErrors = true;
                    firstErrorKey = key;
                      
                    break;
                  }
                }
                if (!hasErrors) {
                  console.log("insert");
                  addNewApplicant({applicant, applicantInfo, setApplicantInfo, setInsertionError, setInsertionMessage});
                } else {
                  console.log("can't");
                  if (firstErrorKey !== null) {
                        console.log('firstErrorKey')
                        const firstErrorElement = document.getElementById(`${firstErrorKey}`);
                        console.log(firstErrorElement)
                        if (firstErrorElement) {
                          firstErrorElement.scrollIntoView({
                            behavior: 'smooth', 
                            block: 'start',  
                          });
                        }}
                }
              }
              
        async function register() {

                const updatedErrors = { ...applicantInfo };
     
                if (!validName(applicant.fullname)) {
                  updatedErrors.fullname = "Please provide a valid name.";
                }
                if (!validOption(applicant.level)) {
                  updatedErrors.level = "Please choose your level.";
                }  
                if (!validEmail(applicant.email)) {
                        updatedErrors.email = "Please provide a valid email.";
                }           

                await checkParagraphs(paragraphs, updatedErrors, applicant);
                await checkDepartments(depart, updatedErrors, applicant);
                setErrors(updatedErrors);
                checkIfErrors(updatedErrors);
        }         

    return (
        <>
            <Image
                className="animationReg hidden lg:flex absolute top-10 right-6 "
                src={bot1}
                alt=""
            >
            </Image>
            <div className="flex lg:justify-center lg:items-center lg:self-stretch">
                <Image
                    className="animationReg lg:hidden"
                    src={bot1P}
                    alt=""
                >
                </Image>
                <div className="flex flex-col gap-8 items-center">
                <RegistrationTitle title={"JOIN US!"} subtitle={"Join tens of bright minded people\nand let the fun begin !"} />
                {insertionError && <div className="text-red-600 w-fit h-fit justify-center items-center font-montserrat text-base border rounded-2xl border-red p-4">{insertionError}</div> }
                {insertionMessage && <div className="text-green w-fit h-fit justify-center items-center font-montserrat text-base border rounded-2xl border-green p-4">{insertionMessage}</div> }
            </div>
            </div>

            <div className="flex flex-col gap-4 self-stretch lg:relative">
                <div className="w-[2px] z-20 h-[105%] bg-white absolute  left-9 top-8 hidden lg:flex"></div>
                <p className=" lg:hidden text-white text-left font-montserrat text-[22px] lg:text-[30px]">
                    1 <span className=" font-bold">  Personal information</span>
                </p>
                <div
                    className=" lg:flex gap-3 items-center hidden text-white text-left font-montserrat text-[22px] lg:text-[30px]">
                    1 <div className=" ml-1 w-5 h-5 bg-white text-white rounded-full"></div> <span
                    className=" font-bold"> Personal information</span>
                </div>
                <div className="flex flex-col gap-4 relative">
                    <Image
                        src={bot2}
                        alt=""
                        className=" absolute top-10 left-[-30px] animationReg hidden z-30 lg:flex"
                    >
                    </Image>
                    <div className="flex flex-col gap-4 lg:pl-48 lg:pr-12 ">
                        <Input id="fullname" placeholder="Full name *"  type="text" name="fullname" applicant={applicant} value={applicant?.fullname} setInputValue={setApplicantInfo}   height="h-auto" />
                        {errors.fullname && <div className="text-sm text-red-600">{errors.fullname }</div>}
                        <Input id="email" placeholder="School’s email *" type="email" name="email" applicant={applicant} value={applicant?.email} setInputValue={setApplicantInfo} height="h-auto" />
                        {errors.email && <div  className="text-sm text-red-600">{errors.email }</div>}
                        <Option id="level" placeholder="Level * " name="level" applicant={applicant} value={applicant?.level} setInputValue={setApplicantInfo} options={levels} />
                        {errors.level && <div  className="text-sm text-red-600">{errors.level }</div>}
                        <div className="flex justify-center items-center p-1 bg-transparent borderGradient rounded-2xl">
                            <button
                                type={"button"}
                                className="flex items-center justify-center gap-4 focus:bg-[#074F57] bg-[#093441] z-20  self-stretch flex-1 rounded-xl  font-montserrat text-[#C7C7C7] pl-8 py-3 text-[12px]  lg:text-[16px] ">
                                <Image
                                    src={discord}
                                    alt=""
                                    className=" w-9"
                                >
                                </Image>
                                Connect with your Discord Account
                            </button>
                        </div>
                        <Input id="self_description" placeholder="Tell us more about yourself" type="text" name="self_description" applicant={applicant} value={applicant?.self_description} setInputValue={setApplicantInfo} height="h-[120px]" />
                        {errors.self_description && <div  className="text-sm text-red-600">{errors.self_description }</div>}
                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-4 self-stretch relative">
                <div className="w-[2px] z-20 h-[105%] bg-white absolute  left-9 top-8 hidden lg:flex"></div>
                <Image
                    src={bot2P}
                    alt=""
                    className=" absolute top-10 right-[-40px] animationReg lg:hidden"
                >
                </Image>
                <Image
                    src={bot3P}
                    alt=""
                    className=" absolute bottom-60 right-[-40px] z-30 animationReg lg:hidden"
                >
                </Image>
                <Image
                    src={bot3}
                    alt=""
                    className=" absolute right-10 top-10 z-30 animationReg hidden lg:flex"
                >
                </Image>
                <p className=" lg:hidden text-white text-left font-montserrat text-[22px] lg:text-[30px]">
                    2 <span className=" font-bold">  Department Orientation </span>
                </p>
                <div
                    className=" lg:flex gap-2 items-center hidden text-white text-left font-montserrat text-[22px] lg:text-[30px]">
                    2 <div className=" w-5 h-5 bg-white text-white rounded-full"></div> <span
                    className=" ml-1 font-bold">  Department Orientation</span>
                </div>
                <div>
                    <Swiper
                        slidesPerView={1}
                        centeredSlides={true}
                        navigation={{
                            nextEl: ".swiper-button-next",
                            prevEl: ".swiper-button-prev"
                        }}
                        pagination={{ clickable: true }}
                        modules={[Pagination, Navigation]}
                        className="my-custom-swiper lg:!w-[45%]"

                    >
                        {Departements.map((department, index) => (
                            <SwiperSlide key={index} className="!flex !items-center !justify-center swiper-slide-team ">
                                <div
                                    className="flex items-center flex-col gap-5 bg-[#093441] rounded-[30px] p-5 w-[260px] lg:w-[320px] my-10">
                                    <p className=" w-32 font-montserrat text-center text-white text-[16px] font-bold">
                                        {department.DepartementName}
                                    </p>
                                    <p className="font-montserrat text-center text-white/70 text-[14px] ">
                                        {department.desc}
                                    </p>
                                </div>
                            </SwiperSlide>
                        ))}
                        <div className="slider-controler ">
                            <div className="swiper-button-prev slider-arrow after:hidden ">
                                <img src={"/previous.svg"} alt="" className="" />
                            </div>
                            <div className="swiper-button-next slider-arrow after:hidden">
                                <img src={"/next.svg"} alt="" className="" />
                            </div>
                        </div>
                    </Swiper>
                </div>
                <div className="flex flex-col gap-4 lg:pr-20 lg:pl-32 ">
                    <p className=" font-montserrat text-white text-[18px] lg:text-[20px] font-medium text-left">
                        . Please indicate your department preferences
                    </p>
                    <Option id="dep_first_choice" placeholder="First Choice * "  name="dep_first_choice" applicant={applicant} value={applicant?.dep_first_choice} setInputValue={setApplicantInfo} options={departments} />
                    {errors.dep_first_choice && <div  className="text-sm text-red-600">{errors.dep_first_choice }</div>}
                    <p className=" font-montserrat text-white text-[14px] lg:text-[16px] font-medium text-left">
                        . What are the reasons behind your first choice ? *
                    </p>
                    <Input id="first_choice_motivation" placeholder="Your answer here" type="text" name="first_choice_motivation" applicant={applicant} value={applicant?.first_choice_motivation} setInputValue={setApplicantInfo} height="h-auto" />
                    {errors.first_choice_motivation && <div  className="text-sm text-red-600">{errors.first_choice_motivation }</div>}
                    <Option id="dep_second_choice" placeholder="Second Choice * " name="dep_second_choice" applicant={applicant} value={applicant?.dep_second_choice} setInputValue={setApplicantInfo} options={departments} />
                    {errors.dep_second_choice && <div className="text-sm text-red-600">{errors.dep_second_choice }</div>}
                    <p className=" font-montserrat text-white text-[14px] lg:text-[16px] font-medium text-left">
                        . What are the reasons behind your second choice ? *
                    </p>
                    <Input id="second_choice_motivation" placeholder="Your answer here" type="text" name="second_choice_motivation" applicant={applicant} value={applicant?.second_choice_motivation} setInputValue={setApplicantInfo} height="h-auto" />
                    {errors.second_choice_motivation && <div className="text-sm text-red-600">{errors.second_choice_motivation }</div>}
                    <Option id="dep_third_choice" placeholder="Third Choice * " name="dep_third_choice" applicant={applicant} value={applicant?.dep_third_choice} setInputValue={setApplicantInfo} options={departments} />
                    {errors.dep_third_choice && <div className="text-sm text-red-600">{errors.dep_third_choice }</div>}
                    <p className=" font-montserrat text-white text-[14px] lg:text-[16px] font-medium text-left">
                        . What are the reasons behind your third choice ? *
                    </p>
                    <Input id="third_choice_motivation" placeholder="Your answer here" type="text" name="third_choice_motivation" applicant={applicant} value={applicant?.third_choice_motivation} setInputValue={setApplicantInfo} height="h-auto" />
                    {errors.third_choice_motivation && <div className="text-sm text-red-600">{errors.third_choice_motivation }</div>}

                    <p className=" font-montserrat text-white text-[18px] lg:text-[20px] font-medium text-left">
                        . Why should we choose you over the other applicants ?
                    </p>
                    <Input id="selection_justification" placeholder="Your answer here" type="text" name="selection_justification" applicant={applicant} value={applicant?.selection_justification} setInputValue={setApplicantInfo} height="h-[160px]" />
                    {errors.selection_justification && <div  className="text-sm text-red-600">{errors.selection_justification }</div>}

                    <p className=" font-montserrat text-white text-[18px] lg:text-[20px] font-medium text-left">
                        . Drop your portfolio or Github here and let us see your work !
                    </p>
                    <Input id="github_portfolio" placeholder="Your answer here" type="text" name="github_portfolio" applicant={applicant} value={applicant?.github_portfolio} setInputValue={setApplicantInfo} height="h-auto" />


                </div>
            </div>
            <div className=" flex items-end  justify-around lg:justify-end lg:pt-10 ">
                <Image
                    className="animationReg lg:hidden"
                    src={bot4P}
                    alt=""
                >
                </Image>
                <Image
                    className="animationReg hidden lg:flex absolute bottom-10 left-6 z-30"
                    src={bot4}
                    alt=""
                >
                </Image>
                <button
                    className=" px-6 lg:px-8 py-4 lg:py-6 rounded-2xl text-white font-montserrat text-[16px] lg:text-[24px] font-bold bg-[#093441] "
                    type="submit"
                    onClick={()=>{
                        setInsertionError('');
                        setInsertionMessage('');
                        register()}}>
                    Submit now !
                </button>
            </div>
        </>
    );
}