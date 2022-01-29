import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import Logo from './Logo';

export default function Header() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <div className="my-6 w-full z-50">
      <div className="flex flex-row items-center justify-between w-full text-neutral-500">
        {/* <div
          className={`w-8 h-8 rounded-full relative overflow-hidden ${
            theme === 'light'
              ? 'text-black'
              : 'text-neutral-900 dark:text-neutral-50'
          }`}
        >
          <Logo />
        </div> */}
        <div className="font-mono text-neutral-900 dark:text-neutral-100">
          swapnil.
        </div>

        {theme === 'light' ? (
          <img
            src="/static/icons/moon.svg"
            width={20}
            height={20}
            alt="Toggle theme"
            className="cursor-pointer text-neutral-700 opacity-70"
            onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
          />
        ) : (
          <img
            src="/static/icons/sun.svg"
            width={20}
            height={20}
            alt="Toggle theme"
            className="cursor-pointer opacity-70"
            onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
          />
        )}
      </div>
    </div>
  );
}
