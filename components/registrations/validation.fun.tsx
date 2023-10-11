import { Applicant } from "./Applicant";

export function validName(name: string) {
        const validNamePattern = /^[A-Za-z\s]+$/;
        return !(!name.match(validNamePattern) || !name.trim());

}

export function validEmail(email: string) {
        const emailPattern = /^[a-zA-Z0-9._%+-]+@ensia.edu.dz$/;
        return emailPattern.test(email);
}

export function validParagraph(paragraph: string) {

        const words = paragraph.split(/\s+/);

        return !(words.length < 5 || !paragraph.trim());

}

export function validOption(option: string) {
        return option;

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