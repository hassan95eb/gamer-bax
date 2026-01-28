"use client";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function MainHeader() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [isHovering, setIsHovering] = useState("");

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 10) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () =>
            window.removeEventListener(
                "scroll",
                handleScroll,
            );
    }, []);

    return (
        <header
            className={`sticky top-0 z-50 transition-all duration-300 ${
                scrolled
                    ? "shadow-xl bg-background/95 backdrop-blur-lg border-b border-border/30"
                    : "shadow-lg bg-linear-to-r from-background/90 to-background/70 backdrop-blur-md"
            }`}
        >
            <div
                className={`absolute inset-0 transition-opacity duration-500 ${
                    scrolled
                        ? "bg-linear-to-r from-purple-900/10 via-pink-900/5 to-orange-900/10"
                        : "bg-linear-to-r from-purple-900/20 via-pink-900/10 to-orange-900/20"
                }`}
            ></div>

            {/* Animated background elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-10 -left-10 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-orange-500/10 rounded-full blur-3xl animate-pulse"></div>
            </div>

            <nav className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center space-x-3 group">
                        <div className="relative">
                            <div className="absolute inset-0 bg-linear-to-r from-purple-500 to-orange-500 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-300"></div>
                            <div className="relative bg-linear-to-r from-purple-600 to-orange-600 rounded-lg p-1">
                                <svg
                                    className="w-6 h-6 text-white"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                >
                                    <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                                    <path
                                        fillRule="evenodd"
                                        d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </div>
                        </div>
                        <span className="text-2xl font-bold bg-linear-to-r from-purple-500 via-pink-500 to-orange-500 bg-clip-text text-transparent transition-all duration-300 group-hover:scale-105 transform">
                            Gamer Bax
                        </span>
                    </div>

                    <div className="hidden md:flex items-center space-x-8">
                        <Link
                            href="/"
                            className={`text-text hover:text-purple-400 font-medium transition-all duration-300 relative group py-1`}
                            onMouseEnter={() =>
                                setIsHovering("خانه")
                            }
                            onMouseLeave={() =>
                                setIsHovering("")
                            }
                        >
                            خانه
                            <span
                                className={`absolute -bottom-1 left-0 h-0.5 bg-linear-to-r from-purple-500 to-orange-500 transition-all duration-300 ${
                                    isHovering === "خانه"
                                        ? "w-full"
                                        : "w-0"
                                }`}
                            ></span>
                            {isHovering === "خانه" && (
                                <span className="absolute -top-1 -left-2 -right-2 h-8 bg-purple-500/10 rounded-lg blur-md -z-10"></span>
                            )}
                        </Link>
                        <Link
                            href="/blog"
                            className={`text-text hover:text-pink-400 font-medium transition-all duration-300 relative group py-1`}
                            onMouseEnter={() =>
                                setIsHovering("بلاگ")
                            }
                            onMouseLeave={() =>
                                setIsHovering("")
                            }
                        >
                            بلاگ
                            <span
                                className={`absolute -bottom-1 left-0 h-0.5 bg-linear-to-rrom-pink-500 to-orange-500 transition-all duration-300 ${
                                    isHovering === "بلاگ"
                                        ? "w-full"
                                        : "w-0"
                                }`}
                            ></span>
                            {isHovering === "بلاگ" && (
                                <span className="absolute -top-1 -left-2 -right-2 h-8 bg-pink-500/10 rounded-lg blur-md -z-10"></span>
                            )}
                        </Link>
                        <Link
                            href="/store"
                            className={`text-text hover:text-orange-400 font-medium transition-all duration-300 relative group py-1`}
                            onMouseEnter={() =>
                                setIsHovering("فروشگاه")
                            }
                            onMouseLeave={() =>
                                setIsHovering("")
                            }
                        >
                            فروشگاه
                            <span
                                className={`absolute -bottom-1 left-0 h-0.5 bg-linear-to-r from-orange-500 to-pink-500 transition-all duration-300 ${
                                    isHovering === "فروشگاه"
                                        ? "w-full"
                                        : "w-0"
                                }`}
                            ></span>
                            {isHovering === "فروشگاه" && (
                                <span className="absolute -top-1 -left-2 -right-2 h-8 bg-orange-500/10 rounded-lg blur-md -z-10"></span>
                            )}
                        </Link>
                        <Link
                            href="#"
                            className={`text-text hover:text-purple-400 font-medium transition-all duration-300 relative group py-1`}
                            onMouseEnter={() =>
                                setIsHovering("درباره ما")
                            }
                            onMouseLeave={() =>
                                setIsHovering("")
                            }
                        >
                            درباره ما
                            <span
                                className={`absolute -bottom-1 left-0 h-0.5 bg-linear-to-r from-purple-500 to-pink-500 transition-all duration-300 ${
                                    isHovering ===
                                    "درباره ما"
                                        ? "w-full"
                                        : "w-0"
                                }`}
                            ></span>
                            {isHovering === "درباره ما" && (
                                <span className="absolute -top-1 -left-2 -right-2 h-8 bg-purple-500/10 rounded-lg blur-md -z-10"></span>
                            )}
                        </Link>
                    </div>

                    <div className="flex items-center space-x-4">
                        <Link href="#">
                            <button className="hidden md:block relative group">
                                <div className="absolute inset-0 bg-linear-to-r from-purple-600 to-orange-600 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-300"></div>
                                <div className="relative bg-linear-to-r from-purple-600 to-orange-600 text-white px-6 py-2 rounded-full font-medium transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 transform flex items-center space-x-2">
                                    <svg
                                        className="w-4 h-4"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"
                                        ></path>
                                    </svg>
                                    <span>عضویت</span>
                                </div>
                            </button>
                        </Link>

                        <button
                            className={`md:hidden p-2 rounded-lg text-text transition-all duration-200 ${
                                isMenuOpen
                                    ? "bg-linear-to-r from-purple-500/20 to-orange-500/20"
                                    : "hover:bg-purple-500/10"
                            }`}
                            onClick={() =>
                                setIsMenuOpen(!isMenuOpen)
                            }
                        >
                            <svg
                                className={`w-6 h-6 transition-all duration-300 ${isMenuOpen ? "text-purple-400" : ""}`}
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                {isMenuOpen ? (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M6 18L18 6M6 6l12 12"
                                    ></path>
                                ) : (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h16M4 18h16"
                                    ></path>
                                )}
                            </svg>
                        </button>
                    </div>
                </div>

                <div
                    className={`md:hidden fixed top-16 right-0 h-[calc(100vh-4rem)] w-64 backdrop-blur-lg border-l border-border/30 shadow-xl transition-all duration-300 ease-in-out ${
                        isMenuOpen
                            ? "translate-x-0 bg-linear-to-b from-background/95 to-background/90"
                            : "translate-x-full"
                    }`}
                >
                    <div className="px-4 py-6 space-y-4">
                        <div className="mb-6">
                            <div className="h-1 w-full bg-linear-to-r from-purple-500 to-orange-500 rounded-full"></div>
                        </div>

                        <Link
                            href="/"
                            className="block text-text hover:text-purple-400 font-medium py-3 px-4 rounded-lg transition-all duration-200 hover:bg-purple-500/10"
                        >
                            <div className="flex items-center space-x-3">
                                <svg
                                    className="w-5 h-5"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                                    ></path>
                                </svg>
                                <span>خانه</span>
                            </div>
                        </Link>

                        <Link
                            href="/blog"
                            className="block text-text hover:text-pink-400 font-medium py-3 px-4 rounded-lg transition-all duration-200 hover:bg-pink-500/10"
                        >
                            <div className="flex items-center space-x-3">
                                <svg
                                    className="w-5 h-5"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
                                    ></path>
                                </svg>
                                <span>بلاگ</span>
                            </div>
                        </Link>

                        <Link
                            href="/store"
                            className="block text-text hover:text-orange-400 font-medium py-3 px-4 rounded-lg transition-all duration-200 hover:bg-orange-500/10"
                        >
                            <div className="flex items-center space-x-3">
                                <svg
                                    className="w-5 h-5"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                    ></path>
                                </svg>
                                <span>فروشگاه</span>
                            </div>
                        </Link>

                        <Link
                            href="#"
                            className="block text-text hover:text-purple-400 font-medium py-3 px-4 rounded-lg transition-all duration-200 hover:bg-purple-500/10"
                        >
                            <div className="flex items-center space-x-3">
                                <svg
                                    className="w-5 h-5"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                    ></path>
                                </svg>
                                <span>درباره ما</span>
                            </div>
                        </Link>

                        <div className="pt-4 mt-4 border-t border-border/30">
                            <Link href="#">
                                <button className="w-full relative group">
                                    <div className="absolute inset-0 bg-linear-to-r from-purple-600 to-orange-600 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-300"></div>
                                    <div className="relative bg-linear-to-r from-purple-600 to-orange-600 text-white px-6 py-3 rounded-full font-medium transition-all duration-300 shadow-lg hover:shadow-xl transform flex items-center justify-center space-x-2">
                                        <svg
                                            className="w-4 h-4"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"
                                            ></path>
                                        </svg>
                                        <span>عضویت</span>
                                    </div>
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
}
