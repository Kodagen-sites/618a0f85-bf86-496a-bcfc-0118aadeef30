// Placeholder — overwritten as soon as the agent emits the real homepage.
export default function HomePage() {
  return (
    <main style={{ minHeight: '100vh', display: 'grid', placeItems: 'center', background: '#0a0a0a', color: '#fff', fontFamily: 'system-ui, sans-serif' }}>
      <div style={{ textAlign: 'center' }}>
        <p style={{ fontSize: 12, letterSpacing: '0.22em', textTransform: 'uppercase', opacity: 0.4 }}>Building</p>
        <h1 style={{ marginTop: 12, fontSize: 24, fontWeight: 600 }}>i want to build a landing page for a real estate company...</h1>
        <p style={{ marginTop: 8, fontSize: 14, opacity: 0.55 }}>Sections will appear here as they're generated.</p>
      </div>
    </main>
  );
}
