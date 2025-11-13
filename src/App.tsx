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
  Terminal,
} from 'lucide-react';
import AIAssistant from './components/ai/AIAssistant';
import CodeEditor from './components/editor/CodeEditor';
import InfrastructureAutomation from './components/infrastructure/InfrastructureAutomation';
import PackageManager from './components/packages/PackageManager';
import { SyrianEagle } from './components/ui';

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
          <div className="p-8 max-w-6xl mx-auto space-y-8">
            <div className="text-center">
              <SyrianEagle size={150} className="mx-auto mb-6" />
              <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-green-400 to-emerald-600 bg-clip-text text-transparent">
                Syrian Development Platform
              </h1>
              <p className="text-gray-400 text-lg">
                AI-Powered Development Environment - Built with ❤️ for Syria
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-gray-900 rounded-lg p-6 border border-gray-800">
                <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <Bot size={20} className="text-green-400" />
                  bolt.diy Features
                </h2>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-green-400 rounded-full"></span>
                    <span>AI Assistant with 19+ providers</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-green-400 rounded-full"></span>
                    <span>Advanced Code Editor (Monaco)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-green-400 rounded-full"></span>
                    <span>Code generation with AI</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-green-400 rounded-full"></span>
                    <span>Multi-language support</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-900 rounded-lg p-6 border border-gray-800">
                <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <Cloud size={20} className="text-blue-400" />
                  chef Features
                </h2>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-blue-400 rounded-full"></span>
                    <span>Infrastructure Automation</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-blue-400 rounded-full"></span>
                    <span>Multi-platform Deployment</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-blue-400 rounded-full"></span>
                    <span>Package Management</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-blue-400 rounded-full"></span>
                    <span>Database Setup</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-900 rounded-lg p-6 border border-gray-800">
                <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <Code size={20} className="text-purple-400" />
                  Tech Stack
                </h2>
                <div className="grid grid-cols-2 gap-3 text-sm text-gray-300">
                  <div>
                    <h3 className="text-gray-400 mb-2">Frontend</h3>
                    <ul className="space-y-1">
                      <li>• React 18</li>
                      <li>• TypeScript</li>
                      <li>• Tailwind CSS</li>
                      <li>• Monaco Editor</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-gray-400 mb-2">Backend</h3>
                    <ul className="space-y-1">
                      <li>• Convex</li>
                      <li>• Supabase</li>
                      <li>• Vite</li>
                      <li>• Node.js</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-gray-900 rounded-lg p-6 border border-gray-800">
                <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <Package size={20} className="text-yellow-400" />
                  Syrian Identity
                </h2>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-r from-green-600 to-green-400"></div>
                    <span className="text-gray-300 text-sm">Syrian Green - Heritage & Growth</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-r from-yellow-600 to-yellow-400"></div>
                    <span className="text-gray-300 text-sm">Qasioun Gold - Mountain Legacy</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-r from-stone-600 to-stone-400"></div>
                    <span className="text-gray-300 text-sm">Palmyra Sand - Ancient Wisdom</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-lg p-6 text-white">
              <h2 className="text-2xl font-bold mb-4">Made with ❤️ for Syria</h2>
              <p className="text-white/90">
                This platform represents the spirit of Syrian innovation and resilience.
                Built by developers, for developers, with the aim to empower the Syrian tech community.
              </p>
            </div>

            <div className="text-center text-gray-500">
              <p className="text-sm">
                © 2025 Syrian Development Platform - All rights reserved
              </p>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100">
      <nav className="bg-gray-900/50 backdrop-blur-md border-b border-gray-800 px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="lg:hidden p-2 hover:bg-gray-800 rounded-lg transition-all"
            >
              {sidebarOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
            <SyrianEagle size={40} className="animate-float" />
            <div>
              <h1 className="text-xl font-bold text-white font-arabic">SyrianDev Platform</h1>
              <p className="text-gray-400 text-sm font-arabic">
                AI-Powered Development Environment
              </p>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-3">
            <div className="px-3 py-1.5 bg-gray-800 rounded-lg text-xs font-mono text-gray-300 border border-gray-700">
              <span className="text-green-400">●</span> Connected
            </div>
            <span className="text-xs text-gray-500 font-mono">v1.0.0</span>
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
            w-64 bg-gray-900/95 backdrop-blur-md border-r border-gray-800
            transition-transform duration-300 ease-in-out
            lg:transition-none h-[calc(100vh-5rem)]
          `}
        >
          <div className="p-4 border-b border-gray-800">
            <div className="flex items-center gap-2 text-sm text-gray-400 font-mono">
              <Terminal size={16} className="text-green-400" />
              <span>Worskpace</span>
            </div>
          </div>
          <nav className="p-3 space-y-1">
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
                    w-full flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-200
                    ${
                      activeTab === tab.id
                        ? 'bg-gray-800 text-white border border-gray-700 shadow-lg'
                        : 'text-gray-400 hover:bg-gray-800/50 hover:text-gray-200'
                    }
                  `}
                >
                  <Icon size={18} className={activeTab === tab.id ? 'text-green-400' : ''} />
                  <span className="font-medium text-sm">{tab.label}</span>
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

        <main className="flex-1 bg-gray-950 overflow-auto">
          <div className="h-full">
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
