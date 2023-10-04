import Events from "@/components/Events/Events.index";
import Footer from "@/components/Footer/Footer.index";
import Hero from "@/components/Hero/Hero.index";
import Navbar from "@/components/NavBar/Navbar.index";
import Newsletter from "@/components/Newsletter/Newsletter.index";
import Projects from "@/components/Projects/Projects.index";
import Team from "@/components/Team/Team.index";
import Background from "@/components/background/Background";
import FadeInWhenVisible from "@/components/utils/FadeInWhenVisible";
import supabase from "@/supabase";

export default async function Home() {


    const { data: clubInfoData, error: infoError } = await supabase.from("club_info").select("*").single();

    const { data: projects, error: projectsError } = await supabase.from("projects").select("*");

    const { data: events, error: eventsError } = await supabase.from("events").select("*");

    const { data: teamMembers, error: teamError } = await supabase.from("managers").select("*");


    if (infoError || projectsError || teamError || eventsError)
        return;


    return (
        <div className="flex flex-col gap-20 overflow-hidden">
            <Background />
            <Navbar />
            <Hero clubInfo={clubInfoData} />
            <FadeInWhenVisible>
                <Projects projects={projects} />
            </FadeInWhenVisible>

            <FadeInWhenVisible>
                <Events events={events} />
            </FadeInWhenVisible>

            <FadeInWhenVisible>
                <Team teamMembers={teamMembers} />
            </FadeInWhenVisible>

            <FadeInWhenVisible>
                <Newsletter clubInfo={clubInfoData} />
            </FadeInWhenVisible>

            <FadeInWhenVisible>
                <Footer clubInfo={clubInfoData} />
            </FadeInWhenVisible>
        </div>
    );
}
