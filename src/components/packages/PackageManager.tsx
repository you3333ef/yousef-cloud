import { useState } from 'react';
import { Package, Search, Download, Trash2, CheckCircle, AlertCircle } from 'lucide-react';

const PACKAGE_MANAGERS = [
  {
    id: 'npm',
    name: 'npm',
    icon: '📦',
    description: 'مدير الحزم الافتراضي لـ Node.js',
  },
  {
    id: 'yarn',
    name: 'Yarn',
    icon: '🧶',
    description: 'سريع وآمن وموثوق',
  },
  {
    id: 'pnpm',
    name: 'pnpm',
    icon: '⚡',
    description: 'محرك تخزين فعال للمساحة',
  },
  {
    id: 'bun',
    name: 'Bun',
    icon: '🍞',
    description: 'وقت تشغيل JavaScript سريع',
  },
];

const POPULAR_PACKAGES = [
  { name: 'react', version: '^18.2.0', downloads: '50M+/شهر', description: 'مكتبة واجهة المستخدم' },
  { name: 'typescript', version: '^5.3.0', downloads: '45M+/شهر', description: 'JavaScript مع أنواع ثابتة' },
  { name: 'vite', version: '^5.0.0', downloads: '30M+/شهر', description: 'أداة بناء سريعة' },
  { name: 'tailwindcss', version: '^3.4.0', downloads: '25M+/شهر', description: 'CSS framework' },
  { name: 'convex', version: '^1.9.0', downloads: '500K+/شهر', description: 'قاعدة بيانات فورية' },
  { name: 'supabase', version: '^2.39.0', downloads: '2M+/شهر', description: 'Backend as a Service' },
  { name: 'monaco-editor', version: '^0.44.0', downloads: '10M+/شهر', description: 'محرر الكود المتقدم' },
  { name: 'lucide-react', version: '^0.312.0', downloads: '15M+/شهر', description: 'مكتبة أيقونات جميلة' },
];

