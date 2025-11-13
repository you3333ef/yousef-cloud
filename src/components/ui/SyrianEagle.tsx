interface SyrianEagleProps {
  size?: number;
  className?: string;
}

export default function SyrianEagle({ size = 200, className = "" }: SyrianEagleProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role="img"
      aria-label="رمز العقاب الذهبي السوري"
    >
      <defs>
        <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#b9a779" />
          <stop offset="100%" stopColor="#988561" />
        </linearGradient>
        <linearGradient id="wingGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#054239" />
          <stop offset="100%" stopColor="#428177" />
        </linearGradient>
      </defs>

      <g transform="translate(100, 100)">
        <path
          d="M0,-80 C20,-80 40,-70 45,-55 C50,-40 45,-25 35,-15 L10,-5 C5,-3 0,0 -5,0 C-10,0 -15,-3 -20,-8 L-40,-20 C-50,-25 -60,-25 -70,-20 L-90,-5 C-100,0 -110,5 -115,15 C-120,25 -118,40 -110,50 C-100,60 -85,65 -70,60 L-30,50 C-25,48 -20,48 -15,50 C-10,52 -5,55 0,55 C5,55 10,52 15,50 C20,48 25,48 30,50 L70,60 C85,65 100,60 110,50 C118,40 120,25 115,15 C110,5 100,0 90,-5 L70,-20 C60,-25 50,-25 40,-20 L20,-8 C15,-3 10,0 5,0 Z"
          fill="url(#goldGradient)"
          stroke="#054239"
          strokeWidth="2"
        />

        <path
          d="M-15,-50 C-10,-55 -5,-60 0,-60 C5,-60 10,-55 15,-50 L20,-40 C22,-35 22,-30 18,-25 L10,-15 L0,-10 L-10,-15 L-18,-25 C-22,-30 -22,-35 -20,-40 Z"
          fill="url(#goldGradient)"
          stroke="#054239"
          strokeWidth="1.5"
        />

        <path
          d="M15,-50 C10,-55 5,-60 0,-60 C-5,-60 -10,-55 -15,-50 L-20,-40 C-22,-35 -22,-30 -18,-25 L-10,-15 L0,-10 L10,-15 L18,-25 C22,-30 22,-35 20,-40 Z"
          fill="url(#goldGradient)"
          stroke="#054239"
          strokeWidth="1.5"
        />

        <circle cx="0" cy="-55" r="6" fill="#054239" />
        <circle cx="0" cy="-55" r="3" fill="#6b1f2a" />

        <polygon
          points="0,-70 -8,-55 8,-55"
          fill="url(#goldGradient)"
          stroke="#054239"
          strokeWidth="1.5"
        />

        <polygon
          points="-35,-20 -40,-5 -30,-5"
          fill="url(#goldGradient)"
          stroke="#054239"
          strokeWidth="1"
        />
        <polygon
          points="35,-20 40,-5 30,-5"
          fill="url(#goldGradient)"
          stroke="#054239"
          strokeWidth="1"
        />

        <path
          d="M-5,25 L0,20 L5,25 C8,27 8,33 5,35 L0,40 L-5,35 C-8,33 -8,27 -5,25 Z"
          fill="url(#goldGradient)"
          stroke="#054239"
          strokeWidth="1.5"
        />

        <polygon
          points="-3,-5 0,-10 3,-5"
          fill="url(#goldGradient)"
          stroke="#054239"
          strokeWidth="1"
        />

        <path
          d="M0,15 L-3,25 L0,28 L3,25 L0,15 Z"
          fill="url(#goldGradient)"
          stroke="#054239"
          strokeWidth="1"
        />

        <text
          x="0"
          y="85"
          fontFamily="Georgia, serif"
          fontSize="16"
          fontWeight="bold"
          fill="#054239"
          textAnchor="middle"
        >
          SYRIA
        </text>
      </g>
    </svg>
  );
}
