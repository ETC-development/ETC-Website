import { Enums, Tables } from "@/lib/database.types";

export interface Applicant {
        fullname: string;
        email: string;
        level: Enums<"level"> | "";
        discord: string;
        self_description: string;
        dep_first_choice: Enums<"departments"> | "";
        dep_second_choice: Enums<"departments"> | "";
        dep_third_choice: Enums<"departments"> | "";
        first_choice_motivation: string;
        second_choice_motivation: string;
        third_choice_motivation: string;
        selection_justification: string;
        github_portfolio: string;
        discord_id: string;
        [key: string]: string; 
}
