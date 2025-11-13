import { useStore } from '@nanostores/react';
import { ClientOnly } from 'remix-utils/client-only';
import { chatStore } from '~/lib/stores/chat';
import { classNames } from '~/utils/classNames';
import { HeaderActionButtons } from './HeaderActionButtons.client';
import { ChatDescription } from '~/lib/persistence/ChatDescription.client';

export function Header() {
  const chat = useStore(chatStore);

  return (
    <header
      className={classNames('flex items-center px-4 border-b h-[var(--header-height)]', {
        'border-transparent': !chat.started,
        'border-bolt-elements-borderColor': chat.started,
      })}
    >
      <div className="flex items-center gap-3 z-logo text-bolt-elements-textPrimary cursor-pointer">
        <div className="i-ph:sidebar-simple-duotone text-xl" />
        <a href="/" className="text-xl font-semibold flex items-center gap-2">
          <svg width="32" height="32" viewBox="0 0 100 100" className="text-green-400">
            <path d="M10 30 Q50 10 90 30 Q50 50 10 30 Z" fill="currentColor" opacity="0.9"/>
            <path d="M30 35 Q50 25 70 35 Q50 45 30 35 Z" fill="currentColor"/>
            <path d="M45 40 L50 50 L55 40 Z" fill="currentColor"/>
            <circle cx="50" cy="35" r="3" fill="#ffffff"/>
          </svg>
          <span className="text-white font-arabic">SyrianDev Platform</span>
        </a>
      </div>
      {chat.started && ( // Display ChatDescription and HeaderActionButtons only when the chat has started.
        <>
          <span className="flex-1 px-4 truncate text-center text-bolt-elements-textPrimary">
            <ClientOnly>{() => <ChatDescription />}</ClientOnly>
          </span>
          <ClientOnly>
            {() => (
              <div className="">
                <HeaderActionButtons chatStarted={chat.started} />
              </div>
            )}
          </ClientOnly>
        </>
      )}
    </header>
  );
}
