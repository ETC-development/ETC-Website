import Main from "@/components/registrations/Main";
import "../../components/registrations/registration.css";
import Footer from "@/components/Footer/Footer.index";

export default function registrationPages() {
    return (
        <div className={"bgGradientPage"}>
            <div className="flex items-center justify-center py-6 lg:py-20">
                <Main />
            </div>
            <Footer />
        </div>
    );
}
