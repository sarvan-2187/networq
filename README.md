## Networq: Lightweight Video Conferencing Platform

#### Architecture Diagram:
<img width="2816" height="1536" alt="networq_architecture" src="https://github.com/user-attachments/assets/3778a493-78ff-4b5a-a46c-68451c831ed4" />

#### Description: This project is an attempt to make a Completely Light Weight No Sign-up Video Calls Platform
---
#### How It Works

1. **Room Creation**
    - User initiates a meeting from the homepage
    - A unique room ID is generated on the client
    - Clean URL structure (/networq/room/:roomId)

2. **User Identity**
    - Users enter a display name before joining
    - Name is stored in session storage for the active session
    - No authentication or persistent user data

3. **Video & Audio Streaming**
    - ZegoUIKitPrebuilt initializes the meeting
    - Handles real-time audio, video, and signaling
    - Low-latency media relay between participants

4. **Pre-Join & Session Handling**
    - Pre-join screen displayed only once per session
    - Direct entry into the meeting after first join
    - Clean exit without showing rejoin screens

5. **Session Termination**
    - Leaving a meeting redirects users directly to the home page
    - SDK UI is destroyed to prevent residual screens

---
#### Tech Stacks
- Next.js (App Router, Frontend & Routing)
- React & TypeScript
- ZEGOCLOUD (ZegoUIKitPrebuilt SDK)
- Tailwind CSS
- Aceternity UI (for animations & effects)
- UUID (for room generation)

---
#### Key Design Decisions
- No authentication or sign-up flow
- Client-side room creation for speed
- Session-based identity handling
- Minimal UI with focus on usability
- SDK-driven media handling for reliability
