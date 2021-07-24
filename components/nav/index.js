import Image from 'next/image';
import NextLink from 'next/link';

import { useState, useEffect } from 'react';

import logoBlack from '../../public/images/lima-logo-black.png';
import logoWhite from '../../public/images/lima-logo-white.png';

export default function Nav() {
  const [navbar, setNavbar] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', changeBackground);
    return () => {
      window.removeEventListener('scroll', changeBackground);
    };
  }, [navbar]);

  return (
    <nav className={navbar ? 'nav active transition-all shadow' : 'nav'}>
      <a href="#skip" className="skip-nav">
        Skip to content
      </a>
      <Image
        src={navbar ? logoBlack : logoWhite}
        width={130}
        height={30}
        alt="Lima Labs Logo"
        placeholder="blur"
      />
      <div className="hidden lg:block">
        <NextLink href="#about">
          <a
            className={`text-lg p-1 sm:p-4 ${
              navbar ? 'text-gray-600' : 'text-white'
            }`}
          >
            About Us
          </a>
        </NextLink>
        <NextLink href="#why-lima">
          <a
            className={`text-lg p-1 sm:p-4 ${
              navbar ? 'text-gray-600' : 'text-white'
            }`}
          >
            Why Lima
          </a>
        </NextLink>
        <NextLink href="#our-reach">
          <a
            className={`text-lg p-1 sm:p-4 ${
              navbar ? 'text-gray-600' : 'text-white'
            }`}
          >
            Our Reach
          </a>
        </NextLink>
        <NextLink href="#partners">
          <a
            className={`text-lg p-1 sm:p-4 ${
              navbar ? 'text-gray-600' : 'text-white'
            }`}
          >
            Partners
          </a>
        </NextLink>
        <NextLink href="#careers">
          <a
            className={`text-lg p-1 sm:p-4 ${
              navbar ? 'text-gray-600' : 'text-white'
            }`}
          >
            Careers
          </a>
        </NextLink>
        <NextLink href="#contact-us">
          <a
            className={`text-lg p-1 sm:p-4 ${
              navbar ? 'text-gray-600' : 'text-white'
            }`}
          >
            Contact Us
          </a>
        </NextLink>
        {/* TODO: <button
              aria-label="Toggle Dark Mode"
              type="button"
              className="bg-gray-200 dark:bg-gray-800 rounded p-3 h-10 w-10"
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            >
              {mounted && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  stroke="currentColor"
                  className="h-4 w-4 text-gray-800 dark:text-gray-200"
                >
                  {theme === 'dark' ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                    />
                  )}
                </svg>
              )}
            </button> */}
      </div>
    </nav>
  );
}
