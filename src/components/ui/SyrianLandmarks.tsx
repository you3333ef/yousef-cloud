interface LandmarkProps {
  name: string;
  description: string;
  className?: string;
}

function LandmarkIcon({ name, description, className = "" }: LandmarkProps) {
  const landmarks: Record<string, JSX.Element> = {
    "قلعة حلب": (
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className={className}>
        <rect x="20" y="40" width="60" height="40" fill="#054239" />
        <rect x="25" y="30" width="10" height="10" fill="#b9a779" />
        <rect x="42.5" y="30" width="10" height="10" fill="#b9a779" />
        <rect x="60" y="30" width="10" height="10" fill="#b9a779" />
        <rect x="30" y="60" width="8" height="20" fill="#6b1f2a" />
        <rect x="62" y="60" width="8" height="20" fill="#6b1f2a" />
        <path d="M 35 60 L 35 40 M 67 60 L 67 40" stroke="#054239" strokeWidth="2" />
      </svg>
    ),
    "جبل قاسيون": (
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className={className}>
        <path d="M 20 70 L 35 45 L 45 55 L 55 35 L 70 50 L 80 70 Z" fill="#b9a779" />
        <path d="M 35 45 L 38 48 L 40 46 L 42 48 L 45 45" fill="none" stroke="#054239" strokeWidth="1.5" />
        <circle cx="50" cy="40" r="2" fill="#edebe0" />
      </svg>
    ),
    "تدمر": (
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className={className}>
        <rect x="25" y="50" width="50" height="30" fill="#edebe0" stroke="#b9a779" strokeWidth="2" />
        <rect x="30" y="45" width="6" height="5" fill="#054239" />
        <rect x="45" y="45" width="6" height="5" fill="#054239" />
        <rect x="60" y="45" width="6" height="5" fill="#054239" />
        <path d="M 35 50 L 35 30 L 45 25 L 55 30 L 65 50" fill="#b9a779" />
        <circle cx="45" cy="27" r="2" fill="#edebe0" />
      </svg>
    ),
    "الجامع الأموي": (
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className={className}>
        <rect x="30" y="55" width="40" height="25" fill="#054239" />
        <path d="M 40 55 L 40 35 L 50 30 L 60 35 L 60 55" fill="#b9a779" />
        <circle cx="50" cy="32" r="2" fill="#edebe0" />
        <rect x="35" y="60" width="5" height="20" fill="#6b1f2a" />
        <rect x="60" y="60" width="5" height="20" fill="#6b1f2a" />
        <path d="M 25 70 L 75 70" stroke="#b9a779" strokeWidth="2" />
      </svg>
    ),
  };

  return landmarks[name] || null;
}

interface SyrianLandmarksProps {
  className?: string;
}

export default function SyrianLandmarks({ className = "" }: SyrianLandmarksProps) {
  const landmarks = [
    { name: "قلعة حلب", description: "قلعة تاريخية شامخة" },
    { name: "جبل قاسيون", description: "رمز دمشق العريق" },
    { name: "تدمر", description: "مدينة النفط الفرعونية" },
    { name: "الجامع الأموي", description: "تحفة العمارة الإسلامية" },
  ];

  return (
    <div className={`grid grid-cols-2 md:grid-cols-4 gap-4 ${className}`}>
      {landmarks.map((landmark) => (
        <div
          key={landmark.name}
          className="flex flex-col items-center p-4 bg-white rounded-modern shadow-syrian hover:shadow-syrian-lg transition-all duration-300 hover:-translate-y-1"
        >
          <LandmarkIcon name={landmark.name} description={landmark.description} className="w-16 h-16 mb-3" />
          <h4 className="font-bold text-syrian-primary text-center text-sm font-arabic">
            {landmark.name}
          </h4>
          <p className="text-syrian-neutral-dark text-xs text-center mt-1 font-arabic">
            {landmark.description}
          </p>
        </div>
      ))}
    </div>
  );
}
