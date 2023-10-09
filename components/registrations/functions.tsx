import supabase from "@/supabase";
import { Applicant } from "./Applicant";

interface IAddApplicant{
        applicant: Applicant,
        applicantInfo: Applicant,
        setInsertionError: (error: string) => void,
        setApplicantInfo: (applicant: Applicant) => void,
        setInsertionMessage: (message: string) => void
}

function scrollToTop() {
        window.scrollTo({
          top: 0,
          behavior: "smooth"
        });
      }

export async function addNewApplicant({applicant, applicantInfo, setApplicantInfo, setInsertionError, setInsertionMessage}: IAddApplicant ) {
        setInsertionError("");
        const newApplicant = {
                fullname: applicant.fullname,
                email: applicant.email,
                level: applicant.level,
                discord: applicant.discord ?? "discord",
                self_description: applicant.self_description,
                dep_first_choice: applicant.dep_first_choice,
                dep_second_choice: applicant.dep_second_choice,
                dep_third_choice: applicant.dep_third_choice,
                first_choice_motivation: applicant.first_choice_motivation,
                second_choice_motivation: applicant.second_choice_motivation,
                third_choice_motivation: applicant.third_choice_motivation,
                selection_justification: applicant.selection_justification,
                github_portfolio: applicant.github_portfolio
        }
        const { data, error } = await supabase
                .from('registration')
                .insert(newApplicant)
                .select()
                if(error){
                        setInsertionError('If this error shows up please inform Salah :)')
                }
                if(data){
                        setInsertionMessage('You have registered successfully!!')
                        setApplicantInfo(applicantInfo)
                        scrollToTop()
                }
}