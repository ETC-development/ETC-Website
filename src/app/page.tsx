import {
    CellsSection,
    Crew,
    Feed,
    Footer,
    Header,
    Hero,
    Join,
    Manifesto,
    ScrollChrome,
    Shipped,
    UniverseSection,
} from "@/components/sections";
import { CLUB as club } from "@/data/club";
import { OTHER_EVENTS, SEASON_EVENTS } from "@/data/events";
import { PROJECTS } from "@/data/projects";
import { CREW } from "@/lib/data";

export default function Home() {
    return (
        <>
            <ScrollChrome />
            <Header club={club} />
            <main id="main" style={{ position: "relative", zIndex: 2 }}>
                <Hero club={club} />
                <Manifesto club={club} />
                <UniverseSection events={SEASON_EVENTS} other={OTHER_EVENTS} club={club} />
                <Shipped projects={PROJECTS} />
                <CellsSection />
                <Crew crew={CREW} />
                <Feed club={club} />
                <Join club={club} />
            </main>
            <Footer club={club} />
        </>
    );
}
