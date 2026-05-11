"use client";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
          background: "#050505",
          color: "#f4f1eb",
          fontFamily: "system-ui, sans-serif",
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "2rem",
        }}
      >
        <div style={{ maxWidth: 480, textAlign: "center" }}>
          <p
            style={{
              fontSize: 11,
              letterSpacing: "0.32em",
              textTransform: "uppercase",
              opacity: 0.6,
              marginBottom: 16,
            }}
          >
            Error
          </p>
          <h1
            style={{
              fontSize: 32,
              fontWeight: 400,
              lineHeight: 1.2,
              margin: "0 0 24px",
            }}
          >
            Something has gone quietly wrong.
          </h1>
          <button
            onClick={() => reset()}
            style={{
              display: "inline-block",
              padding: "12px 24px",
              border: "1px solid rgba(244,241,235,0.4)",
              background: "transparent",
              color: "#f4f1eb",
              fontSize: 11,
              letterSpacing: "0.28em",
              textTransform: "uppercase",
              cursor: "pointer",
            }}
          >
            Try Again
          </button>
        </div>
      </body>
    </html>
  );
}
