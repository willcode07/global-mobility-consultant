import Link from 'next/link';
import { withBasePath } from '@/lib/site';

type LogoProps = {
  href?: string;
  variant?: 'full' | 'mark' | 'horizontal';
  className?: string;
  inverted?: boolean;
};

export default function Logo({
  href,
  variant = 'horizontal',
  className = '',
  inverted = false,
}: LogoProps) {
  const filter = inverted ? 'brightness-0 invert' : '';

  const content =
    variant === 'mark' ? (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={withBasePath('/brand/logo-mark.png')}
        alt="Nexo Mobility"
        className={`h-9 w-auto ${filter}`}
      />
    ) : variant === 'full' ? (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={withBasePath('/brand/logo-full.png')}
        alt="Nexo Mobility — Consulting · Technology · Global Connections"
        className={`h-24 w-auto sm:h-28 md:h-32 ${filter}`}
      />
    ) : (
      <span className="flex items-center gap-2.5">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={withBasePath('/brand/logo-mark.png')}
          alt=""
          className={`h-8 w-auto ${filter}`}
          aria-hidden
        />
        <span
          className={`font-heading text-lg font-bold tracking-tight ${
            inverted ? 'text-white' : 'text-nexo-black'
          }`}
        >
          Nexo <span className="font-medium">Mobility</span>
        </span>
      </span>
    );

  if (!href) {
    return <span className={className}>{content}</span>;
  }

  return (
    <Link href={href} className={`inline-flex transition-opacity hover:opacity-90 ${className}`}>
      {content}
    </Link>
  );
}
