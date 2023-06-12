import React, { FC } from "react";
import Link from "next/link";



type NavigationProps = {
  title: string;
  links: { href: string; label: string }[];
};

export const Navigation: FC<NavigationProps> = ({ title, links }) => {
  return (
    <>
      <nav className='navigation'>
        <Link href='/'>
          <span className='navigation__title'>{title}</span>
        </Link>
        <ul className='navigation__list'>
          {links?.map((link) => (
            <li className='navigation__item' key={link.href}>
              <Link className='navigation__link' href={link.href}>
                <span className='navigation__link__text'>{link.label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};
