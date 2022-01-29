import Link from 'next/link';
import { hero, navItems } from '@/data/config';
import Footer from './Footer';
export default function Hero() {
  return (
    <div className="static flex flex-col justify-between w-full px-0 py-8 md:p-8 md:max-w-lg  md:fixed md:h-screen lg:pb-8 lg:pt-32 md:pr-0">
      <div className="flex flex-col">
        <div>
          <h1 className="text-4xl font-bold leading-tight lg:text-5xl lg:leading-none">
            {hero.title}
          </h1>
          <p
            className="mt-8"
            dangerouslySetInnerHTML={{ __html: hero.description }}
          ></p>
        </div>
        <nav className="text-sm font-bold uppercase text-widest hidden mt-16 md:block">
          <ul className="flex flex-row md:flex-col md:-my-4">
            {navItems.map((item, i) => (
              <li className="md:my-2 list-none" key={i}>
                <Link href={item.path}>
                  {/* When active */}
                  {/* <a className="inline-flex items-center hover:text-neutral-900 dark:hover:text-neutral-50 transition-all duration-200 ease-in-out group text-neutral-900 dark:text-neutral-50"> */}
                  <a className="inline-flex items-center hover:text-neutral-900 dark:hover:text-neutral-50 transition-all duration-200 ease-in-out group text-neutral-900 dark:text-neutral-50">
                    <span className="text-xs tracking-wide">0{i + 1}</span>
                    <span className="inline-block w-8 h-px mx-4 -mt-px group-hover:w-12 bg-neutral-700 dark:bg-neutral-400 group-hover:bg-neutral-900 dark:group-hover:bg-neutral-50 transition-all duration-200 ease-in-out" />
                    <span className="text-xs tracking-widest uppercase">
                      {item.label}
                    </span>
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="hidden md:block">
        <Footer />
      </div>
    </div>
  );
}
