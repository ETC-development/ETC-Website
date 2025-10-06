"use client";
import Image from "next/image";
import bot1 from "../../../public/assets/registration/Bot1.svg";
import bot1P from "../../../public/assets/registration/Bot1P.svg";
import bot2 from "../../../public/assets/registration/Bot2.svg";
import Input from "@/components/registrations/Input";
import Option from "@/components/registrations/Option";
import discord from "../../../public/assets/registration/discord.svg";
import bot2P from "../../../public/assets/registration/Bot2P.svg";
import bot3P from "../../../public/assets/registration/Bot3P.svg";
import bot3 from "../../../public/assets/registration/Bot3.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Controller, Navigation, Pagination } from "swiper/modules";
import { Departements } from "@/constants";
import bot4P from "../../../public/assets/registration/Bot4P.svg";
import bot4 from "../../../public/assets/registration/Bot4.svg";
import "./registration.css";
import "swiper/css";
import "swiper/css/pagination";
import SwiperCore from "swiper";
import RegistrationTitle from "@/components/registrations/RegistrationTitle";
import { useEffect, useState } from "react";
import { Applicant } from "./Applicant";
import { checkDepartments, checkParagraphs, validEmail, validName, validOption } from "./validation.fun";
import { addNewApplicant, applicantInfoEmpty } from "./functions";
import { signInWithDiscord, signOutFromDiscord } from "./discord";
import { usePathname, useRouter } from "next/navigation";
import { createClientSupabaseClient } from "@/lib/supabase/client";
import { Database } from "@/lib/database.types";
import { User } from "@supabase/supabase-js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOut } from "@fortawesome/free-solid-svg-icons";
import Button1 from "../utils/Button1";


SwiperCore.use([Navigation, Pagination]);


const getApplicantData = () => {

    // if(typeof localStorage === "undefined")
    //     return

    const applicantLocalStorage = localStorage.getItem("applicant");
    if (!applicantLocalStorage) return applicantInfoEmpty;

    return JSON.parse(applicantLocalStorage);
};


