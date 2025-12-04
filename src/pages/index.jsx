"use client";

export default function Home() {
  return (
    <div style={{ width: "100%", height: "100vh" }}>
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
