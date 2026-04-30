import Link from 'next/link';

export default function NotFound() {
  return (
    <html lang="en">
      <body
        style={{
          fontFamily: 'system-ui, sans-serif',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '100vh',
          margin: 0,
          color: '#374151',
          padding: '1rem',
          textAlign: 'center',
        }}
      >
        <h1 style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>Page not found</h1>
        <p style={{ marginBottom: '1.5rem' }}>
          The page you&apos;re looking for doesn&apos;t exist.
        </p>
        <Link
          href="/en"
          style={{
            background: '#2563eb',
            color: 'white',
            padding: '0.75rem 1.5rem',
            borderRadius: '0.5rem',
            textDecoration: 'none',
          }}
        >
          Go home
        </Link>
      </body>
    </html>
  );
}
