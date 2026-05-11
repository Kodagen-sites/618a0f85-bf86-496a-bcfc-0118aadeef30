import Link from "next/link";

export default function NotFound() {
  return (
    <main
      style={{
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
          404
        </p>
        <h1
          style={{
            fontSize: 32,
            fontWeight: 400,
            lineHeight: 1.2,
            margin: "0 0 24px",
          }}
        >
          The page you were looking for has been moved or is no longer
          available.
        </h1>
        <Link
          href="/"
          style={{
            display: "inline-block",
            padding: "12px 24px",
            border: "1px solid rgba(244,241,235,0.4)",
            color: "#f4f1eb",
            fontSize: 11,
            letterSpacing: "0.28em",
            textTransform: "uppercase",
            textDecoration: "none",
          }}
        >
          Return Home
        </Link>
      </div>
    </main>
  );
}
