'use client';

import { createContext, useEffect } from 'react';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { useRouter } from 'next/navigation';
import { Database } from "@/lib/database.types";

export const AuthContext = createContext({});

const AuthProvider = ({ accessToken, children }: any) => {
    const supabase = createClientComponentClient<Database>();
    const router = useRouter();

    useEffect(() => {
        const {
            data: { subscription: authListener },
        } = supabase.auth.onAuthStateChange((event, session) => {
            if (session?.access_token !== accessToken) {
                // router.push("/login")
                // router.replace("/registrations")
                // location.reload()
            }
        });

        return () => {
            authListener?.unsubscribe();
        };
    }, [accessToken, supabase, router]);

    return children;
};

export default AuthProvider;