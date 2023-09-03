import Events from "@/components/Events/Events.index";
import Footer from "@/components/Footer/Footer.index";
import Hero from "@/components/Hero/Hero.index";
import Navbar from "@/components/NavBar/Navbar.index";
import Newsletter from "@/components/Newsletter/Newsletter.index";
import Projects from "@/components/Projects/Projects.index";
import Team from "@/components/Team/Team.index";
import Background from "@/components/background/Background";
import FadeInWhenVisible from "@/components/utils/FadeInWhenVisible";

export default function Home() {
    return (
        <div className="flex flex-col gap-32">
            <Background/>
            <Navbar />
            <Hero />
            <FadeInWhenVisible>
                <Projects />
            </FadeInWhenVisible>

            <FadeInWhenVisible>
                <Events />
            </FadeInWhenVisible>

            <FadeInWhenVisible>
                <Team />
            </FadeInWhenVisible>
            {/* <Newsletter /> */}
            <FadeInWhenVisible>
                <Footer />
            </FadeInWhenVisible>
        </div>
    );
}
