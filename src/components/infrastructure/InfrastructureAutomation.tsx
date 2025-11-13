import { useState } from 'react';
import { Cloud, Server, Database, Globe, CheckCircle, AlertCircle, ArrowRight } from 'lucide-react';

const DEPLOYMENT_PLATFORMS = [
  {
    id: 'vercel',
    name: 'Vercel',
    icon: '▲',
    color: 'from-black to-gray-800',
    description: 'نشر سريع للتطبيقات التفاعلية',
  },
  {
    id: 'netlify',
    name: 'Netlify',
    icon: '⚡',
    color: 'from-green-400 to-cyan-500',
    description: 'نشر مع CI/CD متكامل',
  },
  {
    id: 'cloudflare',
    name: 'Cloudflare Pages',
    icon: '☁️',
    color: 'from-orange-400 to-yellow-500',
    description: 'نشر سريع مع شبكة CDN',
  },
  {
    id: 'aws',
    name: 'AWS',
    icon: '🟠',
    color: 'from-orange-500 to-orange-700',
    description: 'خدمات السحابة المتقدمة',
  },
];

const DATABASE_OPTIONS = [
  {
    id: 'convex',
    name: 'Convex',
    type: 'Realtime Database',
    description: 'قاعدة بيانات فورية للتطبيقات التفاعلية',
    icon: '⚡',
  },
  {
    id: 'supabase',
    name: 'Supabase',
    type: 'Backend as a Service',
    description: 'منصة شاملة للخدمات الخلفية',
    icon: '🟢',
  },
  {
    id: 'mongodb',
    name: 'MongoDB',
    type: 'NoSQL Database',
    description: 'قاعدة بيانات مرنة للتطبيقات الحديثة',
    icon: '🍃',
  },
  {
    id: 'postgresql',
    name: 'PostgreSQL',
    type: 'SQL Database',
    description: 'قاعدة بيانات علائقية قوية',
    icon: '🐘',
  },
];

