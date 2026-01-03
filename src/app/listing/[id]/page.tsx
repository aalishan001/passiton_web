/**
 * Listing Deep Link Page
 * 
 * This page handles deep links to listings (passiton.app/listing/[id])
 * Shows a beautifully designed preview and prompts users to open the app.
 */

import Link from "next/link";
import { Metadata } from "next";

interface PageProps {
    params: Promise<{ id: string }>;
}

export default async function ListingPage({ params }: PageProps) {
    const { id } = await params;

    // Construct deep link URL for the app
    const appDeepLink = `intent://passiton.app/listing/${id}#Intent;scheme=https;package=com.thirdeyecreative.passiton;S.browser_fallback_url=https://play.google.com/store/apps/details?id=com.thirdeyecreative.passiton;end`;
    const playStoreLink = "https://play.google.com/store/apps/details?id=com.thirdeyecreative.passiton";
    const appStoreLink = "https://apps.apple.com/app/passiton";

    return (
        <main className="min-h-screen bg-gradient-to-br from-[#0A1F05] via-[#172D01] to-[#317039] flex items-center justify-center p-4 sm:p-6 relative overflow-hidden">
            {/* Animated background elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute -top-40 -right-40 w-96 h-96 bg-[#BDF906]/10 rounded-full blur-3xl animate-pulse" />
                <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-[#317039]/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#BDF906]/5 rounded-full blur-3xl" />
            </div>

            <div className="relative z-10 max-w-md w-full">
                {/* Glass Card */}
                <div className="backdrop-blur-xl bg-white/95 rounded-3xl shadow-2xl p-8 text-center border border-white/20">
                    {/* Logo */}
                    <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-[#BDF906] to-[#9ACC05] rounded-2xl flex items-center justify-center shadow-lg shadow-[#BDF906]/30 transform hover:scale-105 transition-transform duration-300">
                        <span className="text-4xl">🎁</span>
                    </div>

                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#172D01]/10 rounded-full mb-4">
                        <span className="w-2 h-2 bg-[#BDF906] rounded-full animate-pulse" />
                        <span className="text-xs font-medium text-[#172D01]">Shared with you</span>
                    </div>

                    {/* Heading */}
                    <h1 className="text-2xl sm:text-3xl font-bold text-[#0A0C02] mb-2 tracking-tight">
                        Someone Shared an Item!
                    </h1>

                    <p className="text-gray-600 mb-8 leading-relaxed">
                        A Passiton user wants you to check out this listing. Open the app to request this free item!
                    </p>

                    {/* Open App Button - Primary CTA */}
                    <a
                        href={appDeepLink}
                        className="group block w-full bg-gradient-to-r from-[#BDF906] to-[#9ACC05] text-[#0A0C02] font-bold py-4 px-6 rounded-2xl mb-4 shadow-lg shadow-[#BDF906]/30 hover:shadow-xl hover:shadow-[#BDF906]/40 transform hover:-translate-y-0.5 transition-all duration-200"
                    >
                        <span className="flex items-center justify-center gap-2">
                            View in Passiton
                            <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                            </svg>
                        </span>
                    </a>

                    {/* Divider */}
                    <div className="flex items-center gap-4 my-6">
                        <div className="flex-1 h-px bg-gradient-to-r from-transparent to-gray-200" />
                        <span className="text-xs text-gray-400 font-medium uppercase tracking-wider">Get the App</span>
                        <div className="flex-1 h-px bg-gradient-to-l from-transparent to-gray-200" />
                    </div>

                    {/* App Store Links */}
                    <div className="flex gap-3 justify-center">
                        <a
                            href={playStoreLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 bg-[#0A0C02] text-white py-3 px-5 rounded-xl text-sm font-medium hover:bg-[#1a1c15] transform hover:-translate-y-0.5 transition-all duration-200 shadow-md hover:shadow-lg"
                        >
                            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                            </svg>
                            Google Play
                        </a>
                        <a
                            href={appStoreLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 bg-[#0A0C02] text-white py-3 px-5 rounded-xl text-sm font-medium hover:bg-[#1a1c15] transform hover:-translate-y-0.5 transition-all duration-200 shadow-md hover:shadow-lg"
                        >
                            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.1,22C7.79,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.1 17.41,12.63C17.44,15.65 20.06,16.66 20.09,16.67C20.06,16.74 19.67,18.11 18.71,19.5M13,3.5C13.73,2.67 14.94,2.04 15.94,2C16.07,3.17 15.6,4.35 14.9,5.19C14.21,6.04 13.07,6.7 11.95,6.61C11.8,5.46 12.36,4.26 13,3.5Z" />
                            </svg>
                            App Store
                        </a>
                    </div>

                    {/* Back to Home */}
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 mt-8 text-[#317039] hover:text-[#172D01] text-sm font-medium transition-colors"
                    >
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                        </svg>
                        Back to Passiton.app
                    </Link>
                </div>

                {/* Footer text */}
                <p className="text-center text-white/60 text-xs mt-6">
                    Free items from your community. No money needed.
                </p>
            </div>
        </main>
    );
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { id } = await params;
    return {
        title: `Free Item on Passiton | Request Now`,
        description: "Someone shared a free item with you on Passiton! Open the app to request it.",
        openGraph: {
            title: `Free Item on Passiton`,
            description: "Someone shared a free item with you! Open Passiton to request it.",
            url: `https://passiton.app/listing/${id}`,
            siteName: "Passiton",
            type: "website",
        },
    };
}
