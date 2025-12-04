"use client";
import { useEffect } from "react";

export default function Home() {
    useEffect(() => {
        const script = document.createElement("script");
        <script src="/unity-build/Build/Casinino-Casinini.loader.js"></script>
        script.async = true;
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return (
        <div style={{width: "100%", height: "100vh"}}>
          <iframe
              src="/unity-build/index.html"
              width="100%"
              height="100%"
              style={{ border: "none" }}
              allowFullScreen
          />
        </div>
    );
}
