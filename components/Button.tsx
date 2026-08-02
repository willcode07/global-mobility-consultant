import Link from 'next/link';
import { type ButtonHTMLAttributes, type ReactNode } from 'react';

type Variant = 'primary' | 'secondary' | 'ghost' | 'accent' | 'outline-teal' | 'outline-purple';
type Size = 'sm' | 'md' | 'lg';

const variants: Record<Variant, string> = {
  primary:
    'bg-nexo-purple text-white hover:bg-nexo-purple-dark border border-transparent',
  secondary:
    'bg-white text-nexo-purple border border-nexo-purple hover:bg-nexo-lavender',
  ghost: 'bg-transparent text-white border border-white/70 hover:bg-white/10',
  accent: 'bg-nexo-accent text-white hover:bg-nexo-accent-dark border border-transparent',
  'outline-teal':
    'bg-white text-nexo-accent-dark border border-nexo-accent hover:bg-nexo-mint',
  'outline-purple':
    'bg-white text-nexo-purple border border-nexo-purple/50 hover:bg-nexo-lavender',
};

const sizes: Record<Size, string> = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-sm',
  lg: 'px-8 py-3.5 text-base',
};

type CommonProps = {
  variant?: Variant;
  size?: Size;
  pill?: boolean;
  className?: string;
  children: ReactNode;
};

type ButtonAsButton = CommonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };

type ButtonAsLink = CommonProps & {
  href: string;
  target?: string;
  rel?: string;
};

export default function Button(props: ButtonAsButton | ButtonAsLink) {
  const {
    variant = 'primary',
    size = 'md',
    pill = false,
    className = '',
    children,
  } = props;

  const classes = [
    'inline-flex items-center justify-center font-semibold transition-all duration-200',
    'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-nexo-purple',
    'disabled:cursor-not-allowed disabled:opacity-50',
    pill ? 'rounded-full' : 'rounded-lg',
    variants[variant],
    sizes[size],
    className,
  ].join(' ');

  if ('href' in props && props.href) {
    return (
      <Link href={props.href} className={classes} target={props.target} rel={props.rel}>
        {children}
      </Link>
    );
  }

  const buttonProps = props as ButtonAsButton;
  return (
    <button
      type={buttonProps.type || 'button'}
      className={classes}
      disabled={buttonProps.disabled}
      onClick={buttonProps.onClick}
    >
      {children}
    </button>
  );
}