export default function RegistrationForm() {

    const supabase = createClientSupabaseClient();

    const departments = ["design", "development", "events", "marketing", "multimedia"];
    const levels = ["1CP / 1L", "2CP / 2L", "1CS / 3L", "2CS / 1M", "3CS / 2M"];

    const paragraphs = ["self_description", "selection_justification", "first_choice_motivation", "second_choice_motivation", "third_choice_motivation"];
    const depart = ["dep_first_choice", "dep_second_choice", "dep_third_choice"];

    const [applicantInfo, setApplicantInfo] = useState<Applicant>(getApplicantData);
    const [errors, setErrors] = useState<Applicant>(applicantInfoEmpty);
    const [insertionError, setInsertionError] = useState(String);
    const [insertionMessage, setInsertionMessage] = useState(String);


    const [firstSwiper, setFirstSwiper] = useState<SwiperCore>();


    const [user, setUser] = useState<User | null>();


    // const user = useUser()

    const router = useRouter();

    const pathname = usePathname();

    async function validateAndSubmit(updatedErrors: Applicant) {
        setInsertionError("");
        let hasErrors = false;
        let firstErrorKey = "";
        for (const key in updatedErrors) {
            if (updatedErrors[key] !== applicantInfoEmpty[key]) {
                hasErrors = true;
                firstErrorKey = key;

                break;
            }
        }
        if (!hasErrors) {
            console.log("insert");
            await addNewApplicant({
                applicant: applicantInfo,
                applicantInfo: applicantInfoEmpty,
                setApplicantInfo: setApplicantInfo,
                setInsertionError,
                setInsertionMessage
            });
        } else {
            console.log("can't");
            if (firstErrorKey !== null) {
                console.log("firstErrorKey");
                const firstErrorElement = document.getElementById(`${firstErrorKey}`);
                console.log(firstErrorElement);
                if (firstErrorElement) {
                    firstErrorElement.scrollIntoView({
                        behavior: "smooth",
                        block: "start"
                    });
                }
            }
        }
    }

    useEffect(() => {

        async function getUser() {
            const userData = await supabase.auth.getUser();
            return userData.data.user;
        }

        getUser().then(user => {

            if (!user) {
                setUser(null);
                return;
            }

            setApplicantInfo({
                ...applicantInfo,
                discord_id: user?.user_metadata.provider_id,
                discord: user?.user_metadata.full_name || user?.user_metadata.name
            });

            setUser(user);
        });

    }, []);


    //
    useEffect(() => {

        if (typeof localStorage === "undefined")
            return;

        // when applicant changes, save in local storage
        localStorage.setItem("applicant", JSON.stringify(applicantInfo));

        // // if there is no applicant, we
        // if (!applicant) {
        //     const applicantLocalStorage = localStorage.getItem("applicant");
        //     if (!applicantLocalStorage) return;
        //
        //     const localApplicantData = JSON.parse(applicantLocalStorage);
        //     setApplicantInfo(localApplicantData);
        // }

    }, [applicantInfo]);

    async function register() {

        const updatedErrors = { ...applicantInfoEmpty };

        if (!validName(applicantInfo.fullname)) {
            updatedErrors.fullname = "Please provide a valid name.";
        }
        if (!validOption(applicantInfo.level)) {
            // @ts-ignore
            updatedErrors.level = "Please choose your level.";
        }
        if (!validEmail(applicantInfo.email)) {
            updatedErrors.email = "Please provide a valid @ensia.edu.dz email.";
        }

        if (!user) {
            updatedErrors.discord = "Please connect your Discord account.";
        }

        await checkParagraphs(paragraphs, updatedErrors, applicantInfo);
        await checkDepartments(depart, updatedErrors, applicantInfo);
        setErrors(updatedErrors);
        await validateAndSubmit(updatedErrors);
    }

    function getDiscordLoginButton() {
        return <button
            onClick={() => signInWithDiscord(router)}
            type={"button"}
            className="flex items-center justify-center gap-4 focus:bg-[#074F57] bg-[#093441] z-20  self-stretch flex-1 rounded-xl  font-montserrat text-[#C7C7C7] pl-8 py-3 text-[12px]  lg:text-[16px] ">
            <Image
                src={discord}
                alt=""
                className=" w-9"
            >
            </Image>
            Connect with your Discord Account
        </button>;
    }


    function getDiscordLogoutButton() {
        return <div
            className={"flex items-center gap-3 justify-center focus:bg-[#074F57] bg-[#093441] z-20  self-stretch flex-1 rounded-xl  font-montserrat text-[#C7C7C7] py-3 text-md "}
        >
                <Image className={"rounded-full"} src={user?.user_metadata.avatar_url} alt={"profile picture"}
                       width={30}
                       height={30} />
                <div className={""}>{user?.user_metadata.full_name || user?.user_metadata.name}</div>
                <button
                    onClick={() => signOutFromDiscord(router)}
                >
                    <FontAwesomeIcon icon={faSignOut} className="text-white" />
                </button>
        </div>;
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
                    <RegistrationTitle title={"JOIN US!"}
                                       subtitle={"Join tens of bright minded people\nand let the fun begin !"} />
                    {insertionError && <div
                        className="text-red-600 w-fit h-fit justify-center items-center font-montserrat text-base border rounded-2xl border-red p-4">{insertionError}</div>}
                    {insertionMessage && <div
                        className="text-green w-fit h-fit justify-center items-center font-montserrat text-base border rounded-2xl border-green p-4">{insertionMessage}</div>}
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
                        <Input id="fullname" placeholder="Full name *" type="text" name="fullname"
                               applicant={applicantInfo}
                               value={applicantInfo?.fullname} setInputValue={setApplicantInfo} height="h-auto" />
                        {errors.fullname && <div className="text-sm text-red-600">{errors.fullname}</div>}
                        <Input id="email" placeholder="School’s email *" type="email" name="email"
                               applicant={applicantInfo}
                               value={applicantInfo?.email} setInputValue={setApplicantInfo} height="h-auto" />
                        {errors.email && <div className="text-sm text-red-600">{errors.email}</div>}
                        <Option id="level" placeholder="Level * " name="level" applicant={applicantInfo}
                                value={applicantInfo?.level} setInputValue={setApplicantInfo} options={levels} />
                        {errors.level && <div className="text-sm text-red-600">{errors.level}</div>}
                        <div className="flex justify-center items-center p-1 bg-transparent borderGradient rounded-2xl">
                            {user ? getDiscordLogoutButton() : getDiscordLoginButton()}
                        </div>
                        {errors.discord && <div className="text-sm text-red-600">{errors.discord}</div>}
                        <Input isTextField={true} id="self_description" placeholder="Tell us more about yourself" type="text"
                               name="self_description" applicant={applicantInfo} value={applicantInfo?.self_description}
                               setInputValue={setApplicantInfo} height="h-[120px]" />
                        {errors.self_description &&
                            <div className="text-sm text-red-600">{errors.self_description}</div>}
                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-4 self-stretch relative">
                <div className="w-[2px] z-20 h-[105%] bg-white absolute  left-9 top-8 hidden lg:flex"></div>
                <Image
                    src={bot2P}
                    alt=""
                    className=" absolute z-20 top-10 right-[-40px] animationReg lg:hidden"
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
                        onSwiper={setFirstSwiper}
                        controller={{ control: firstSwiper }}
                        slidesPerView={1}
                        centeredSlides={true}
                        navigation={{
                            nextEl: ".swiper-button-next",
                            prevEl: ".swiper-button-prev"
                        }}
                        pagination={{ clickable: true }}
                        modules={[Controller]}
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
                    <p className=" font-montserrat text-white text-[14px] lg:text-[18px] font-medium text-left ml-4 mt-6">
                        First choice ? *
                    </p>
                    <Option id="dep_first_choice" placeholder="First Choice * " name="dep_first_choice"
                            applicant={applicantInfo} value={applicantInfo?.dep_first_choice}
                            setInputValue={setApplicantInfo}
                            options={departments.filter(dep => !([applicantInfo.dep_second_choice, applicantInfo.dep_third_choice] as string[]).includes(dep))} />
                    {errors.dep_first_choice && <div className="text-sm text-red-600">{errors.dep_first_choice}</div>}
                    <p className=" font-montserrat text-white text-[14px] lg:text-[16px] font-medium text-left">
                        . What are the reasons behind your first choice ? *
                    </p>
                    <Input id="first_choice_motivation" placeholder="Your answer here" type="text"
                           name="first_choice_motivation" applicant={applicantInfo}
                           value={applicantInfo?.first_choice_motivation} setInputValue={setApplicantInfo}
                           height="h-auto" />
                    {errors.first_choice_motivation &&
                        <div className="text-sm text-red-600">{errors.first_choice_motivation}</div>}
                    <hr className="border-t border-gray-300 my-6" />
                    <p className=" font-montserrat text-white text-[14px] lg:text-[18px] font-medium text-left ml-4">
                        Second choice ? *
                    </p>
                    <Option id="dep_second_choice" placeholder="Second Choice * " name="dep_second_choice"
                            applicant={applicantInfo} value={applicantInfo?.dep_second_choice}
                            setInputValue={setApplicantInfo}
                            options={departments.filter(dep => !([applicantInfo.dep_first_choice, applicantInfo.dep_third_choice] as string[]).includes(dep))} />
                    {errors.dep_second_choice && <div className="text-sm text-red-600">{errors.dep_second_choice}</div>}
                    <p className=" font-montserrat text-white text-[14px] lg:text-[16px] font-medium text-left">
                        . What are the reasons behind your second choice ? *
                    </p>
                    <Input id="second_choice_motivation" placeholder="Your answer here" type="text"
                           name="second_choice_motivation" applicant={applicantInfo}
                           value={applicantInfo?.second_choice_motivation} setInputValue={setApplicantInfo}
                           height="h-auto" />
                    {errors.second_choice_motivation &&
                        <div className="text-sm text-red-600">{errors.second_choice_motivation}</div>}
                    <hr className="border-t border-gray-300 my-6" />
                    <p className=" font-montserrat text-white text-[14px] lg:text-[18px] font-medium text-left ml-4">
                        Third choice ? *
                    </p>
                    <Option id="dep_third_choice" placeholder="Third Choice * " name="dep_third_choice"
                            applicant={applicantInfo} value={applicantInfo?.dep_third_choice}
                            setInputValue={setApplicantInfo}
                            options={departments.filter(dep => !([applicantInfo.dep_first_choice, applicantInfo.dep_second_choice] as string[]).includes(dep))} />
                    {errors.dep_third_choice && <div className="text-sm text-red-600">{errors.dep_third_choice}</div>}
                    <p className=" font-montserrat text-white text-[14px] lg:text-[16px] font-medium text-left">
                        . What are the reasons behind your third choice ? *
                    </p>
                    <Input id="third_choice_motivation" placeholder="Your answer here" type="text"
                           name="third_choice_motivation" applicant={applicantInfo}
                           value={applicantInfo?.third_choice_motivation} setInputValue={setApplicantInfo}
                           height="h-auto" />
                    {errors.third_choice_motivation &&
                        <div className="text-sm text-red-600">{errors.third_choice_motivation}</div>}

                    <p className=" font-montserrat text-white text-[18px] lg:text-[20px] font-medium text-left mt-4">
                        . Why should we choose you over the other applicants ?
                    </p>
                    <Input isTextField={true} id="selection_justification" placeholder="Your answer here" type="text"
                           name="selection_justification" applicant={applicantInfo}
                           value={applicantInfo?.selection_justification} setInputValue={setApplicantInfo}
                           height="h-[160px]" />
                    {errors.selection_justification &&
                        <div className="text-sm text-red-600">{errors.selection_justification}</div>}

                    <p className=" font-montserrat text-white text-[18px] lg:text-[20px] font-medium text-left">
                        . Drop your portfolio or Github here and let us see your work !
                    </p>
                    <Input id="github_portfolio" placeholder="Your answer here" type="text" name="github_portfolio"
                           applicant={applicantInfo} value={applicantInfo?.github_portfolio}
                           setInputValue={setApplicantInfo}
                           height="h-auto" />


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
                <Button1 text="Submit now!" onSubmit={async () => {
                    setInsertionError("");
                    setInsertionMessage("");
                    await register();
                }}></Button1>
            </div>
        </>
    );
}