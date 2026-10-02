/**
 * The crew shown on the home page: the president in the middle, the three key people below,
 * then every manager in a scrollable rail with cell filters.
 *
 * Portraits: put a square-ish photo (at least 600px, .webp or .jpg) in public/crew/ and set
 * `photo: "/crew/file-name.webp"`. Leave `photo` out to show the placeholder.
 * `cell` decides the filter chip and badge icon; leave it out for roles outside the cells.
 */
import type { CellKey } from "@/data/cells";

export type CrewMember = {
    name: string;
    role: string;
    /** Study level, e.g. "2CS". */
    level: string;
    cell?: CellKey;
    photo?: string;
    linkedin?: string;
    github?: string;
};

export const CREW_SEASON = "2026/27";

export const PRESIDENT: CrewMember = {
    name: "Yasser BENAHMED",
    role: "President",
    level: "3Y",
};

/** Exactly three, in display order. */
export const KEY_PEOPLE: CrewMember[] = [
    { name: "Lyes HADJAR", role: "Vice President", level: "5Y" },
    { name: "Fatima Zohra Doua BOURZAK", role: "General Secretary", level: "4Y" },
    { name: "Yassir CHERDOUH", role: "Project Manager", level: "4Y" },
];

/** Everyone else, in display order. */
export const MANAGERS: CrewMember[] = [
    { name: "Abdelhak KADOUCI", role: "IT Co-Manager", level: "4Y", cell: "development" },
    { name: "Youcef Mhammdi BOUZINA", role: "IT Co-Manager", level: "5Y", cell: "development" },

    { name: "Redhouane LAZIB", role: "AI & Data Science Manager", level: "5Y", cell: "ai" },

    { name: "Amina FERHAOUI", role: "Design Manager", level: "3Y", cell: "design" },
        { name: "Norhane LEGHLAM", role: "Design Team", level: "3Y", cell: "design" },
        { name: "Israa BENABDELKRIM", role: "Design Team", level: "3Y", cell: "design" },

    { name: "Mohammed Radhoine AMARA", role: "Relex Co-Manager", level: "4Y", cell: "relex" },
    { name: "Sarah BOUKELLAL", role: "Relex Co-Manager", level: "2Y", cell: "relex" },
    { name: "Akram Zakaria NACEUR", role: "Relex Co-Manager", level: "3Y", cell: "relex" },

    { name: "Asma HAMAMTI", role: "Multimedia Co-Manager", level: "3Y", cell: "multimedia" },
    { name: "Zakaria Abdenour MEKKI", role: "Multimedia Co-Manager", level: "3Y", cell: "multimedia" },
    { name: "Nour RAHIAOUI", role: "Multimedia Co-Manager", level: "3Y", cell: "multimedia" },
    { name: "Yousra BEDJGHIT", role: "Production Manager", level: "3Y", cell: "multimedia" },

    { name: "Ayat-Errahmane NACER", role: "HR Lead", level: "4Y" },
        { name: "Maria Ines RAHEB", role: "HR Team", level: "3Y" },
        { name: "Houda BOUSLAMA", role: "HR Team", level: "4Y" },

    { name: "Zakaria AMMAR", role: "Logistics Manager", level: "3Y", cell: "events" },
    { name: "Sirine ATOUM", role: "Planning Manager", level: "4Y", cell:"events" },

    { name: "Maissa BRIBER", role: "Marketing Manager", level: "3Y", cell: "marketing" },

    { name: "Malak BOUHADDAD", role: "Community Manager", level: "3Y", cell: "marketing" },

    { name: "Mohamed Charaf Eddine DEGHBOUDJ", role: "External Activity Manager", level: "3Y", cell: "relex" },

    { name: "Kaouther BENSADDEK", role: "Training Manager", level: "4Y" },

    { name: "Manel Bouchra DEBAB", role: "Project Coordinator", level: "3Y" },
];
