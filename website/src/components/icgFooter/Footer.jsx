import React from "react";
import { FooterColumn } from "./FooterColumn";
import { SocialIcon } from "./SocialIcon";
import styles from "./Footer.module.css";
import { Link } from "react-router-dom";

export const Footer = () => {
  const columnData = [
    {
      title: "Our Company",
      items: [
        { text: "About ICG Chemicals", href: "/AboutPage" },
        { text: "Management", href: "/CeoMessage" },
        { text: "Our History", href: "/Timeline" },
      ],
    },
    {
      title: "Most Sold",
      items: [
        { text: "UV Absorbers", href: "/Absorber" },
        { text: "Light Stabilizers (HALS)", href: "/HALS" },
        { text: "Optical Brighteners", href: "/OpticalBrightners" },
        { text: "Our Products", href: "/products" },
      ],
    },
    {
      title: "Media & Events",
      items: [
        { text: "News", href: "/news" },
        { text: "Events", href: "/events" },
        { text: "Social", href: "/social" },
      ],
    },
    {
      title: "Contact us",
      items: [
        { text: "Jebel Ali, Dubai UAE", href: "/offices" },
        { text: "00971 4887 6111", href: "tel:00971488761111" },
        {
          text: "info@icgchemicals.com",
          href: "mailto:info@icgchemicals.com",
          external: true,
        },
      ],
    },
  ];

  const socialIcons = [
    {
      src: "/assets/Home/fb.png",
      alt: "Facebook",
      href: "https://facebook.com/icgchemicals",
    },
    {
      src: "/assets/Home/twitter.png",
      alt: "Twitter",
      href: "https://twitter.com/icgchemicals",
    },
    {
      src: "/assets/Home/Linkeden.png",
      alt: "Linkedin",
      href: "https://linkedin.com/company/icgchemicals",
    },
    {
      src: "/assets/Home/insta.png",
      alt: "Instagram",
      href: "https://instagram.com/icgchemicals",
    },
  ];

  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.logoSection}>
          <Link to="/">
            <img
              className={styles.logo}
              src="assets/logo.png"
              alt="ICG Chemicals Logo"
            />
          </Link>
          <div className={styles.followUsText}>Follow Us:</div>
        </div>

        <div className={styles.columnsContainer}>
          <div className={styles.columnsGrid}>
            {columnData.map((column, index) => (
              <FooterColumn
                key={index}
                title={column.title}
                items={column.items}
              />
            ))}
          </div>
        </div>
      </div>

      <div className={styles.socialIconsContainer}>
        {socialIcons.map((icon, index) => (
          <SocialIcon
            key={index}
            src={icon.src}
            alt={icon.alt}
            href={icon.href}
          />
        ))}
      </div>

      <div className={styles.footerBottom}>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/3e931171011707b012cc1859369de221c01d4a0e81c6d39711aae3c780ec40cb?placeholderIfAbsent=true&apiKey=5b7572a66cb246d79e0c407d9ccc5b29"
          alt=""
          className={styles.footerDivider}
        />
        <div className={styles.footerInfo}>
          <div className={styles.copyright}>
            ©2024 Powered By{" "}
            <a
              href="https://strings.com.pk"
              target="_blank"
              rel="noopener noreferrer"
            >
              Strings Technologies
            </a>
          </div>
          <div className={styles.links}>
            <a href="/privacy" className={styles.link}>
              Privacy Policy
            </a>
            <a href="/terms" className={styles.link}>
              Terms of Use
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
