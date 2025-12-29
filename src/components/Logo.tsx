interface LogoProps {
  className?: string;
  size?: number;
}

const Logo = ({ className = "", size = 48 }: LogoProps) => {
  return (
    <svg 
      viewBox="0 0 200 220" 
      xmlns="http://www.w3.org/2000/svg" 
      className={className}
      width={size}
      height={size}
    >
      <defs>
        <linearGradient id="shieldGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" style={{ stopColor: '#64ffda', stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: '#00d9ff', stopOpacity: 1 }} />
        </linearGradient>
        
        <linearGradient id="glowGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" style={{ stopColor: '#64ffda', stopOpacity: 0.4 }} />
          <stop offset="100%" style={{ stopColor: '#00d9ff', stopOpacity: 0.1 }} />
        </linearGradient>
        
        <linearGradient id="alertGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" style={{ stopColor: '#ff6b6b', stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: '#ffd93d', stopOpacity: 1 }} />
        </linearGradient>
        
        <filter id="glow">
          <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
          <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>
      
      {/* Outer glow ring */}
      <circle cx="100" cy="100" r="90" fill="none" stroke="url(#shieldGrad)" strokeWidth="1" opacity="0.3">
        <animate attributeName="r" values="90;95;90" dur="3s" repeatCount="indefinite"/>
        <animate attributeName="opacity" values="0.3;0.5;0.3" dur="3s" repeatCount="indefinite"/>
      </circle>
      
      {/* Main shield structure */}
      <g filter="url(#glow)">
        <path 
          d="M 100 20 L 155 45 L 155 110 Q 155 160 100 195 Q 45 160 45 110 L 45 45 Z" 
          fill="url(#glowGrad)" 
          stroke="url(#shieldGrad)" 
          strokeWidth="2.5" 
          strokeLinejoin="round"
        />
      </g>
      
      {/* Windows logo geometric design inside shield */}
      <g opacity="0.9">
        {/* Top left pane */}
        <rect x="85" y="95" width="12" height="12" fill="#64ffda" opacity="0.8">
          <animate attributeName="opacity" values="0.8;1;0.8" dur="2s" repeatCount="indefinite"/>
        </rect>
        {/* Top right pane */}
        <rect x="103" y="95" width="12" height="12" fill="#64ffda" opacity="0.7">
          <animate attributeName="opacity" values="0.7;1;0.7" dur="2s" repeatCount="indefinite" begin="0.5s"/>
        </rect>
        {/* Bottom left pane */}
        <rect x="85" y="113" width="12" height="12" fill="#64ffda" opacity="0.7">
          <animate attributeName="opacity" values="0.7;1;0.7" dur="2s" repeatCount="indefinite" begin="1s"/>
        </rect>
        {/* Bottom right pane */}
        <rect x="103" y="113" width="12" height="12" fill="#64ffda" opacity="0.8">
          <animate attributeName="opacity" values="0.8;1;0.8" dur="2s" repeatCount="indefinite" begin="1.5s"/>
        </rect>
      </g>
      
      {/* Anomaly detection radar/scan effect */}
      <g opacity="0.6">
        <circle cx="100" cy="105" r="30" fill="none" stroke="url(#alertGrad)" strokeWidth="1">
          <animate attributeName="r" values="20;35;20" dur="2.5s" repeatCount="indefinite"/>
          <animate attributeName="opacity" values="0.8;0;0.8" dur="2.5s" repeatCount="indefinite"/>
        </circle>
        <circle cx="100" cy="105" r="30" fill="none" stroke="url(#alertGrad)" strokeWidth="1">
          <animate attributeName="r" values="20;35;20" dur="2.5s" repeatCount="indefinite" begin="0.8s"/>
          <animate attributeName="opacity" values="0.8;0;0.8" dur="2.5s" repeatCount="indefinite" begin="0.8s"/>
        </circle>
      </g>
      
      {/* Alert indicator */}
      <circle cx="135" cy="55" r="5" fill="url(#alertGrad)">
        <animate attributeName="opacity" values="1;0.4;1" dur="1s" repeatCount="indefinite"/>
      </circle>
      
      {/* Monitoring dots */}
      <g>
        <circle cx="70" cy="55" r="2" fill="#64ffda">
          <animate attributeName="opacity" values="1;0.3;1" dur="1.2s" repeatCount="indefinite"/>
        </circle>
        <circle cx="78" cy="55" r="2" fill="#64ffda">
          <animate attributeName="opacity" values="1;0.3;1" dur="1.2s" repeatCount="indefinite" begin="0.4s"/>
        </circle>
        <circle cx="86" cy="55" r="2" fill="#64ffda">
          <animate attributeName="opacity" values="1;0.3;1" dur="1.2s" repeatCount="indefinite" begin="0.8s"/>
        </circle>
      </g>
    </svg>
  );
};

export default Logo;
