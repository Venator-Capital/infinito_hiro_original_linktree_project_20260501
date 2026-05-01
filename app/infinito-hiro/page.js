'use client';

import React, { useState } from 'react';
import '../../card.css';

const COPY = {
  ja: {
    locale: "ja",
    location: "東京 · 赤坂",
    intro: "イタリア料理界を長年牽引してきた巨匠―山田宏巳。手掛けるのは、全国から取り寄せた旬の食材の\n美味しさを最大限引き出したシンプルなイタリアン。熟練の繊細な技と自由な発想に裏打ちされた逸品の数々をぜひご堤能ください。",
    primaryEyebrow: "ご予約",
    primaryLabel: "OMAKASE",
    primarySub: "オンライン予約",
    mapLabel: "地図で見る",
    mapHref: "https://maps.app.goo.gl/SM9z8k958HDCJvp88",
    secondary: [
      { label: "食べログ", sub: "口コミ・写真", href: "https://tabelog.com/tokyo/A1308/A130801/13253595/" },
      { label: "Instagram", sub: "@hiroinfinito", href: "https://www.instagram.com/hiroinfinito/" },
      { label: "Facebook", sub: "infinitohiro", href: "https://www.facebook.com/infinitohiro/" }
    ],
    contactHeading: "所在地",
    address1: "〒107-0052",
    address2: "東京都港区赤坂 5-1-38",
    address3: "赤坂東商ビル 3F",
    telLabel: "電話",
    tel: "03-5797-7610",
    hoursLabel: "営業時間",
    hoursLines: ["12:00 — 14:00", "18:00 — 22:00"],
    footer: "© Infinito Hiro",
    langSwitch: "EN"
  },
  en: {
    locale: "en",
    location: "Akasaka, Tokyo",
    intro: "A long-standing master of Italian cuisine in Japan, Hiromi Yamada draws on seasonal produce sourced from across the country to compose a quietly considered, deeply Italian table—craft, intuition, and a network of growers expressed in a handful of dishes.",
    primaryEyebrow: "Reservations",
    primaryLabel: "OMAKASE",
    primarySub: "Reserve online",
    mapLabel: "Open in Maps",
    mapHref: "https://maps.app.goo.gl/SM9z8k958HDCJvp88",
    secondary: [
      { label: "Tabelog", sub: "Reviews & photos", href: "https://tabelog.com/tokyo/A1308/A130801/13253595/" },
      { label: "Instagram", sub: "@hiroinfinito", href: "https://www.instagram.com/hiroinfinito/" },
      { label: "Facebook", sub: "infinitohiro", href: "https://www.facebook.com/infinitohiro/" }
    ],
    contactHeading: "Address",
    address1: "5-1-38 Akasaka, Minato-ku",
    address2: "Akasaka Tosho Bldg. 3F",
    address3: "Tokyo 107-0052, Japan",
    telLabel: "Telephone",
    tel: "+81 3-5797-7610",
    hoursLabel: "Hours",
    hoursLines: ["12:00 — 14:00", "18:00 — 22:00"],
    footer: "© Infinito Hiro",
    langSwitch: "日本語"
  }
};

export default function InfinitoHiro() {
  const [lang, setLang] = useState("ja");
  const t = COPY[lang];
  const toggle = () => setLang((l) => l === "ja" ? "en" : "ja");

  return (
    <div className="ih-page" lang={t.locale}>
      <div className="ih-grain" aria-hidden="true" />

      <button className="ih-lang" onClick={toggle} aria-label="Switch language">
        {t.langSwitch}
      </button>

      <main className="ih-stack">
        <header className="ih-hero">
          <div className="ih-rule-top" aria-hidden="true" />
          <div className="ih-eyebrow">{t.location}</div>
          <h1 className="ih-wordmark">
            <span className="ih-wm-1">infinito</span>
            <span className="ih-wm-2">HIRO</span>
          </h1>

          <p className="ih-intro">{t.intro}</p>
          <div className="ih-rule-bot" aria-hidden="true" />
        </header>

        <section className="ih-primary-wrap">
          <div className="ih-section-eyebrow">{t.primaryEyebrow}</div>
          <a
            className="ih-primary"
            href="https://omakase.in/r/rp424507"
            target="_blank"
            rel="noopener noreferrer">
            <span className="ih-primary-label">{t.primaryLabel}</span>
            <span className="ih-primary-sub">{t.primarySub}</span>
            <span className="ih-primary-arrow" aria-hidden="true">↗</span>
          </a>
        </section>

        <nav className="ih-links" aria-label={lang === "ja" ? "リンク" : "Links"}>
          {t.secondary.map((link, i) => (
            <a
              key={link.label}
              className="ih-link"
              href={link.href}
              target="_blank"
              rel="noopener noreferrer">
              <span className="ih-link-num">{String(i + 1).padStart(2, "0")}</span>
              <span className="ih-link-body">
                <span className="ih-link-label">{link.label}</span>
                <span className="ih-link-sub">{link.sub}</span>
              </span>
              <span className="ih-link-arrow" aria-hidden="true">↗</span>
            </a>
          ))}
        </nav>

        <section className="ih-contact">
          <div className="ih-section-eyebrow">{t.contactHeading}</div>
          <address className="ih-address">
            <div>{t.address1}</div>
            <div>{t.address2}</div>
            <div>{t.address3}</div>
          </address>

          <div className="ih-map">
            <iframe
              title="Infinito Hiro — map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3241.111894252504!2d139.73371817627805!3d35.67424673035692!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188d814b6c890d%3A0xdebbbffe7a37733d!2z44Kk44K_44Oq44Ki44OzIGluZmluaXRvIEhJUk_vvIjjgqTjg7Pjg5XjgqPjg4vjg7zjg4gg44OS44Ot77yJ6LWk5Z2C!5e0!3m2!1sja!2sjp!4v1777621947992!5m2!1sja!2sjp"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen="" />
            <a
              className="ih-map-link"
              href={t.mapHref}
              target="_blank"
              rel="noopener noreferrer">
              {t.mapLabel} <span aria-hidden="true">↗</span>
            </a>
          </div>

          <dl className="ih-meta">
            <div className="ih-meta-row">
              <dt>{t.telLabel}</dt>
              <dd>
                <a href="tel:+81357977610">{t.tel}</a>
              </dd>
            </div>
            <div className="ih-meta-row">
              <dt>{t.hoursLabel}</dt>
              <dd>
                {t.hoursLines.map((l) => (
                  <div key={l}>{l}</div>
                ))}
              </dd>
            </div>
          </dl>
        </section>

        <footer className="ih-footer">
          <div className="ih-foot-rule" aria-hidden="true" />
          <div className="ih-foot-mark"></div>
          <div className="ih-foot-copy">{t.footer}</div>
        </footer>
      </main>
    </div>
  );
}