"use client";

import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function LoginPage() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [role, setRole] = useState("MEMBER");
    const [showPassword, setShowPassword] = useState(false);

    return (
        <div className="min-h-screen bg-black flex items-center justify-center px-4">
            <div className="w-full max-w-5xl h-[600px] bg-[#1a1a1a] rounded-2xl overflow-hidden flex shadow-2xl">

                {/* LEFT PANEL – VISUAL */}
                <div className="hidden md:flex w-1/2 relative">
                    <Image
                        src="/aurora.webp"
                        alt="Login visual"
                        fill
                        className="object-cover"
                        priority
                    />

                    <div className="absolute inset-0 bg-black/40 flex flex-col justify-end p-10">
                        <p className="text-4xl font-light text-white leading-snug">
                            Be a Part of <br />
                            <span className="font-semibold">Something Beautiful</span>
                        </p>
                    </div>
                </div>

                {/* RIGHT PANEL – FORM */}
                <div className="w-full md:w-1/2 flex items-center justify-center">
                    <form
                        className="w-full max-w-sm px-8 space-y-5"
                    >
                        <div className="flex justify-center mb-2">
                            <Image
                                src="/Networq.png"
                                alt="Logo"
                                width={90}
                                height={20}
                                className="rounded-3xl border border-blue-200"
                            />
                        </div>

                        <h2 className="text-center text-2xl font-semibold text-white">
                            Login
                        </h2>
                        <p className="text-center text-sm text-gray-400">
                            Enter your credentials to access your account
                        </p>

                        {/* Username */}
                        <div>
                            <label className="text-sm text-gray-400">Username</label>
                            <input
                                className="mt-1 w-full bg-[#111] border border-gray-700 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-blue-400"
                                placeholder="Username"
                                onChange={(e) => setUsername(e.target.value)}
                            />
                        </div>

                        {/* Password */}
                        <div>
                            <label className="text-sm text-gray-400">Password</label>
                            <div className="relative mt-1">
                                <input
                                    type={showPassword ? "text" : "password"}
                                    className="w-full bg-[#111] border border-gray-700 rounded-lg px-3 py-2 pr-10 text-sm text-white focus:outline-none focus:border-blue-400"
                                    placeholder="Password"
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword((p) => !p)}
                                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-blue-400"
                                >
                                    {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                                </button>
                            </div>
                        </div>

                        {/* Submit */}
                        <button
                            type="submit"
                            className="w-full mt-2 bg-blue-400 text-black font-semibold py-2 rounded-lg hover:bg-blue-300 transition"
                        >
                            Login
                        </button>

                        <div className="text-center">
                            <Link
                                href="/forgot-password"
                                className="text-sm text-blue-400 hover:underline"
                            >
                                Forgot Password?
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
