import RegistrationMain from "@/components/registrations/RegistrationMain";
import "../../components/registrations/registration.css";
import Footer from "@/components/Footer/Footer.index";
import Background from "@/components/background/Background";
import supabase from "@/supabase";

export default async function registrationPages() {


    const { data: clubInfoData, error: infoError } = await supabase.from("club_info").select("*").single();

    if (infoError)
        return;


    // const supabase = createClientComponentClient<Database>()
    //
    //
    // const [clubInfo, setClubInfo] = useState<Database["public"]["Tables"]["club_info"]["Row"]>()
    //

    // const [hydrated, setHydrated] = useState(false);
    // useEffect(() => {
    //     setHydrated(true);
    //     const fetchClubInfo = async () => {
    //         const {data: clubInfoData, error: infoError} = await supabase.from("club_info").select("*").single();
    //
    //         if(clubInfoData){
    //             setClubInfo(clubInfoData)
    //         }
    //     }
    //
    //
    // }, []);
    //

    // if (!hydrated) {
    //     // Returns null on first render, so the client and server match
    //     return null;
    // }
    //


    return (
        // <div className={"bgGradientPage"}>
        <>
            <Background />
            <div className="flex items-center justify-center py-6 lg:py-20">
                <RegistrationMain />
            </div>
            <Footer clubInfo={clubInfoData} />
        </>
        // </div>
    );
}
