export interface Applicant {
        fullname: string;
        email: string;
        level: string;
        discord: string;
        self_description: string;
        dep_first_choice: string;
        dep_second_choice: string;
        dep_third_choice: string;
        first_choice_motivation: string;
        second_choice_motivation: string;
        third_choice_motivation: string;
        selection_justification: string;
        github_portfolio: string;
        discord_id: string;
        [key: string]: string; 
}