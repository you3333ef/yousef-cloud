// Platform Configuration Constants
export const PLATFORM_CONFIG = {
  name: 'المنصة السورية للتطوير',
  shortName: 'SyrianDev',
  version: '1.0.0',
  description: 'منصة شاملة للتطوير مع الذكاء الاصطناعي وأتمتة البنية التحتية',
  author: 'Syrian Development Team',
  repository: 'https://github.com/you3333ef/yousef-cloud',
};

// Syrian Color Palette
export const SYRIAN_COLORS = {
  primary: '#054239',      // Syrian Green
  primaryLight: '#428177', // Light Syrian Green
  primaryDark: '#002623',  // Dark Syrian Green
  secondary: '#b9a779',    // Qasioun Gold
  secondaryLight: '#edebe0', // Palmyra Sand
  secondaryDark: '#988561', // Dark Gold
  accent: '#6b1f2a',       // Crimson Red
  neutralLight: '#ffffff', // White
  neutralDark: '#3d3a3b',  // Dark Gray
};

// AI Providers
export const AI_PROVIDERS = [
  { id: 'openai', name: 'OpenAI GPT', icon: '🤖', status: 'active' },
  { id: 'anthropic', name: 'Anthropic Claude', icon: '🎭', status: 'active' },
  { id: 'google', name: 'Google Gemini', icon: '💎', status: 'active' },
  { id: 'groq', name: 'Groq', icon: '⚡', status: 'active' },
  { id: 'xai', name: 'xAI Grok', icon: '🚀', status: 'active' },
  { id: 'mistral', name: 'Mistral AI', icon: '🌊', status: 'active' },
];

// Supported Languages in Code Editor
export const SUPPORTED_LANGUAGES = [
  { id: 'javascript', name: 'JavaScript', ext: 'js', monaco: 'javascript' },
  { id: 'typescript', name: 'TypeScript', ext: 'ts', monaco: 'typescript' },
  { id: 'python', name: 'Python', ext: 'py', monaco: 'python' },
  { id: 'jsx', name: 'React JSX', ext: 'jsx', monaco: 'javascript' },
  { id: 'tsx', name: 'React TSX', ext: 'tsx', monaco: 'typescript' },
  { id: 'html', name: 'HTML', ext: 'html', monaco: 'html' },
  { id: 'css', name: 'CSS', ext: 'css', monaco: 'css' },
  { id: 'json', name: 'JSON', ext: 'json', monaco: 'json' },
];

// Deployment Platforms
export const DEPLOYMENT_PLATFORMS = [
  { id: 'vercel', name: 'Vercel', icon: '▲', color: 'from-black to-gray-800' },
  { id: 'netlify', name: 'Netlify', icon: '⚡', color: 'from-green-400 to-cyan-500' },
  { id: 'cloudflare', name: 'Cloudflare Pages', icon: '☁️', color: 'from-orange-400 to-yellow-500' },
  { id: 'aws', name: 'AWS', icon: '🟠', color: 'from-orange-500 to-orange-700' },
];

// Package Managers
export const PACKAGE_MANAGERS = [
  { id: 'npm', name: 'npm', icon: '📦', description: 'مدير الحزم الافتراضي لـ Node.js' },
  { id: 'yarn', name: 'Yarn', icon: '🧶', description: 'سريع وآمن وموثوق' },
  { id: 'pnpm', name: 'pnpm', icon: '⚡', description: 'محرك تخزين فعال للمساحة' },
  { id: 'bun', name: 'Bun', icon: '🍞', description: 'وقت تشغيل JavaScript سريع' },
];

// Database Options
export const DATABASE_OPTIONS = [
  { id: 'convex', name: 'Convex', type: 'Realtime Database', icon: '⚡' },
  { id: 'supabase', name: 'Supabase', type: 'Backend as a Service', icon: '🟢' },
  { id: 'mongodb', name: 'MongoDB', type: 'NoSQL Database', icon: '🍃' },
  { id: 'postgresql', name: 'PostgreSQL', type: 'SQL Database', icon: '🐘' },
];

// Syrian Landmarks
export const SYRIAN_LANDMARKS = [
  { name: 'قلعة حلب', description: 'قلعة تاريخية شامخة', icon: '🏰' },
  { name: 'جبل قاسيون', description: 'رمز دمشق العريق', icon: '⛰️' },
  { name: 'تدمر', description: 'مدينة النفط الفرعونية', icon: '🏛️' },
  { name: 'الجامع الأموي', description: 'تحفة العمارة الإسلامية', icon: '🕌' },
];
