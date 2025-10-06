/**
 * Centralized Type Definitions
 * This file contains shared types used across the application
 */

import { Database } from "@/lib/database.types";

// Database table types for easier access
export type ClubInfo = Database["public"]["Tables"]["club_info"]["Row"];
export type Event = Database["public"]["Tables"]["events"]["Row"];
export type Project = Database["public"]["Tables"]["projects"]["Row"];
export type Manager = Database["public"]["Tables"]["managers"]["Row"];
export type Registration = Database["public"]["Tables"]["registration"]["Row"];
export type Admin = Database["public"]["Tables"]["admins"]["Row"];

// Database enum types
export type Department = Database["public"]["Enums"]["departments"];
export type Level = Database["public"]["Enums"]["level"];
export type Status = Database["public"]["Enums"]["status"];

// Component prop types
export interface BaseComponentProps {
    className?: string;
    children?: React.ReactNode;
}

export interface ClubInfoProps {
    clubInfo: ClubInfo | null;
}

export interface EventsProps {
    events: Event[];
}

export interface ProjectsProps {
    projects: Project[];
}

export interface TeamProps {
    teamMembers: Manager[];
}

// Form types
export interface NewsletterFormData {
    email: string;
}

export interface RegistrationFormData {
    fullname: string;
    email: string;
    level: Level | "";
    discord: string;
    discord_id: string;
    self_description: string;
    dep_first_choice: Department | "";
    dep_second_choice: Department | "";
    dep_third_choice: Department | "";
    first_choice_motivation: string;
    second_choice_motivation: string;
    third_choice_motivation: string;
    selection_justification: string;
    github_portfolio: string;
}

// API Response types
export interface ApiResponse<T = any> {
    data?: T;
    error?: string;
    message?: string;
}

export interface NewsletterResponse {
    success: boolean;
    message: string;
}

// UI State types
export interface ResponseMessage {
    status: "success" | "error" | "none";
    text: string;
}

// Utility types
export type Nullable<T> = T | null;
export type Optional<T> = T | undefined;

// Re-export Database for convenience
export type { Database };
