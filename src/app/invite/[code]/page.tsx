/**
 * Referral Invite Deep Link Page
 * 
 * This page handles deep links to referral invites (passiton.app/invite/[code])
 * Shows a special referral welcome with bonus Karma and prompts users to download the app.
 */

import Link from "next/link";
import { Metadata } from "next";

interface PageProps {
    params: Promise<{ code: string }>;
}

export default async function InvitePage({ params }: PageProps) {
    const { code } = await params;

    // Construct deep link URL for the app with fallback to Play Store
    const appDeepLink = `intent://passiton.app/invite/${code}#Intent;scheme=https;package=com.thirdeyecreative.passiton;S.browser_fallback_url=https://play.google.com/store/apps/details?id=com.thirdeyecreative.passiton;end`;
    const playStoreLink = "https://play.google.com/store/apps/details?id=com.thirdeyecreative.passiton";
    const appStoreLink = "https://apps.apple.com/app/passiton";

    return (
        <main className="min-h-screen bg-gradient-to-br from-[#0A1F05] via-[#172D01] to-[#317039] flex items-center justify-center p-4 sm:p-6 relative overflow-hidden">
            {/* Animated background elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute -top-40 -right-40 w-96 h-96 bg-[#BDF906]/10 rounded-full blur-3xl animate-pulse" />
                <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-[#317039]/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#BDF906]/5 rounded-full blur-3xl" />
                {/* Confetti-like decorative elements */}
                <div className="absolute top-20 left-10 w-4 h-4 bg-[#BDF906]/40 rounded-full animate-bounce" style={{ animationDelay: '0.5s' }} />
                <div className="absolute top-40 right-20 w-3 h-3 bg-[#FFD700]/40 rounded-full animate-bounce" style={{ animationDelay: '1s' }} />
                <div className="absolute bottom-40 left-20 w-5 h-5 bg-[#BDF906]/30 rounded-full animate-bounce" style={{ animationDelay: '1.5s' }} />
            </div>

            <div className="relative z-10 max-w-md w-full">
                {/* Glass Card */}
                <div className="backdrop-blur-xl bg-white/95 rounded-3xl shadow-2xl p-8 text-center border border-white/20">
                    {/* Gift Icon */}
                    <div className="relative w-28 h-28 mx-auto mb-6">
                        <div className="absolute inset-0 bg-gradient-to-br from-[#BDF906] to-[#9ACC05] rounded-3xl transform rotate-6 shadow-lg shadow-[#BDF906]/30" />
                        <div className="absolute inset-0 bg-gradient-to-br from-[#BDF906] to-[#9ACC05] rounded-3xl flex items-center justify-center transform hover:scale-105 transition-transform duration-300">
                            <span className="text-5xl">🎁</span>
                        </div>
                    </div>

                    {/* Celebration badge */}
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#FFD700]/20 to-[#FFD700]/10 rounded-full mb-4 border border-[#FFD700]/20">
                        <span className="text-lg">🎉</span>
                        <span className="text-sm font-semibold text-[#0A0C02]">Special Invite</span>
                    </div>

                    {/* Heading */}
                    <h1 className="text-2xl sm:text-3xl font-bold text-[#0A0C02] mb-2 tracking-tight">
                        You&apos;re Invited!
                    </h1>

                    <p className="text-gray-600 mb-6 leading-relaxed">
                        A friend wants you to join the Passiton community — where giving brings joy!
                    </p>

                    {/* Referral Bonus Card */}
                    <div className="relative bg-gradient-to-r from-[#BDF906] to-[#9FD904] rounded-2xl p-5 mb-6 shadow-lg shadow-[#BDF906]/20 overflow-hidden">
                        <div className="absolute -right-4 -top-4 w-20 h-20 bg-white/20 rounded-full blur-2xl" />
                        <div className="relative">
                            <p className="text-[#0A0C02] text-lg font-bold mb-1">
                                Get 20 Karma Points Free!
                            </p>
                            <div className="flex items-center justify-center gap-2 text-[#172D01]">
                                <span className="text-sm">Your code:</span>
                                <span className="font-mono font-bold text-lg bg-white/50 px-3 py-1 rounded-lg">{code}</span>
                            </div>
                        </div>
                    </div>

                    {/* Download CTA */}
                    <a
                        href={appDeepLink}
                        className="group block w-full bg-gradient-to-r from-[#0A0C02] to-[#1a1c15] text-white font-bold py-4 px-6 rounded-2xl mb-4 shadow-lg shadow-black/20 hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200"
                    >
                        <span className="flex items-center justify-center gap-2">
                            Download & Get Bonus
                            <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                            </svg>
                        </span>
                    </a>

                    {/* App Store Links */}
                    <div className="flex gap-3 justify-center mb-6">
                        <a
                            href={playStoreLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 bg-gray-100 text-gray-800 py-3 px-5 rounded-xl text-sm font-medium hover:bg-gray-200 transform hover:-translate-y-0.5 transition-all duration-200"
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
                            className="flex items-center gap-2 bg-gray-100 text-gray-800 py-3 px-5 rounded-xl text-sm font-medium hover:bg-gray-200 transform hover:-translate-y-0.5 transition-all duration-200"
                        >
                            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.1,22C7.79,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.1 17.41,12.63C17.44,15.65 20.06,16.66 20.09,16.67C20.06,16.74 19.67,18.11 18.71,19.5M13,3.5C13.73,2.67 14.94,2.04 15.94,2C16.07,3.17 15.6,4.35 14.9,5.19C14.21,6.04 13.07,6.7 11.95,6.61C11.8,5.46 12.36,4.26 13,3.5Z" />
                            </svg>
                            App Store
                        </a>
                    </div>

                    {/* Divider */}
                    <div className="flex items-center gap-4 my-6">
                        <div className="flex-1 h-px bg-gradient-to-r from-transparent to-gray-200" />
                        <span className="text-xs text-gray-400 font-medium">How it works</span>
                        <div className="flex-1 h-px bg-gradient-to-l from-transparent to-gray-200" />
                    </div>

                    {/* Steps */}
                    <div className="text-left space-y-3">
                        {[
                            { step: 1, text: "Download the Passiton app" },
                            { step: 2, text: "Create your free account" },
                            { step: 3, text: `Enter code "${code}" during signup` },
                        ].map(({ step, text }) => (
                            <div key={step} className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl">
                                <span className="w-8 h-8 bg-gradient-to-br from-[#BDF906] to-[#9ACC05] text-[#0A0C02] rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                                    {step}
                                </span>
                                <span className="text-sm text-gray-700">{text}</span>
                            </div>
                        ))}
                    </div>

                    {/* Back to Home */}
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 mt-8 text-[#317039] hover:text-[#172D01] text-sm font-medium transition-colors"
                    >
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                        </svg>
                        Learn more about Passiton
                    </Link>
                </div>

                {/* Footer text */}
                <p className="text-center text-white/60 text-xs mt-6">
                    Freecycling made simple. Give, receive, and grow karma!
                </p>
            </div>
        </main>
    );
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { code } = await params;
    return {
        title: `You're Invited! Get 20 Free Karma Points | Passiton`,
        description: `Join Passiton with code ${code} and get 20 bonus Karma points! The freecycling app where giving brings joy.`,
        openGraph: {
            title: `Join Passiton - Get 20 Free Karma Points!`,
            description: `Use code ${code} to join Passiton and earn 20 bonus Karma points!`,
            url: `https://passiton.app/invite/${code}`,
            siteName: "Passiton",
            type: "website",
        },
    };
}
