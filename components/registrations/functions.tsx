import supabase from "@/supabase";
import { Applicant } from "./Applicant";

interface IAddApplicant {
    applicant: Applicant,
    applicantInfo: Applicant,
    setInsertionError: (error: string) => void,
    setApplicantInfo: (applicant: Applicant) => void,
    setInsertionMessage: (message: string) => void
}


export const applicantInfoEmpty: Applicant = {
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
};

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

export async function addNewApplicant({
                                          applicant,
                                          applicantInfo,
                                          setApplicantInfo,
                                          setInsertionError,
                                          setInsertionMessage
                                      }: IAddApplicant) {
    setInsertionError("");

    const { data, error } = await supabase
        .from("registration")
        // @ts-ignore
        .insert(applicant)
        .select();
    if (error) {
        let errorMsg = "There was an error while submitting your request, please try again"

        // code 23505 is for duplicate key in postgresql
        if(error.code === "23505") {
            errorMsg = "You have registered already!"
            setApplicantInfo(applicantInfoEmpty)
        }

        setInsertionError(errorMsg);

        scrollToTop()
    }
    if (data) {
        setInsertionMessage("You have registered successfully!!");
        setApplicantInfo(applicantInfo);
        scrollToTop();
    }
}