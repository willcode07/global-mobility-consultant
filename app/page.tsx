import type { Metadata } from 'next';

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? '';
const target = `${basePath}/en/`;

export const metadata: Metadata = {
  title: 'Global Mobility Consultant',
  description: 'Redirecting…',
  robots: { index: false, follow: false },
  other: {
    'http-equiv:refresh': `0; url=${target}`,
  },
};

export default function RootPage() {
  return (
    <html lang="en">
      <head>
        <meta httpEquiv="refresh" content={`0; url=${target}`} />
        <link rel="canonical" href={target} />
        <script
          dangerouslySetInnerHTML={{
            __html: `window.location.replace(${JSON.stringify(target)});`,
          }}
        />
      </head>
      <body
        style={{
          fontFamily: 'system-ui, sans-serif',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '100vh',
          margin: 0,
          color: '#374151',
        }}
      >
        <p>
          Redirecting to <a href={target}>{target}</a>…
        </p>
      </body>
    </html>
  );
}
