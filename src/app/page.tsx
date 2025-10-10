import Events from "@/components/Events/Events.index";
import Footer from "@/components/Footer/Footer.index";
import Hero from "@/components/Hero/Hero.index";
import Navbar from "@/components/NavBar/Navbar.index";
import Newsletter from "@/components/Newsletter/Newsletter.index";
import Projects from "@/components/Projects/Projects.index";
import Team from "@/components/Team/Team.index";
import Background from "@/components/background/Background";
import FadeInWhenVisible from "@/components/utils/FadeInWhenVisible";
import { createServerSupabaseClient } from "@/lib/supabase/server";

// Enable ISR with revalidation
export const revalidate = 3600; // Revalidate every hour

export default async function Home() {
    const supabase = await createServerSupabaseClient();

    // Parallel data fetching for better performance
    const [
        { data: clubInfoData, error: infoError },
        { data: projects, error: projectsError },
        { data: events, error: eventsError },
        { data: teamMembers, error: teamError }
    ] = await Promise.all([
        supabase.from("club_info").select("*").single(),
        supabase.from("projects").select("*").order("id", { ascending: true }),
        supabase.from("events").select("*").order("id", { ascending: true }),
        supabase.from("managers-2k25-2k26").select("*").order("manager_id", { ascending: true })
    ]);

    // Return empty if essential data is missing
    if (!clubInfoData) return null;

    return (
        <div className="flex flex-col gap-20 overflow-hidden">
            <Background />
            <Navbar />
            <Hero clubInfo={clubInfoData} />

            {events && events.length > 0 && (
                <FadeInWhenVisible>
                    <Events events={events} />
                </FadeInWhenVisible>
            )}

            {projects && projects.length > 0 && (
                <FadeInWhenVisible>
                    <Projects projects={projects} />
                </FadeInWhenVisible>
            )}

            {teamMembers && teamMembers.length > 0 && (
                <FadeInWhenVisible>
                    <Team teamMembers={teamMembers} />
                </FadeInWhenVisible>
            )}

            <FadeInWhenVisible>
                <Newsletter clubInfo={clubInfoData} />
            </FadeInWhenVisible>

            <FadeInWhenVisible>
                <Footer clubInfo={clubInfoData} />
            </FadeInWhenVisible>
        </div>
    );
}