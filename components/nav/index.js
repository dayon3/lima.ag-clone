import Image from 'next/image';
import NextLink from 'next/link';

import { useState, useEffect } from 'react';

import logoBlack from '../../public/images/lima-logo-black.png';
import logoWhite from '../../public/images/lima-logo-white.png';

export default function Nav() {
  const [navbar, setNavbar] = useState(false);
  const [click, setClick] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  const hideAndShowMobileNav = () => {
    const hamburger = document.querySelector('.hamburger');
    const nav = document.querySelector('.nav-links');

    if (nav.classList.contains('show')) {
      setClick(true);
      hamburger.classList.remove('is-active');
      nav.classList.remove('show');
    } else {
      setClick(false);
      hamburger.classList.add('is-active');
      nav.classList.add('show');
    }
  };

  const toggleMenu = () => {
    const nav = document.querySelector('.nav-links');
    const hamburger = document.querySelector('.hamburger');
    hamburger.classList.toggle('is-active');
    nav.classList.toggle('show');
    if (nav.classList.contains('show')) {
      for (let item of nav.children) {
        item.classList.add('text-gray-600');
      }
    }
  };

  useEffect(() => {
    const nav = document.querySelector('.nav-links');
    window.addEventListener('scroll', changeBackground);
    nav.addEventListener('click', hideAndShowMobileNav);
    return () => {
      window.removeEventListener('scroll', changeBackground);
      nav.removeEventListener('click', hideAndShowMobileNav);
    };
  }, [navbar, click]);

  return (
    <nav className={navbar ? 'nav active transition-all shadow' : 'nav'}>
      <a href="#skip" className="skip-nav">
        Skip to content
      </a>
      <Image
        src={navbar ? logoBlack : logoWhite}
        width={120}
        height={30}
        alt="Lima Labs Logo"
        placeholder="blur"
      />

      <div
        onClick={toggleMenu}
        className="nav-menu hamburger hamburger--spin"
        type="button"
      >
        <span className="hamburger-box">
          <span className="hamburger-inner"></span>
        </span>
      </div>

      <div className="hidden lg:block nav-links">
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
      </div>
    </nav>
  );
}
