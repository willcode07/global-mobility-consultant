'use client';

import { useEffect } from 'react';

export default function RootPage() {
  useEffect(() => {
    const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
    window.location.replace(`${basePath}/en/`);
  }, []);

  return (
    <html lang="en">
      <head>
        <meta httpEquiv="refresh" content={`0;url=${process.env.NEXT_PUBLIC_BASE_PATH || ''}/en/`} />
      </head>
      <body>
        <p>
          <a href={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/en/`}>Continue to Nexo Mobility</a>
        </p>
      </body>
    </html>
  );
}
