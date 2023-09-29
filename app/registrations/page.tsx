"use client"
import Main from "@/components/registrations/Main";
import "../../components/registrations/registration.css";
import Footer from "@/components/Footer/Footer.index";
import { useEffect, useState } from "react";

export default function registrationPages() {

    const [hydrated, setHydrated] = useState(false);
    useEffect(() => {
        setHydrated(true);
    }, []);


    if (!hydrated) {
        // Returns null on first render, so the client and server match
        return null;
    }

    return (
        <div className={"bgGradientPage"}>
            <div className="flex items-center justify-center py-6 lg:py-20">
                <Main />
            </div>
            <Footer />
        </div>
    );
}
