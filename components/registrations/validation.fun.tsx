import { Applicant } from "./Applicant";

export function validName(name: string) {
        const validNamePattern = /^[A-Za-z\s]+$/;
        if(!name.match(validNamePattern) || !name.trim()){
                return false
        }
        return true
}

export function validEmail(email: string) {
        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if(!emailPattern.test(email)){
                return false
        }
        return true
}

export function validParagraph(paragraph: string) {

        const words = paragraph.split(/\s+/);

        if(words.length < 5 || !paragraph.trim()){
                return false
        }
        return true
}

export function validOption(option: string) {
        if(!option){
                return false
        }
        return true
}

export async function checkParagraphs(elements: string[], errors: Applicant, applicant: Applicant) {
        elements.forEach((element) => {
          if (!validParagraph(applicant[element])) {
            errors[element] = "You should provide at least 5 words.";
          }
        });
      }

export async function checkDepartments(elements: string[], errors: Applicant, applicant: Applicant) {
        elements.forEach((element) => {
          if (!validOption(applicant[element])) {
            errors[element] = "Please choose one department.";
          }
        });
      }