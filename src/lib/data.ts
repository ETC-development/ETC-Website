/**
 * Turns the crew in src/data/crew.ts into what the crew section renders.
 * All site content lives in src/data; Supabase is only used for registrations.
 */
import type { IconName } from "@/components/ui";
import { CELLS } from "@/data/cells";
import { KEY_PEOPLE, MANAGERS, PRESIDENT, type CrewMember } from "@/data/crew";

export type Member = {
    id: number;
    name: string;
    role: string;
    level: string;
    photo?: string;
    linkedin?: string;
    github?: string;
    /** Filter group: a cell key, or "other". */
    group: string;
    icon: IconName;
};
export type Crew = { president: Member; keys: Member[]; managers: Member[] };

/** Filter chips under "The crew": one per cell, then roles outside the cells. */
export const CREW_GROUPS: { key: string; label: string; icon: IconName }[] = [
    ...CELLS.map((c) => ({ key: c.key as string, label: c.name, icon: c.icon })),
    { key: "other", label: "Other roles", icon: "users" },
];

function toMember(m: CrewMember, id: number, board = false): Member {
    const group = CREW_GROUPS.find((g) => g.key === m.cell) ?? CREW_GROUPS[CREW_GROUPS.length - 1];
    return {
        id,
        name: m.name,
        role: m.role,
        level: m.level,
        photo: m.photo,
        linkedin: m.linkedin,
        github: m.github,
        group: group.key,
        icon: board ? "jelly" : group.icon,
    };
}

export const CREW: Crew = {
    president: toMember(PRESIDENT, 0, true),
    keys: KEY_PEOPLE.map((m, i) => toMember(m, 1 + i, true)),
    managers: MANAGERS.map((m, i) => toMember(m, 10 + i)),
};
