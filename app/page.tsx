import Events from "@/components/Events/Events.index";
import Footer from "@/components/Footer/Footer.index";
import Hero from "@/components/Hero/Hero.index";
import Navbar from "@/components/NavBar/Navbar.index";
import Newsletter from "@/components/Newsletter/Newsletter.index";
import Projects from "@/components/Projects/Projects.index";
import Team from "@/components/Team/Team.index";
import FadeInWhenVisible from "@/components/utils/FadeInWhenVisible";

export default function Home() {
    return (
        <>
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
            {/* <Footer /> */}
            {/* <div className='font-montserrat'>This is a sample text</div> */}
            {/* <div className='font-azonix'>This is a sample text</div> */}
        </>
    );
}
