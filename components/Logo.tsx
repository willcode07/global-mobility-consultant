import Link from 'next/link';

type LogoProps = {
  href?: string;
  variant?: 'full' | 'mark' | 'horizontal';
  className?: string;
  inverted?: boolean;
};

function Mark({ className = 'h-9 w-9', inverted = false }: { className?: string; inverted?: boolean }) {
  const purple = inverted ? '#A78BFA' : '#5B21B6';
  const dark = inverted ? '#FFFFFF' : '#111111';

  return (
    <svg
      className={className}
      viewBox="0 0 80 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <line x1="18" y1="14" x2="18" y2="66" stroke={purple} strokeWidth="5" strokeLinecap="round" />
      <line x1="62" y1="14" x2="62" y2="66" stroke={dark} strokeWidth="5" strokeLinecap="round" />
      <line x1="18" y1="18" x2="62" y2="62" stroke={purple} strokeWidth="5" strokeLinecap="round" />
      <circle cx="18" cy="14" r="5" fill={purple} />
      <circle cx="62" cy="14" r="5" fill={dark} />
      <circle cx="18" cy="66" r="5" fill={dark} />
      <circle cx="62" cy="66" r="5" fill={purple} />
      <circle cx="40" cy="40" r="4" fill={purple} />
    </svg>
  );
}

export default function Logo({
  href,
  variant = 'horizontal',
  className = '',
  inverted = false,
}: LogoProps) {
  const text = inverted ? 'text-white' : 'text-nexo-black';
  const muted = inverted ? 'text-purple-200' : 'text-nexo-purple';

  const content =
    variant === 'mark' ? (
      <Mark className="h-9 w-9" inverted={inverted} />
    ) : variant === 'full' ? (
      <span className="flex flex-col items-center gap-2">
        <Mark className="h-14 w-14" inverted={inverted} />
        <span className={`font-heading text-2xl font-bold tracking-tight ${text}`}>
          Nexo <span className="font-semibold">Mobility</span>
        </span>
        <span className={`text-[10px] font-semibold uppercase tracking-[0.22em] ${muted}`}>
          Consulting · Technology · Global Connections
        </span>
      </span>
    ) : (
      <span className="flex items-center gap-2.5">
        <Mark className="h-8 w-8" inverted={inverted} />
        <span className={`font-heading text-lg font-bold tracking-tight ${text}`}>
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