export default function PackageManager() {
  const [selectedManager, setSelectedManager] = useState('npm');
  const [searchQuery, setSearchQuery] = useState('');
  const [installedPackages, setInstalledPackages] = useState<string[]>([]);
  const [installStatus, setInstallStatus] = useState<Record<string, 'idle' | 'installing' | 'success' | 'error'>>({});

  const handleInstall = (packageName: string) => {
    setInstallStatus(prev => ({ ...prev, [packageName]: 'installing' }));

    setTimeout(() => {
      setInstalledPackages(prev => [...prev, packageName]);
      setInstallStatus(prev => ({ ...prev, [packageName]: 'success' }));

      setTimeout(() => {
        setInstallStatus(prev => ({ ...prev, [packageName]: 'idle' }));
      }, 2000);
    }, 1500);
  };

  const handleUninstall = (packageName: string) => {
    setInstalledPackages(prev => prev.filter(p => p !== packageName));
    setInstallStatus(prev => ({ ...prev, [packageName]: 'idle' }));
  };

  const filteredPackages = POPULAR_PACKAGES.filter(pkg =>
    pkg.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="card">
        <div className="flex items-center gap-3 mb-4">
          <Package size={28} className="text-syrian-primary" />
          <h2 className="text-2xl font-bold text-syrian-primary font-arabic">
            إدارة الحزم البرمجية
          </h2>
        </div>
        <p className="text-syrian-neutral-dark font-arabic">
          تثبيت وإدارة الحزم لمشاريعك بسهولة
        </p>
      </div>

      <div className="card">
        <h3 className="text-xl font-bold text-syrian-primary-dark mb-4 font-arabic">
          مدير الحزم المفضل
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {PACKAGE_MANAGERS.map(manager => (
            <button
              key={manager.id}
              onClick={() => setSelectedManager(manager.id)}
              className={`p-4 rounded-modern border-2 transition-all ${
                selectedManager === manager.id
                  ? 'border-syrian-primary bg-syrian-secondaryLight shadow-glow-green'
                  : 'border-syrian-secondary-light hover:border-syrian-primaryLight'
              }`}
            >
              <div className="text-center">
                <div className="text-4xl mb-2">{manager.icon}</div>
                <h4 className="font-bold text-syrian-primary font-arabic">{manager.name}</h4>
                <p className="text-xs text-syrian-neutral-dark font-arabic mt-1">
                  {manager.description}
                </p>
              </div>
            </button>
          ))}
        </div>
      </div>

      <div className="card">
        <div className="flex items-center gap-3 mb-4">
          <Search size={24} className="text-syrian-primary" />
          <h3 className="text-xl font-bold text-syrian-primary-dark font-arabic">
            البحث عن الحزم
          </h3>
        </div>
        <div className="relative">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="ابحث عن حزمة..."
            className="input-field font-arabic pr-12"
          />
          <Search size={20} className="absolute right-4 top-1/2 transform -translate-y-1/2 text-syrian-neutral-dark" />
        </div>
      </div>

      <div className="card">
        <h3 className="text-xl font-bold text-syrian-primary-dark mb-4 font-arabic">
          الحزم الشائعة
        </h3>
        <div className="space-y-3">
          {filteredPackages.map(pkg => {
            const isInstalled = installedPackages.includes(pkg.name);
            const status = installStatus[pkg.name] || 'idle';

            return (
              <div
                key={pkg.name}
                className="flex items-center justify-between p-4 border-2 border-syrian-secondary-light rounded-modern hover:border-syrian-primaryLight transition-all"
              >
                <div className="flex-1 text-right">
                  <div className="flex items-center justify-end gap-2 mb-1">
                    <h4 className="font-bold text-syrian-primary font-mono font-arabic">{pkg.name}</h4>
                    <span className="text-sm text-syrian-secondary-dark font-mono font-arabic">
                      {pkg.version}
                    </span>
                  </div>
                  <p className="text-sm text-syrian-neutral-dark font-arabic mb-1">{pkg.description}</p>
                  <p className="text-xs text-syrian-neutral-dark font-arabic">
                    {pkg.downloads} تحميل
                  </p>
                </div>
                <div className="mr-4">
                  {isInstalled ? (
                    <div className="flex items-center gap-2">
                      <span className="px-3 py-1 bg-green-100 text-green-700 rounded-modern text-sm font-arabic flex items-center gap-1">
                        <CheckCircle size={16} />
                        مثبت
                      </span>
                      <button
                        onClick={() => handleUninstall(pkg.name)}
                        className="p-2 text-red-600 hover:bg-red-50 rounded-modern transition-colors"
                      >
                        <Trash2 size={18} />
                      </button>
                    </div>
                  ) : (
                    <button
                      onClick={() => handleInstall(pkg.name)}
                      disabled={status === 'installing'}
                      className="btn-primary px-4 py-2 disabled:opacity-50 flex items-center gap-2"
                    >
                      {status === 'installing' ? (
                        <>
                          <div className="animate-spin w-4 h-4 border-2 border-white border-t-transparent rounded-full" />
                          <span className="font-arabic">جاري التثبيت...</span>
                        </>
                      ) : (
                        <>
                          <Download size={18} />
                          <span className="font-arabic">تثبيت</span>
                        </>
                      )}
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {installedPackages.length > 0 && (
        <div className="card">
          <h3 className="text-xl font-bold text-syrian-primary-dark mb-4 font-arabic">
            الحزم المثبتة ({installedPackages.length})
          </h3>
          <div className="flex flex-wrap gap-2">
            {installedPackages.map(pkg => (
              <div
                key={pkg}
                className="flex items-center gap-2 px-4 py-2 bg-syrian-secondaryLight rounded-modern"
              >
                <span className="font-mono font-arabic text-syrian-primary">{pkg}</span>
                <button
                  onClick={() => handleUninstall(pkg)}
                  className="text-red-600 hover:text-red-700"
                >
                  <Trash2 size={16} />
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="card text-center">
          <Package size={40} className="text-syrian-secondary mx-auto mb-3" />
          <h4 className="font-bold text-syrian-primary font-arabic mb-2">مليون+ حزمة</h4>
          <p className="text-sm text-syrian-neutral-dark font-arabic">
            مكتبة ضخمة من الحزم المجانية
          </p>
        </div>
        <div className="card text-center">
          <Download size={40} className="text-syrian-secondary mx-auto mb-3" />
          <h4 className="font-bold text-syrian-primary font-arabic mb-2">تحديث تلقائي</h4>
          <p className="text-sm text-syrian-neutral-dark font-arabic">
            تحديثات الحزم بأمان وموثوقية
          </p>
        </div>
        <div className="card text-center">
          <AlertCircle size={40} className="text-syrian-secondary mx-auto mb-3" />
          <h4 className="font-bold text-syrian-primary font-arabic mb-2">فحص الأمان</h4>
          <p className="text-sm text-syrian-neutral-dark font-arabic">
            حماية من الثغرات الأمنية
          </p>
        </div>
      </div>
    </div>
  );
}
