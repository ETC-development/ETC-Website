import { createClientSupabaseClient } from "@/lib/supabase/client";
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

    const supabase = createClientSupabaseClient();
    
    // Transform data to match database schema
    const registrationData = {
        fullname: applicant.fullname,
        email: applicant.email,
        level: applicant.level as any, // Cast to satisfy enum type
        discord: applicant.discord,
        discord_id: applicant.discord_id ? parseInt(applicant.discord_id, 10) : null,
        self_description: applicant.self_description,
        dep_first_choice: applicant.dep_first_choice as any,
        dep_second_choice: applicant.dep_second_choice as any,
        dep_third_choice: applicant.dep_third_choice as any,
        first_choice_motivation: applicant.first_choice_motivation,
        second_choice_motivation: applicant.second_choice_motivation,
        third_choice_motivation: applicant.third_choice_motivation,
        selection_justification: applicant.selection_justification,
        github_portfolio: applicant.github_portfolio || null
    };

    console.log("Submitting applicant:", registrationData);

    const { data, error } = await supabase
        .from("registerations-2k25-2k26")
        .insert(registrationData as any)
        .select();
    
    if (error) {
        console.error("Registration error:", error);
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