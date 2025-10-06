'use client';

import { useEffect } from 'react';

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    useEffect(() => {
        // Log the error to an error reporting service
        console.error('Application error:', error);
    }, [error]);

    return (
        <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-gray-900 to-gray-800 px-4">
            <div className="w-full max-w-md rounded-lg bg-white p-8 shadow-2xl">
                <div className="mb-6 flex justify-center">
                    <svg
                        className="h-16 w-16 text-red-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                        />
                    </svg>
                </div>
                <h2 className="mb-4 text-center text-2xl font-bold text-gray-800">
                    Something went wrong!
                </h2>
                <p className="mb-6 text-center text-gray-600">
                    We apologize for the inconvenience. Please try again.
                </p>
                {error.message && (
                    <div className="mb-4 rounded-md bg-red-50 p-3">
                        <p className="text-sm text-red-800">{error.message}</p>
                    </div>
                )}
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
