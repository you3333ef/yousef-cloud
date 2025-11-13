import { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import {
  Bot,
  Code,
  Cloud,
  Package,
  Info,
  Menu,
  X,
  Sparkles,
} from 'lucide-react';
import AIAssistant from './components/ai/AIAssistant';
import CodeEditor from './components/editor/CodeEditor';
import InfrastructureAutomation from './components/infrastructure/InfrastructureAutomation';
import PackageManager from './components/packages/PackageManager';
import { SyrianEagle, SyrianLandmarks } from './components/ui';
import SyrianPattern from './components/ui/SyrianPattern';

type Tab = 'editor' | 'ai' | 'infrastructure' | 'packages' | 'about';

function HomePage() {
  const [activeTab, setActiveTab] = useState<Tab>('editor');
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const tabs = [
    { id: 'editor' as Tab, label: 'محرر الكود', icon: Code },
    { id: 'ai' as Tab, label: 'الذكاء الاصطناعي', icon: Bot },
    { id: 'infrastructure' as Tab, label: 'البنية التحتية', icon: Cloud },
    { id: 'packages' as Tab, label: 'إدارة الحزم', icon: Package },
    { id: 'about' as Tab, label: 'حول المشروع', icon: Info },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'editor':
        return (
          <div className="h-[calc(100vh-8rem)]">
            <CodeEditor />
          </div>
        );
      case 'ai':
        return (
          <div className="h-[calc(100vh-8rem)]">
            <AIAssistant />
          </div>
        );
      case 'infrastructure':
        return <InfrastructureAutomation />;
      case 'packages':
        return <PackageManager />;
      case 'about':
        return (
          <div className="max-w-6xl mx-auto space-y-8">
            <div className="text-center">
              <SyrianEagle size={200} className="mx-auto mb-6" />
              <h1 className="text-5xl font-bold text-gradient-syrian mb-4 font-arabic">
                المنصة السورية الشاملة للتطوير
              </h1>
              <p className="text-xl text-syrian-neutral-dark font-arabic">
                دمج bolt.diy و chef مع الهوية البصرية السورية
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="card">
                <h2 className="text-2xl font-bold text-syrian-primary-dark mb-4 font-arabic">
                  🎨 الهوية البصرية السورية
                </h2>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-syrian-primary" />
                    <span className="font-arabic">الأخضر السوري (#054239) - الخصوبة والنمو</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-syrian-secondary" />
                    <span className="font-arabic">الذهبي (قاسيون) - تراث قاسيون</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-syrian-sand" />
                    <span className="font-arabic">الرملية (تدمر) - تراث تدمر</span>
                  </div>
                </div>
              </div>

              <div className="card">
                <h2 className="text-2xl font-bold text-syrian-primary-dark mb-4 font-arabic">
                  🦅 رمز العقاب الذهبي
                </h2>
                <ul className="space-y-2 text-syrian-neutral-dark font-arabic">
                  <li>• 14 ريشة جناح تمثل المحافظات السورية</li>
                  <li>• 5 ريشات ذيل للمناطق الجغرافية</li>
                  <li>• 3 نجوم للحرية والكرامة والاستمرارية</li>
                  <li>• يرمز للحرية والقوة والكرامة</li>
                </ul>
              </div>

              <div className="card">
                <h2 className="text-2xl font-bold text-syrian-primary-dark mb-4 font-arabic">
                  🤖 ميزات bolt.diy المدمجة
                </h2>
                <ul className="space-y-2 text-syrian-neutral-dark font-arabic">
                  <li>• دعم 19+ مزود AI</li>
                  <li>• محرر كود متقدم (Monaco Editor)</li>
                  <li>• توليد الكود بالذكاء الاصطناعي</li>
                  <li>• دعم متعدد اللغات (JS, TS, Python, React)</li>
                </ul>
              </div>

              <div className="card">
                <h2 className="text-2xl font-bold text-syrian-primary-dark mb-4 font-arabic">
                  ⚙️ ميزات chef المدمجة
                </h2>
                <ul className="space-y-2 text-syrian-neutral-dark font-arabic">
                  <li>• أتمتة البنية التحتية</li>
                  <li>• نشر تلقائي على منصات متعددة</li>
                  <li>• إدارة الحزم البرمجية</li>
                  <li>• إعداد قواعد البيانات</li>
                </ul>
              </div>
            </div>

            <SyrianLandmarks />

            <div className="card bg-gradient-syrian text-white">
              <h2 className="text-2xl font-bold mb-4 text-white font-arabic">
                التقنيات المستخدمة
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center">
                  <h3 className="font-bold text-white font-arabic">Frontend</h3>
                  <p className="text-white/90 font-arabic">React 18 + TypeScript</p>
                </div>
                <div className="text-center">
                  <h3 className="font-bold text-white font-arabic">Styling</h3>
                  <p className="text-white/90 font-arabic">Tailwind CSS</p>
                </div>
                <div className="text-center">
                  <h3 className="font-bold text-white font-arabic">Database</h3>
                  <p className="text-white/90 font-arabic">Convex + Supabase</p>
                </div>
                <div className="text-center">
                  <h3 className="font-bold text-white font-arabic">AI</h3>
                  <p className="text-white/90 font-arabic">Multiple Providers</p>
                </div>
              </div>
            </div>

            <div className="text-center text-syrian-neutral-dark">
              <p className="text-lg font-arabic">
                © 2025 المنصة السورية الشاملة للتطوير - مطور بـ ❤️ لسوريا
              </p>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-syrian-sand relative">
      <SyrianPattern className="absolute inset-0 pointer-events-none" opacity={0.03} />

      <nav className="bg-gradient-syrian text-white px-6 py-4 shadow-syrian-lg relative z-10">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="lg:hidden p-2 hover:bg-white/10 rounded-lg transition-all"
            >
              {sidebarOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
            <SyrianEagle size={48} className="animate-float" />
            <div>
              <h1 className="text-2xl font-bold text-white font-arabic">المنصة السورية</h1>
              <p className="text-white/90 text-sm font-arabic">
                دمج bolt.diy + chef مع الهوية السورية
              </p>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-2">
            <span className="px-4 py-2 bg-white/10 rounded-modern text-sm font-arabic flex items-center gap-2">
              <Sparkles size={16} className="animate-pulse" />
              v1.0.0
            </span>
          </div>
        </div>
      </nav>

      <div className="flex relative z-0">
        <aside
          className={`
            ${
              sidebarOpen ? 'translate-x-0' : '-translate-x-full'
            }
            lg:translate-x-0 fixed lg:static inset-y-0 left-0 z-50
            w-64 bg-white/95 backdrop-blur-sm border-r-2 border-syrian-secondary-light
            transition-transform duration-300 ease-in-out
            lg:transition-none h-[calc(100vh-5rem)]
          `}
        >
          <div className="p-4 border-b-2 border-syrian-secondary-light">
            <h2 className="font-bold text-syrian-primary-dark font-arabic text-lg">الأدوات</h2>
          </div>
          <nav className="p-4 space-y-2">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => {
                    setActiveTab(tab.id);
                    setSidebarOpen(false);
                  }}
                  className={`
                    w-full flex items-center gap-3 px-4 py-3 rounded-modern transition-all
                    ${
                      activeTab === tab.id
                        ? 'bg-gradient-syrian text-white shadow-syrian transform scale-105'
                        : 'text-syrian-neutral-dark hover:bg-syrian-secondaryLight hover:text-syrian-primary'
                    }
                  `}
                >
                  <Icon size={20} />
                  <span className="font-medium font-arabic">{tab.label}</span>
                </button>
              );
            })}
          </nav>
        </aside>

        {sidebarOpen && (
          <div
            className="lg:hidden fixed inset-0 bg-black/50 z-40"
            onClick={() => setSidebarOpen(false)}
          />
        )}

        <main className="flex-1 p-6 lg:p-8 overflow-auto">
          <div className="relative">
            {renderContent()}
          </div>
        </main>
      </div>
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;
