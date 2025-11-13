import { useState } from 'react';
import Editor from '@monaco-editor/react';
import { Play, Save, Download, Upload, FileCode, Settings } from 'lucide-react';

const LANGUAGES = [
  { id: 'javascript', name: 'JavaScript', ext: 'js' },
  { id: 'typescript', name: 'TypeScript', ext: 'ts' },
  { id: 'python', name: 'Python', ext: 'py' },
  { id: 'jsx', name: 'React JSX', ext: 'jsx' },
  { id: 'tsx', name: 'React TSX', ext: 'tsx' },
  { id: 'html', name: 'HTML', ext: 'html' },
  { id: 'css', name: 'CSS', ext: 'css' },
  { id: 'json', name: 'JSON', ext: 'json' },
];

const TEMPLATES = {
  javascript: `// مرحباً بك في محرر JavaScript
function greet(name) {
  return \`مرحباً، \${name}! أهلاً وسهلاً في المنصة السورية للتطوير\`;
}

console.log(greet('مطور سوري'));
`,
  typescript: `// مرحباً بك في محرر TypeScript
interface User {
  name: string;
  age: number;
  country: string;
}

const user: User = {
  name: 'أحمد',
  age: 30,
  country: 'سوريا'
};

console.log(\`مرحباً \${user.name} من \${user.country}\`);
`,
  python: `# مرحباً بك في محرر Python
def greet(name):
    return f"مرحباً، {name}! أهلاً وسهلاً في المنصة السورية"

print(greet("مطور سوري"))
`,
  jsx: `import React from 'react';

function App() {
  return (
    <div className="p-4">
      <h1 className="text-2xl text-syrian-primary font-arabic">
        مرحباً بكم في المنصة السورية للتطوير
      </h1>
      <p className="text-syrian-neutral-dark">
        ابدأ رحلتك في البرمجة هنا
      </p>
    </div>
  );
}

export default App;
`,
  html: `<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>موقعي الأول</title>
</head>
<body>
    <div class="container">
        <h1>مرحباً من سوريا</h1>
        <p>هذا موقعي الأول في المنصة السورية للتطوير</p>
    </div>
</body>
</html>
`,
};

export default function CodeEditor() {
  const [code, setCode] = useState(TEMPLATES.javascript);
  const [language, setLanguage] = useState('javascript');
  const [theme, setTheme] = useState('vs-dark');
  const [fontSize, setFontSize] = useState(14);

  const handleLanguageChange = (langId: string) => {
    setLanguage(langId);
    if (TEMPLATES[langId as keyof typeof TEMPLATES]) {
      setCode(TEMPLATES[langId as keyof typeof TEMPLATES]);
    }
  };

  const handleSave = () => {
    const blob = new Blob([code], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `code.${LANGUAGES.find(l => l.id === language)?.ext || 'txt'}`;
    a.click();
  };

  const handleLoad = () => {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = '.js,.ts,.py,.jsx,.tsx,.html,.css,.json,.txt';
    input.onchange = (e) => {
      const file = (e.target as HTMLInputElement).files?.[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
          setCode(e.target?.result as string);
        };
        reader.readAsText(file);
      }
    };
    input.click();
  };

  return (
    <div className="h-full flex flex-col bg-white rounded-modern-lg overflow-hidden">
      <div className="bg-gradient-syrian p-4 text-white">
        <div className="flex items-center justify-between flex-wrap gap-3">
          <div className="flex items-center gap-3">
            <FileCode size={28} />
            <h2 className="text-2xl font-bold font-arabic">محرر الكود</h2>
          </div>
          <div className="flex gap-2 flex-wrap">
            <select
              value={language}
              onChange={(e) => handleLanguageChange(e.target.value)}
              className="px-3 py-2 rounded-modern text-syrian-primary bg-white/10 border border-white/20 text-sm font-arabic"
            >
              {LANGUAGES.map(lang => (
                <option key={lang.id} value={lang.id} className="text-syrian-primary">
                  {lang.name}
                </option>
              ))}
            </select>
            <button onClick={handleSave} className="p-2 bg-white/10 hover:bg-white/20 rounded-modern transition-colors">
              <Save size={20} />
            </button>
            <button onClick={handleLoad} className="p-2 bg-white/10 hover:bg-white/20 rounded-modern transition-colors">
              <Upload size={20} />
            </button>
            <button className="p-2 bg-white/10 hover:bg-white/20 rounded-modern transition-colors">
              <Settings size={20} />
            </button>
          </div>
        </div>
      </div>

      <div className="flex-1 relative">
        <Editor
          height="100%"
          language={language}
          value={code}
          onChange={(value) => setCode(value || '')}
          theme={theme}
          options={{
            fontSize,
            fontFamily: 'Fira Code, Consolas, Monaco, monospace',
            fontLigatures: true,
            lineNumbers: 'on',
            roundedSelection: false,
            scrollBeyondLastLine: false,
            automaticLayout: true,
            tabSize: 2,
            wordWrap: 'on',
            minimap: { enabled: false },
            padding: { top: 16, bottom: 16 },
            ariaLabel: 'محرر الكود',
            cursorBlinking: 'smooth',
          }}
        />
      </div>

      <div className="border-t-2 border-syrian-secondary-light p-3 bg-syrian-secondary-light/30">
        <div className="flex items-center justify-between flex-wrap gap-3">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <label className="text-sm font-arabic text-syrian-neutral-dark">السطر: 1</label>
              <label className="text-sm font-arabic text-syrian-neutral-dark">العمود: 1</label>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <label className="text-sm font-arabic text-syrian-neutral-dark">حجم الخط:</label>
              <input
                type="range"
                min="12"
                max="24"
                value={fontSize}
                onChange={(e) => setFontSize(Number(e.target.value))}
                className="w-20"
              />
              <span className="text-sm font-arabic text-syrian-neutral-dark">{fontSize}</span>
            </div>
            <select
              value={theme}
              onChange={(e) => setTheme(e.target.value)}
              className="px-3 py-1 rounded-modern text-sm font-arabic border border-syrian-secondary"
            >
              <option value="vs-dark">المظهر الداكن</option>
              <option value="light">المظهر الفاتح</option>
              <option value="hc-black">التباين العالي</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}
