export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      admins: {
        Row: {
          created_at: string
          email: string
          id: number
        }
        Insert: {
          created_at?: string
          email: string
          id?: number
        }
        Update: {
          created_at?: string
          email?: string
          id?: number
        }
        Relationships: []
      }
      club_info: {
        Row: {
          address_link: string
          address_text: string
          club_description: string
          club_id: number
          discord_link: string
          email: string
          facebook_link: string
          github_link: string
          insta_link: string
          linkedin_link: string
          newsletter_desc: string
          newsletter_subtitle: string
          newsletter_title: string
          num_events: number
          num_members: number
          num_participants: number
          num_projects: number
          num_stands: number
          phone: string
          twitter_link: string
        }
        Insert: {
          address_link: string
          address_text: string
          club_description: string
          club_id?: number
          discord_link: string
          email: string
          facebook_link: string
          github_link: string
          insta_link: string
          linkedin_link: string
          newsletter_desc: string
          newsletter_subtitle: string
          newsletter_title: string
          num_events: number
          num_members: number
          num_participants: number
          num_projects: number
          num_stands: number
          phone: string
          twitter_link: string
        }
        Update: {
          address_link?: string
          address_text?: string
          club_description?: string
          club_id?: number
          discord_link?: string
          email?: string
          facebook_link?: string
          github_link?: string
          insta_link?: string
          linkedin_link?: string
          newsletter_desc?: string
          newsletter_subtitle?: string
          newsletter_title?: string
          num_events?: number
          num_members?: number
          num_participants?: number
          num_projects?: number
          num_stands?: number
          phone?: string
          twitter_link?: string
        }
        Relationships: []
      }
      events: {
        Row: {
          description: string
          id: number
          logo_link: string
          subtitle: string | null
          title: string
        }
        Insert: {
          description: string
          id?: number
          logo_link: string
          subtitle?: string | null
          title: string
        }
        Update: {
          description?: string
          id?: number
          logo_link?: string
          subtitle?: string | null
          title?: string
        }
        Relationships: []
      }
      managers: {
        Row: {
          description: string
          education_level: string
          email: string
          fullname: string
          github_link: string
          linkedin_link: string
          manager_id: number
          profile_pic_url: string
          role: string
        }
        Insert: {
          description: string
          education_level: string
          email: string
          fullname: string
          github_link: string
          linkedin_link: string
          manager_id?: number
          profile_pic_url: string
          role: string
        }
        Update: {
          description?: string
          education_level?: string
          email?: string
          fullname?: string
          github_link?: string
          linkedin_link?: string
          manager_id?: number
          profile_pic_url?: string
          role?: string
        }
        Relationships: []
      }
      projects: {
        Row: {
          description: string
          id: number
          logo_link: string
          subtitle: string | null
          title: string
        }
        Insert: {
          description: string
          id?: number
          logo_link: string
          subtitle?: string | null
          title: string
        }
        Update: {
          description?: string
          id?: number
          logo_link?: string
          subtitle?: string | null
          title?: string
        }
        Relationships: []
      }
      registration: {
        Row: {
          assigned_dep: Database["public"]["Enums"]["departments"] | null
          dep_first_choice: Database["public"]["Enums"]["departments"]
          dep_second_choice: Database["public"]["Enums"]["departments"]
          dep_third_choice: Database["public"]["Enums"]["departments"]
          discord: string
          discord_id: number | null
          email: string
          first_choice_motivation: string
          fullname: string
          github_portfolio: string | null
          id: number
          level: Database["public"]["Enums"]["level"]
          second_choice_motivation: string
          selection_justification: string
          self_description: string
          status: Database["public"]["Enums"]["status"] | null
          third_choice_motivation: string
        }
        Insert: {
          assigned_dep?: Database["public"]["Enums"]["departments"] | null
          dep_first_choice: Database["public"]["Enums"]["departments"]
          dep_second_choice: Database["public"]["Enums"]["departments"]
          dep_third_choice: Database["public"]["Enums"]["departments"]
          discord: string
          discord_id?: number | null
          email: string
          first_choice_motivation: string
          fullname: string
          github_portfolio?: string | null
          id?: number
          level: Database["public"]["Enums"]["level"]
          second_choice_motivation: string
          selection_justification: string
          self_description: string
          status?: Database["public"]["Enums"]["status"] | null
          third_choice_motivation: string
        }
        Update: {
          assigned_dep?: Database["public"]["Enums"]["departments"] | null
          dep_first_choice?: Database["public"]["Enums"]["departments"]
          dep_second_choice?: Database["public"]["Enums"]["departments"]
          dep_third_choice?: Database["public"]["Enums"]["departments"]
          discord?: string
          discord_id?: number | null
          email?: string
          first_choice_motivation?: string
          fullname?: string
          github_portfolio?: string | null
          id?: number
          level?: Database["public"]["Enums"]["level"]
          second_choice_motivation?: string
          selection_justification?: string
          self_description?: string
          status?: Database["public"]["Enums"]["status"] | null
          third_choice_motivation?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      departments:
        | "development"
        | "design"
        | "events"
        | "marketing"
        | "multimedia"
      level: "1CP / 1L" | "2CP / 2L" | "1CS / 3L" | "2CS / 1M" | "3CS / 2M"
      status: "accepted" | "pending" | "rejected"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}



export type Tables<T extends keyof Database['public']['Tables']> = Database['public']['Tables'][T]['Row']
export type Enums<T extends keyof Database['public']['Enums']> = Database['public']['Enums'][T]