export default function InfrastructureAutomation() {
  const [selectedPlatform, setSelectedPlatform] = useState<string | null>(null);
  const [selectedDB, setSelectedDB] = useState<string | null>(null);
  const [isDeploying, setIsDeploying] = useState(false);
  const [deploymentStatus, setDeploymentStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleDeploy = () => {
    if (!selectedPlatform) return;

    setIsDeploying(true);
    setDeploymentStatus('idle');

    setTimeout(() => {
      setIsDeploying(false);
      setDeploymentStatus('success');
      setTimeout(() => setDeploymentStatus('idle'), 3000);
    }, 2000);
  };

  return (
    <div className="space-y-6">
      <div className="card">
        <div className="flex items-center gap-3 mb-4">
          <Cloud size={28} className="text-syrian-primary" />
          <h2 className="text-2xl font-bold text-syrian-primary font-arabic">
            أتمتة البنية التحتية
          </h2>
        </div>
        <p className="text-syrian-neutral-dark font-arabic">
          انشر تطبيقك على منصات سحابية مختلفة بسهولة
        </p>
      </div>

      <div className="card">
        <h3 className="text-xl font-bold text-syrian-primary-dark mb-4 font-arabic">
          اختر منصة النشر
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {DEPLOYMENT_PLATFORMS.map(platform => (
            <button
              key={platform.id}
              onClick={() => setSelectedPlatform(platform.id)}
              className={`p-4 rounded-modern border-2 transition-all ${
                selectedPlatform === platform.id
                  ? 'border-syrian-primary bg-syrian-secondaryLight shadow-glow-green'
                  : 'border-syrian-secondary-light hover:border-syrian-primaryLight'
              }`}
            >
              <div className="flex items-center gap-4">
                <div className={`w-12 h-12 rounded-modern bg-gradient-to-br ${platform.color} flex items-center justify-center text-white text-2xl`}>
                  {platform.icon}
                </div>
                <div className="flex-1 text-right">
                  <h4 className="font-bold text-syrian-primary font-arabic">{platform.name}</h4>
                  <p className="text-sm text-syrian-neutral-dark font-arabic">{platform.description}</p>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      <div className="card">
        <h3 className="text-xl font-bold text-syrian-primary-dark mb-4 font-arabic">
          قاعدة البيانات
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {DATABASE_OPTIONS.map(db => (
            <button
              key={db.id}
              onClick={() => setSelectedDB(db.id)}
              className={`p-4 rounded-modern border-2 transition-all text-right ${
                selectedDB === db.id
                  ? 'border-syrian-primary bg-syrian-secondaryLight shadow-glow-green'
                  : 'border-syrian-secondary-light hover:border-syrian-primaryLight'
              }`}
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-modern bg-gradient-syrian flex items-center justify-center text-white text-2xl">
                  {db.icon}
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-syrian-primary font-arabic">{db.name}</h4>
                  <p className="text-xs text-syrian-secondary-dark font-arabic mb-1">{db.type}</p>
                  <p className="text-sm text-syrian-neutral-dark font-arabic">{db.description}</p>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      <div className="card">
        <div className="flex items-center justify-between flex-wrap gap-4">
          <div className="flex items-center gap-3">
            <div className={`w-12 h-12 rounded-modern flex items-center justify-center ${
              selectedPlatform ? 'bg-gradient-syrian text-white' : 'bg-gray-200'
            }`}>
              <Globe size={24} />
            </div>
            <div>
              <h4 className="font-bold text-syrian-primary font-arabic">النشر الجاهز</h4>
              <p className="text-sm text-syrian-neutral-dark font-arabic">
                {selectedPlatform
                  ? `محدد: ${DEPLOYMENT_PLATFORMS.find(p => p.id === selectedPlatform)?.name}`
                  : 'اختر منصة النشر أولاً'
                }
              </p>
            </div>
          </div>
          <button
            onClick={handleDeploy}
            disabled={!selectedPlatform || isDeploying}
            className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
          >
            {isDeploying ? (
              <>
                <div className="animate-spin w-5 h-5 border-2 border-white border-t-transparent rounded-full" />
                <span className="font-arabic">جاري النشر...</span>
              </>
            ) : (
              <>
                <span className="font-arabic">انشر الآن</span>
                <ArrowRight size={20} />
              </>
            )}
          </button>
        </div>

        {deploymentStatus === 'success' && (
          <div className="mt-4 p-4 bg-green-50 border-2 border-green-200 rounded-modern flex items-center gap-3">
            <CheckCircle className="text-green-600" size={24} />
            <div>
              <p className="text-green-800 font-bold font-arabic">تم النشر بنجاح!</p>
              <p className="text-green-600 text-sm font-arabic">تطبيقك متاح الآن على الإنترنت</p>
            </div>
          </div>
        )}

        {deploymentStatus === 'error' && (
          <div className="mt-4 p-4 bg-red-50 border-2 border-red-200 rounded-modern flex items-center gap-3">
            <AlertCircle className="text-red-600" size={24} />
            <div>
              <p className="text-red-800 font-bold font-arabic">فشل في النشر</p>
              <p className="text-red-600 text-sm font-arabic">تحقق من الاتصال والمحاولة مرة أخرى</p>
            </div>
          </div>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="card text-center">
          <Server size={40} className="text-syrian-secondary mx-auto mb-3" />
          <h4 className="font-bold text-syrian-primary font-arabic mb-2">المراقبة المستمرة</h4>
          <p className="text-sm text-syrian-neutral-dark font-arabic">
            مراقبة أداء التطبيق في الوقت الفعلي
          </p>
        </div>
        <div className="card text-center">
          <Database size={40} className="text-syrian-secondary mx-auto mb-3" />
          <h4 className="font-bold text-syrian-primary font-arabic mb-2">النسخ الاحتياطي</h4>
          <p className="text-sm text-syrian-neutral-dark font-arabic">
            حماية البيانات مع نسخ احتياطية تلقائية
          </p>
        </div>
        <div className="card text-center">
          <Globe size={40} className="text-syrian-secondary mx-auto mb-3" />
          <h4 className="font-bold text-syrian-primary font-arabic mb-2">الأمان المتقدم</h4>
          <p className="text-sm text-syrian-neutral-dark font-arabic">
            حماية شاملة مع SSL وشهادات الأمان
          </p>
        </div>
      </div>
    </div>
  );
}
