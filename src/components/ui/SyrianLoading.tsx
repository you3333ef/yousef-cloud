import SyrianEagle from './SyrianEagle';

interface SyrianLoadingProps {
  size?: number;
  text?: string;
}

export default function SyrianLoading({ size = 80, text = "جاري التحميل..." }: SyrianLoadingProps) {
  return (
    <div className="flex flex-col items-center justify-center gap-4 p-8">
      <div className="relative animate-pulse">
        <SyrianEagle size={size} className="animate-spin-slow" />
        <div className="absolute inset-0 rounded-full border-4 border-syrian-secondaryLight border-t-syrian-primary animate-spin" />
      </div>
      <p className="text-syrian-neutral-dark font-arabic text-lg">{text}</p>
    </div>
  );
}
