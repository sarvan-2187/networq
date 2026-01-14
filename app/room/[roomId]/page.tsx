"use client";

import { useEffect, useRef, useState } from "react";
import { useParams } from "next/navigation";
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";
import { v4 as uuid } from "uuid";

export default function NetworqRoom() {
    const { roomId } = useParams<{ roomId: string }>();

    const containerRef = useRef<HTMLDivElement>(null);
    const zegoRef = useRef<any>(null);
    const hasJoined = useRef(false);

    const [name, setName] = useState<string | null>(null);

    const PREJOIN_KEY = `networq_prejoin_${roomId}`;

    // ---- JOIN ROOM ----
    
    useEffect(() => {
        if (!roomId || !name || hasJoined.current) return;

        hasJoined.current = true;

        const appID = Number(process.env.NEXT_PUBLIC_ZEGO_APP_ID);
        const serverSecret = process.env.NEXT_PUBLIC_ZEGO_SERVER_SECRET!;
        const userID = uuid();

        const shouldShowPreJoin = !sessionStorage.getItem(PREJOIN_KEY);

        const kitToken =
            ZegoUIKitPrebuilt.generateKitTokenForTest(
                appID,
                serverSecret,
                roomId,
                userID,
                name
            );

        const zp = ZegoUIKitPrebuilt.create(kitToken);
        zegoRef.current = zp;

        zp.joinRoom({
            container: containerRef.current!,
            scenario: {
                mode: ZegoUIKitPrebuilt.VideoConference,
            },

            showPreJoinView: shouldShowPreJoin,
            showScreenSharingButton: true,

            sharedLinks: [
                {
                    name: "Copy Meeting Link",
                    url: window.location.href,
                },
            ],

            onJoinRoom: () => {
                sessionStorage.setItem(PREJOIN_KEY, "true");
            },

            onLeaveRoom: () => {
                try {
                    zegoRef.current?.destroy();
                } catch { }

                if (containerRef.current) {
                    containerRef.current.innerHTML = "";
                }

                sessionStorage.removeItem("networq_name");

                window.location.replace("/");
            },
        });
    }, [roomId, name]);

    // ---- NAME ENTRY SCREEN ----
    if (!name) {
        return (
            <div className="fixed inset-0 bg-black flex items-center justify-center">
                <div className="flex flex-col gap-4 p-6 rounded-xl border border-blue-500/20 bg-black/70 backdrop-blur">
                    <h2 className="text-xl font-semibold text-white text-center">
                        Enter your name
                    </h2>

                    <input
                        type="text"
                        placeholder="Your name"
                        autoFocus
                        className="px-4 py-2 rounded-lg bg-black border border-blue-500/30
                       text-white placeholder:text-slate-500
                       focus:outline-none focus:ring-2 focus:ring-blue-500"
                        onKeyDown={(e) => {
                            if (e.key === "Enter") {
                                const value = (e.target as HTMLInputElement).value.trim();
                                if (value) {
                                    sessionStorage.setItem("networq_name", value);
                                    setName(value);
                                }
                            }
                        }}
                    />

                    <button
                        onClick={() => {
                            const input = document.querySelector<HTMLInputElement>("input");
                            if (!input?.value.trim()) return;
                            sessionStorage.setItem("networq_name", input.value.trim());
                            setName(input.value.trim());
                        }}
                        className="px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white"
                    >
                        Join Room
                    </button>
                </div>
            </div>
        );
    }

    return <div ref={containerRef} className="w-full h-screen bg-black" />;
}
