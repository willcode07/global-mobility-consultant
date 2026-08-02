type SectionHeadingProps = {
  title: string;
  subtitle?: string;
  ruled?: boolean;
  align?: 'left' | 'center';
  className?: string;
  light?: boolean;
};

export default function SectionHeading({
  title,
  subtitle,
  ruled = false,
  align = 'center',
  className = '',
  light = false,
}: SectionHeadingProps) {
  const alignClass = align === 'center' ? 'text-center items-center' : 'text-left items-start';

  return (
    <div className={`mb-12 flex flex-col ${alignClass} ${className}`}>
      <h2
        className={
          ruled
            ? 'section-ruled-title'
            : `font-heading text-3xl font-bold tracking-tight md:text-4xl ${
                light ? 'text-white' : 'text-nexo-black'
              }`
        }
      >
        {title}
      </h2>
      {subtitle ? (
        <p
          className={`mt-4 max-w-2xl text-base md:text-lg ${
            light ? 'text-white/80' : 'text-nexo-gray'
          } ${align === 'center' ? 'mx-auto' : ''}`}
        >
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}
