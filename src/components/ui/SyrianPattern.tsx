interface SyrianPatternProps {
  className?: string;
  opacity?: number;
  size?: number;
}

export default function SyrianPattern({ className = "", opacity = 0.05, size = 80 }: SyrianPatternProps) {
  return (
    <svg
      className={className}
      width="100%"
      height="100%"
      viewBox={`0 0 ${size * 5} ${size * 5}`}
      xmlns="http://www.w3.org/2000/svg"
      style={{ opacity }}
    >
      <defs>
        <pattern
          id="syrian-pattern"
          x="0"
          y="0"
          width={size}
          height={size}
          patternUnits="userSpaceOnUse"
        >
          <rect width={size} height={size} fill="transparent" />
          <circle cx={size / 2} cy={size / 2} r={size * 0.375} fill="none" stroke="#054239" strokeWidth="1.5" opacity="0.3" />
          <circle cx={size / 2} cy={size / 2} r={size * 0.25} fill="none" stroke="#b9a779" strokeWidth="1" opacity="0.2" />
          <circle cx={size / 2} cy={size / 2} r={size * 0.125} fill="#054239" opacity="0.1" />
          <path
            d={`M ${size * 0.25} ${size / 2} L ${size * 0.75} ${size / 2} M ${size / 2} ${size * 0.25} L ${size / 2} ${size * 0.75}`}
            stroke="#b9a779"
            strokeWidth="1"
            opacity="0.2"
          />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#syrian-pattern)" />
    </svg>
  );
}
