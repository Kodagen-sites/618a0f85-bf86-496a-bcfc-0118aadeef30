"use client";

export const dynamic = "force-dynamic";

export default function GlobalError() {
  return (
    <html lang="en">
      <body style={{ margin: 0, background: "#050505", color: "#f4f1eb", fontFamily: "system-ui, sans-serif", minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", padding: "2rem" }}>
        <div style={{ maxWidth: 480, textAlign: "center" }}>
          <h1 style={{ fontSize: 32, fontWeight: 400, lineHeight: 1.2, margin: "0 0 24px" }}>
            Something has gone quietly wrong.
          </h1>
          <a href="/" style={{ display: "inline-block", padding: "12px 24px", border: "1px solid rgba(244,241,235,0.4)", color: "#f4f1eb", fontSize: 11, letterSpacing: "0.28em", textTransform: "uppercase", textDecoration: "none" }}>
            Return Home
          </a>
        </div>
      </body>
    </html>
  );
}
