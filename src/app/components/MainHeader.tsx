"use client";
import Link from "next/link";
import { useState } from "react";

export default function MainHeader() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 shadow-lg bg-background/95 backdrop-blur-lg border-b border-border/30">
            <div className="absolute inset-0 bg-linear-to-r from-border/5 to-border/2"></div>

            <nav className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center space-x-3 group">
                        <span className="text-2xl font-bold bg-linear-to-r from-btn to-btn/70 bg-clip-text text-transparent">
                            Gamer Bax
                        </span>
                    </div>

                    {/* <div className="hidden md:flex items-center space-x-8">
                        <Link
                            href="/"
                            className="text-text hover:text-border font-medium transition-colors duration-200 relative group"
                        >
                            خانه
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-border transition-all duration-300 group-hover:w-full"></span>
                        </Link>
                        <Link
                            href="/blog"
                            className="text-text hover:text-border font-medium transition-colors duration-200 relative group"
                        >
                            بلاگ
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-border transition-all duration-300 group-hover:w-full"></span>
                        </Link>
                        <Link
                            href="#"
                            className="text-text hover:text-border font-medium transition-colors duration-200 relative group"
                        >
                            خدمات
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-border transition-all duration-300 group-hover:w-full"></span>
                        </Link>
                        <Link
                            href="#"
                            className="text-text hover:text-border font-medium transition-colors duration-200 relative group"
                        >
                            درباره ما
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-border transition-all duration-300 group-hover:w-full"></span>
                        </Link>
                    </div> */}

                    <div className="flex items-center  space-x-4">
                        <Link href="#">
                            <button className="hidden md:block bg-linear-to-r from-btn to-btn/80 text-text px-6 py-2 rounded-full font-medium hover:from-btn/90 hover:to-btn/70 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 transform">
                                عضویت
                            </button>
                        </Link>

                        <button
                            className="md:hidden p-2 rounded-lg text-text hover:bg-btn/10 transition-colors duration-200"
                            onClick={() =>
                                setIsMenuOpen(!isMenuOpen)
                            }
                        >
                            <svg
                                className="w-6 h-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16M4 18h16"
                                ></path>
                            </svg>
                        </button>
                    </div>
                </div>

                <div
                    className={`md:hidden fixed top-16 right-0 h-[calc(100vh-4rem)] w-64 bg-background/98 backdrop-blur-lg border-l border-border/30 shadow-lg transition-transform duration-300 ease-in-out ${
                        isMenuOpen
                            ? "translate-x-0"
                            : "translate-x-full"
                    }`}
                >
                    <div className="px-4 py-6 space-y-4 text-center">
                        <Link
                            href="/"
                            className="block text-text hover:text-border font-medium py-2 transition-colors duration-200"
                        >
                            خانه
                        </Link>
                        <Link
                            href="/blog"
                            className="block text-text hover:text-border font-medium py-2 transition-colors duration-200"
                        >
                            بلاگ
                        </Link>
                        <Link
                            href="#"
                            className="block text-text hover:text-border font-medium py-2 transition-colors duration-200"
                        >
                            خدمات
                        </Link>
                        <Link
                            href="#"
                            className="block text-text hover:text-border font-medium py-2 transition-colors duration-200"
                        >
                            درباره ما
                        </Link>

                        <Link href="#">
                            <button className="w-2/3 bg-linear-to-r from-btn to-btn/80 text-text px-6 py-3 rounded-full font-medium hover:from-btn/90 hover:to-btn/70 transition-all duration-300 shadow-lg mt-4">
                                عضویت
                            </button>
                        </Link>
                    </div>
                </div>
            </nav>
        </header>
    );
}
