"use client";

import React, { useEffect, useRef, useState } from "react";
import { useClickAway } from "react-use";

import NavItem from "./NavItem";

import { PRODUCT_CATEGORIES } from "@/config";

const NavItems = () => {
  const [activeIndex, setActiveIndex] = useState<null | number>(null);
  const isAnyOpen = activeIndex !== null;
  const navRef = useRef<HTMLDivElement | null>(null);

  useClickAway(navRef, () => setActiveIndex(null));

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      e.preventDefault();
      console.log(e);

      if (e.key === "Escape") {
        setActiveIndex(null);
      }

      document.addEventListener("keydown", handler);

      return () => {
        removeEventListener("keydown", handler);
      };
    };
  }, []);

  return (
    <div ref={navRef} className="flex gap-4 h-full">
      {PRODUCT_CATEGORIES.map((category, i) => {
        const handleOpen = () => {
          if (activeIndex === i) {
            setActiveIndex(null);
          } else {
            setActiveIndex(i);
          }
        };

        const isOpen = i === activeIndex;

        return (
          <NavItem
            category={category}
            handleOpen={handleOpen}
            isOpen={isOpen}
            key={category.value}
            isAnyOpen={isAnyOpen}
          />
        );
      })}
    </div>
  );
};

export default NavItems;
