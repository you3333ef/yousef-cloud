import { useState } from 'react';
import { Send, Bot, User, Sparkles, Copy, Check } from 'lucide-react';

interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

const AI_PROVIDERS = [
  { id: 'openai', name: 'OpenAI GPT', icon: '🤖' },
  { id: 'anthropic', name: 'Anthropic Claude', icon: '🎭' },
  { id: 'google', name: 'Google Gemini', icon: '💎' },
  { id: 'groq', name: 'Groq', icon: '⚡' },
];

export default function AIAssistant() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      role: 'assistant',
      content: 'مرحباً! أنا مساعدك الذكي في المنصة السورية للتطوير. كيف يمكنني مساعدتك اليوم؟',
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState('');
  const [selectedProvider, setSelectedProvider] = useState('openai');
  const [isLoading, setIsLoading] = useState(false);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: input,
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    setTimeout(() => {
      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: 'هذا مثال على رد الذكاء الاصطناعي. سيتم ربط هذا بالمزود المختار قريباً.',
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, assistantMessage]);
      setIsLoading(false);
    }, 1000);
  };

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="flex flex-col h-full bg-white rounded-modern-lg overflow-hidden">
      <div className="bg-gradient-syrian p-4 text-white">
        <div className="flex items-center gap-3 mb-3">
          <Bot size={28} />
          <h2 className="text-2xl font-bold font-arabic">الذكاء الاصطناعي</h2>
        </div>
        <div className="flex gap-2 flex-wrap">
          {AI_PROVIDERS.map(provider => (
            <button
              key={provider.id}
              onClick={() => setSelectedProvider(provider.id)}
              className={`px-3 py-2 rounded-modern text-sm font-medium transition-all ${
                selectedProvider === provider.id
                  ? 'bg-white text-syrian-primary shadow-glow-gold'
                  : 'bg-white/10 hover:bg-white/20'
              }`}
            >
              <span className="ml-2">{provider.icon}</span>
              {provider.name}
            </button>
          ))}
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map(message => (
          <div
            key={message.id}
            className={`flex gap-3 ${message.role === 'user' ? 'flex-row-reverse' : ''}`}
          >
            <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
              message.role === 'user'
                ? 'bg-syrian-secondary'
                : 'bg-gradient-syrian text-white'
            }`}>
              {message.role === 'user' ? <User size={20} /> : <Bot size={20} />}
            </div>
            <div className={`flex-1 max-w-[80%] ${message.role === 'user' ? 'text-right' : 'text-right'}`}>
              <div className={`p-4 rounded-modern ${
                message.role === 'user'
                  ? 'bg-syrian-secondary-light'
                  : 'bg-gray-50'
              }`}>
                <p className="font-arabic leading-relaxed">{message.content}</p>
              </div>
              <div className="flex items-center gap-2 mt-2 text-sm text-syrian-neutral-dark">
                <span className="font-arabic">{message.timestamp.toLocaleTimeString('ar-SY')}</span>
                {message.role === 'assistant' && (
                  <button
                    onClick={() => copyToClipboard(message.content, message.id)}
                    className="p-1 hover:bg-syrian-secondary-light rounded transition-colors"
                  >
                    {copiedId === message.id ? <Check size={16} /> : <Copy size={16} />}
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-syrian text-white flex items-center justify-center">
              <Bot size={20} />
            </div>
            <div className="flex-1">
              <div className="bg-gray-50 p-4 rounded-modern">
                <div className="flex items-center gap-2">
                  <Sparkles className="animate-spin" size={16} />
                  <span className="font-arabic">جاري التفكير...</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="border-t-2 border-syrian-secondary-light p-4">
        <div className="flex gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
            placeholder="اكتب رسالتك هنا..."
            className="flex-1 input-field font-arabic"
            disabled={isLoading}
          />
          <button
            onClick={handleSend}
            disabled={isLoading || !input.trim()}
            className="btn-primary px-6 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <Send size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}
