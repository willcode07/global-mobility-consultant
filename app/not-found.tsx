import Link from 'next/link';

export default function NotFound() {
  return (
    <html lang="en">
      <body className="flex min-h-screen flex-col items-center justify-center bg-white px-4 font-sans text-nexo-black">
        <h1 className="text-3xl font-bold">Page not found</h1>
        <p className="mt-2 text-nexo-gray">The page you are looking for does not exist.</p>
        <Link
          href="/en/"
          className="mt-6 rounded-lg bg-nexo-purple px-5 py-2.5 text-sm font-semibold text-white hover:bg-nexo-purple-dark"
        >
          Back to home
        </Link>
      </body>
    </html>
  );
}
