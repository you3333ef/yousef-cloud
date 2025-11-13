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
  Terminal,
} from 'lucide-react';
import CodeEditor from './components/editor/CodeEditor';
import { SyrianEagle } from './components/ui';

function HomePage() {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="h-screen w-full bg-gray-950 overflow-hidden flex flex-col">
      {/* Background Rays Effect */}
      <div className="fixed inset-0 bg-gradient-to-br from-purple-900/20 via-gray-950 to-green-900/20 pointer-events-none" />

      {/* Header */}
      <header className="relative z-10 h-14 border-b border-gray-800/50 bg-gray-900/80 backdrop-blur-md flex items-center px-4">
        <div className="flex items-center gap-4 w-full">
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="p-2 hover:bg-gray-800 rounded-lg transition-colors text-gray-400 hover:text-gray-200"
          >
            {sidebarOpen ? <X size={20} /> : <Menu size={20} />}
          </button>

          <div className="flex items-center gap-3">
            <SyrianEagle size={32} className="animate-float" />
            <div>
              <h1 className="text-lg font-bold text-white font-arabic">
                SyrianDev Platform
              </h1>
              <p className="text-xs text-gray-400 font-arabic">
                AI-Powered Development Environment
              </p>
            </div>
          </div>

          <div className="ml-auto flex items-center gap-3">
            <div className="px-3 py-1.5 bg-gray-800 rounded-lg text-xs font-mono text-gray-300 border border-gray-700">
              <span className="text-green-400">●</span> Connected
            </div>
            <span className="text-xs text-gray-500 font-mono">v1.0.0</span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar Menu */}
        <aside
          className={`
            ${sidebarOpen ? 'w-64' : 'w-0'}
            relative z-20 bg-gray-900/95 backdrop-blur-md border-r border-gray-800/50
            transition-all duration-300 ease-in-out overflow-hidden
          `}
        >
          <div className="p-4 border-b border-gray-800/50">
            <div className="flex items-center gap-2 text-sm text-gray-400 font-mono">
              <Terminal size={16} className="text-green-400" />
              <span>Workspace</span>
            </div>
          </div>

          <nav className="p-3 space-y-1">
            <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-200 bg-gray-800 text-white border border-gray-700 shadow-lg">
              <Code size={18} className="text-green-400" />
              <span className="font-medium text-sm">Code Editor</span>
            </button>

            <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-200 text-gray-400 hover:bg-gray-800/50 hover:text-gray-200">
              <Bot size={18} />
              <span className="font-medium text-sm">AI Assistant</span>
            </button>

            <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-200 text-gray-400 hover:bg-gray-800/50 hover:text-gray-200">
              <Cloud size={18} />
              <span className="font-medium text-sm">Infrastructure</span>
            </button>

            <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-200 text-gray-400 hover:bg-gray-800/50 hover:text-gray-200">
              <Package size={18} />
              <span className="font-medium text-sm">Packages</span>
            </button>

            <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-200 text-gray-400 hover:bg-gray-800/50 hover:text-gray-200">
              <Info size={18} />
              <span className="font-medium text-sm">About</span>
            </button>
          </nav>
        </aside>

        {/* Content Area */}
        <main className="flex-1 flex overflow-hidden">
          {/* Left Panel - Chat/AI */}
          <div className="flex flex-col flex-1 min-w-0 border-r border-gray-800/50 bg-gray-950/50">
            <div className="flex-1 overflow-auto p-6">
              <div className="max-w-4xl mx-auto">
                {/* Welcome Message */}
                <div className="mt-[16vh] text-center mb-8">
                  <h1 className="text-4xl lg:text-6xl font-bold text-white mb-4 animate-fade-in">
                    Where ideas begin
                  </h1>
                  <p className="text-lg lg:text-xl text-gray-400 animate-fade-in animation-delay-200">
                    Bring ideas to life in seconds or get help on existing projects.
                  </p>
                </div>

                {/* Example Prompts */}
                <div className="flex flex-col gap-4 mt-8">
                  <button className="px-6 py-4 rounded-xl bg-gray-900/80 border border-gray-800/50 hover:border-green-500/30 hover:bg-gray-900 transition-all duration-200 text-left group">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-lg bg-green-500/10 flex items-center justify-center text-green-400 group-hover:bg-green-500/20 transition-colors">
                        <Bot size={16} />
                      </div>
                      <div>
                        <p className="text-white font-medium mb-1">Create a React component</p>
                        <p className="text-sm text-gray-400">Build a modern UI component with styling</p>
                      </div>
                    </div>
                  </button>

                  <button className="px-6 py-4 rounded-xl bg-gray-900/80 border border-gray-800/50 hover:border-blue-500/30 hover:bg-gray-900 transition-all duration-200 text-left group">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-400 group-hover:bg-blue-500/20 transition-colors">
                        <Code size={16} />
                      </div>
                      <div>
                        <p className="text-white font-medium mb-1">Debug my code</p>
                        <p className="text-sm text-gray-400">Help me find and fix issues in my code</p>
                      </div>
                    </div>
                  </button>

                  <button className="px-6 py-4 rounded-xl bg-gray-900/80 border border-gray-800/50 hover:border-purple-500/30 hover:bg-gray-900 transition-all duration-200 text-left group">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-lg bg-purple-500/10 flex items-center justify-center text-purple-400 group-hover:bg-purple-500/20 transition-colors">
                        <Cloud size={16} />
                      </div>
                      <div>
                        <p className="text-white font-medium mb-1">Deploy my app</p>
                        <p className="text-sm text-gray-400">Set up infrastructure and deploy to cloud</p>
                      </div>
                    </div>
                  </button>
                </div>

                {/* Chat Input */}
                <div className="mt-8 sticky bottom-6">
                  <div className="relative">
                    <textarea
                      placeholder="Ask anything..."
                      className="w-full px-4 py-3 pr-12 bg-gray-900 border-2 border-gray-800 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-green-500/50 transition-colors resize-none"
                      rows={1}
                      style={{ minHeight: '52px', maxHeight: '200px' }}
                    />
                    <button className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-green-500 hover:bg-green-600 rounded-lg transition-colors">
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-white">
                        <path d="M2 8L14 2L8 14L8 8L2 8Z" fill="currentColor" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Panel - Workbench/Editor */}
          <div className="w-[50%] min-w-[400px] bg-gray-950 flex flex-col">
            <div className="h-10 border-b border-gray-800/50 bg-gray-900/80 flex items-center gap-2 px-3">
              <button className="px-3 py-1.5 text-xs rounded bg-gray-800 text-gray-300 hover:bg-gray-700 transition-colors">
                Code
              </button>
              <button className="px-3 py-1.5 text-xs rounded hover:bg-gray-800 text-gray-400 hover:text-gray-300 transition-colors">
                Diff
              </button>
              <button className="px-3 py-1.5 text-xs rounded hover:bg-gray-800 text-gray-400 hover:text-gray-300 transition-colors">
                Preview
              </button>
            </div>

            <div className="flex-1 overflow-hidden">
              <CodeEditor />
            </div>
          </div>
        </main>
      </div>

      {/* Mobile Overlay */}
      {sidebarOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/50 z-10"
          onClick={() => setSidebarOpen(false)}
        />
      )}
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
