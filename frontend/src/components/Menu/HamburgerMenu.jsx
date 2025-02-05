import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./HamburgerMenu.module.css";
import About from "../About/About";

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  const barVariants = {
    closedTop: {
      top: "20%",
      rotate: 0,
      translateX: 0,
    },
    closedMiddle: {
      top: "45%",
      rotate: 0,
      opacity: 1,
      translateX: 0,
    },
    closedBottom: {
      top: "70%",
      rotate: 0,
      translateX: 0,
    },
    openTop: {
      top: "50%",
      rotate: 45,
      translateX: 0,
    },
    openMiddle: {
      opacity: 0,
      translateX: -20,
    },
    openBottom: {
      top: "50%",
      rotate: -45,
      translateX: 0,
    },
  };

  const menuVariants = {
    hidden: {
      opacity: 0,
      y: -20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: [0.22, 1, 0.36, 1],
        staggerChildren: 0.1,
      },
    },
    exit: {
      opacity: 0,
      y: 20,
      transition: {
        duration: 0.2,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const menuItemVariants = (index) => ({
    hidden: {
      opacity: 0,
      x: index % 2 === 0 ? -50 : 50,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    },
    exit: {
      opacity: 0,
      x: index % 2 === 0 ? -30 : 30,
      transition: {
        duration: 0.3,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  });

  const menuItems = [
    { name: "What's New", icon: "🎡", link: "/Whatsnew" },
    { name: "Meet The Team", icon: "🔍", link: "/Team" },
    { name: "Special Message", icon: "🔍", link: "/Message" },
    { name: "Explore Events", icon: "🎪", link: "/Events" },
    { name: "Odessey Cup", icon: "🎯", link: "/Odesseycup" },
    { name: "Merchandise", icon: "👕", link: "/Shirt" },
    { name: "Sponsers", icon: "🎫", link: "/Sponsors" },
  ];

  return (
    <div className="almendra-bold text-center">
      <motion.button
        className={styles.hamburgerButton}
        onClick={toggleMenu}
        aria-label="Toggle menu"
        initial="closed"
        animate={isOpen ? "open" : "closed"}
      >
        <motion.span
          className={styles.hamburgerBar}
          variants={barVariants}
          initial="closedTop"
          animate={isOpen ? "openTop" : "closedTop"}
          transition={{
            duration: 0.30,
            ease: [0.25, 0.1, 0.25, 1],
            translateX: { duration: 0.15 },
          }}
        />
        <motion.span
          className={styles.hamburgerBar}
          variants={barVariants}
          initial="closedMiddle"
          animate={isOpen ? "openMiddle" : "closedMiddle"}
          transition={{
            duration: 0.25,
            ease: [0.25, 0.1, 0.25, 1],
            opacity: { duration: 0.15 },
            translateX: { duration: 0.15 },
          }}
        />
        <motion.span
          className={styles.hamburgerBar}
          variants={barVariants}
          initial="closedBottom"
          animate={isOpen ? "openBottom" : "closedBottom"}
          transition={{
            duration: 0.25,
            ease: [0.25, 0.1, 0.25, 1],
            translateX: { duration: 0.15 },
          }}
        />
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className={styles.menuContainer}
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <nav className={styles.menuNav}>
              <motion.ul className={styles.menuList}>
                {menuItems.map((item, index) => (
                  <motion.li
                    key={item.name}
                    className={styles.menuItem}
                    variants={menuItemVariants(index)}
                    custom={index}
                  >
                    <a href={`${item.link}`} className={styles.menuLink}>
                      <span className={styles.menuIcon}>{item.icon}</span>
                      <span className={styles.menuText}>{item.name}</span>
                    </a>
                  </motion.li>
                ))}
              </motion.ul>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default HamburgerMenu;
