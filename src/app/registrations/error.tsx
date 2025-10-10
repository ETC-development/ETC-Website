'use client';

import { useEffect } from 'react';

export default function RegistrationError({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    useEffect(() => {
        console.error('Registration page error:', error);
    }, [error]);

    return (
        <div className="flex min-h-screen flex-col items-center justify-center bgGradientPage px-4">
            <div className="w-full max-w-md rounded-lg bg-white p-8 shadow-2xl">
                <h2 className="mb-4 text-center text-2xl font-bold text-gray-800">
                    Registration Error
                </h2>
                <p className="mb-6 text-center text-gray-600">
                    We couldn't load the registration form. Please try again.
                </p>
                <div className="flex flex-col gap-3">
                    <button
                        onClick={reset}
                        className="w-full rounded-lg bg-blue-600 px-4 py-3 font-semibold text-white transition-colors hover:bg-blue-700"
                    >
                        Try again
                    </button>
                    <a
                        href="/"
                        className="w-full rounded-lg border border-gray-300 px-4 py-3 text-center font-semibold text-gray-700 transition-colors hover:bg-gray-100"
                    >
                        Go home
                    </a>
                </div>
            </div>
        </div>
    );
}
