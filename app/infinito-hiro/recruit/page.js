'use client';

import React, { useState } from 'react';
import { COMPANY_INFO, JOBS, FAQ } from './recruitData';
import '../../../card.css';

export default function RecruitPage() {
  const [lang, setLang] = useState("ja");
  const toggle = () => setLang((l) => l === "ja" ? "en" : "ja");

  const COPY = {
    ja: {
      title: "採用情報",
      subtitle: "Careers",
      metaTitle: "採用情報｜インフィニートヒロ 赤坂の高級予約制イタリアン",
      metaDescription: "赤坂の高級予約制イタリアン「インフィニートヒロ」では、料理長候補・キッチンスタッフ・サービススタッフを募集しています。山田宏巳シェフのもとで本格的な料理とサービスを学べる環境です。",
      backToStore: "← 店舗トップへ戻る",
      reservation: "OMAKASE予約へ",
      sectionIntro: {
        title: "Working at Infinito Hiro",
        subtitle: "山田宏巳のもとで学ぶ",
        text: "インフィニートヒロは、東京・赤坂の高級予約制イタリアンレストラン。料理長 山田宏巳のもと、少人数体制で料理・サービス・空間すべてを大切にした営業を行っています。\n\n経営者、投資家、文化人、各分野の専門家など、落ち着いた顧客層が来店する当店で、本気で料理・サービスを学びたい方を募集しています。"
      },
      sectionFeatures: {
        title: "特徴",
        items: [
          {
            title: "少人数だからこそ",
            text: "店舗全体を経験できる環境"
          },
          {
            title: "落ち着いた顧客層",
            text: "質の高いサービスを提供"
          },
          {
            title: "山田宏巳シェフ",
            text: "技術と哲学を直接学べる"
          }
        ]
      },
      sectionJobs: {
        title: "募集中の職種",
        viewDetails: "詳細を見る"
      },
      sectionHow: {
        title: "応募方法",
        text: "以下の内容をメールまたはお電話でお伝えください。",
        items: [
          "氏名",
          "電話番号",
          "希望職種",
          "希望雇用形態",
          "これまでの飲食経験",
          "面談希望日時"
        ],
        email: "メール",
        phone: "電話"
      },
      sectionFAQ: {
        title: "よくある質問"
      },
      footer: "© Infinito Hiro",
      langSwitch: "EN"
    },
    en: {
      title: "Careers",
      subtitle: "採用情報",
      metaTitle: "Careers | Infinito Hiro Fine Italian Restaurant in Akasaka",
      metaDescription: "Join our team at Infinito Hiro, a fine Italian restaurant in Akasaka. We're hiring head chef candidates, kitchen staff, and service staff. Learn authentic cuisine and service under Chef Hiromi Yamada.",
      backToStore: "← Back to Restaurant",
      reservation: "OMAKASE Reservations",
      sectionIntro: {
        title: "Working at Infinito Hiro",
        subtitle: "Learn under Hiromi Yamada",
        text: "Infinito Hiro is a fine Italian restaurant in Akasaka, Tokyo, operating on a reservation-only basis. Under head chef Hiromi Yamada, our small team values every aspect of cuisine, service, and ambiance.\n\nOur refined clientele includes executives, investors, cultural figures, and specialists from various fields. We're seeking individuals serious about learning cuisine and service."
      },
      sectionFeatures: {
        title: "Features",
        items: [
          {
            title: "Small Team",
            text: "Experience entire restaurant operations"
          },
          {
            title: "Refined Clientele",
            text: "Provide high-quality service"
          },
          {
            title: "Chef Hiromi Yamada",
            text: "Learn techniques and philosophy directly"
          }
        ]
      },
      sectionJobs: {
        title: "Open Positions",
        viewDetails: "View Details"
      },
      sectionHow: {
        title: "How to Apply",
        text: "Please provide the following information via email or phone:",
        items: [
          "Name",
          "Phone number",
          "Desired position",
          "Employment type preference",
          "Restaurant experience",
          "Interview availability"
        ],
        email: "Email",
        phone: "Phone"
      },
      sectionFAQ: {
        title: "FAQ"
      },
      footer: "© Infinito Hiro",
      langSwitch: "日本語"
    }
  };

  const t = COPY[lang];
  const company = COMPANY_INFO[lang];
  const faqs = FAQ[lang];

  return (
    <div className="ih-page" lang={lang === "ja" ? "ja" : "en"}>
      <div className="ih-grain" aria-hidden="true" />

      <button className="ih-lang" onClick={toggle} aria-label="Switch language">
        {t.langSwitch}
      </button>

      <main className="ih-stack ih-recruit">
        <header className="ih-hero">
          <div className="ih-rule-top" aria-hidden="true" />
          <div className="ih-eyebrow">{t.subtitle}</div>
          <h1 className="ih-title-large">{t.title}</h1>
        </header>

        <nav className="ih-recruit-nav">
          <a href="/infinito-hiro" className="ih-nav-link">
            {t.backToStore}
          </a>
          <a href="https://omakase.in/r/rp424507" target="_blank" rel="noopener noreferrer" className="ih-nav-link">
            {t.reservation} <span aria-hidden="true">↗</span>
          </a>
        </nav>

        <section className="ih-recruit-section">
          <h2 className="ih-section-title">{t.sectionIntro.title}</h2>
          <p className="ih-section-subtitle">{t.sectionIntro.subtitle}</p>
          <p className="ih-recruit-text">{t.sectionIntro.text}</p>
        </section>

        <section className="ih-recruit-section">
          <h2 className="ih-section-title">{t.sectionFeatures.title}</h2>
          <div className="ih-feature-grid">
            {t.sectionFeatures.items.map((item, i) => (
              <div key={i} className="ih-feature-card">
                <h3 className="ih-feature-title">{item.title}</h3>
                <p className="ih-feature-text">{item.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="ih-recruit-section">
          <h2 className="ih-section-title">{t.sectionJobs.title}</h2>
          <div className="ih-jobs-list">
            {JOBS.map((job) => {
              const jobData = job[lang];
              const salaryLines = jobData.salary.split('\n');
              return (
                <a key={job.id} href={job.path} className="ih-job-card">
                  <div className="ih-job-header">
                    <h3 className="ih-job-title">{jobData.title}</h3>
                    <span className="ih-job-type">{jobData.employmentType}</span>
                  </div>
                  <div className="ih-job-salary">
                    {salaryLines.map((line, i) => (
                      <div key={i}>{line}</div>
                    ))}
                  </div>
                  <span className="ih-job-link">
                    {t.sectionJobs.viewDetails} <span aria-hidden="true">→</span>
                  </span>
                </a>
              );
            })}
          </div>
        </section>

        <section className="ih-recruit-section">
          <h2 className="ih-section-title">{t.sectionHow.title}</h2>
          <p className="ih-recruit-text">{t.sectionHow.text}</p>
          <ul className="ih-apply-list">
            {t.sectionHow.items.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
          <div className="ih-contact-methods">
            <a href={`mailto:${company.email}?subject=【求人応募】`} className="ih-contact-method">
              <span className="ih-contact-label">{t.sectionHow.email}</span>
              <span className="ih-contact-value">{company.email}</span>
            </a>
            <a href={`tel:${company.phone.replace(/-/g, '')}`} className="ih-contact-method">
              <span className="ih-contact-label">{t.sectionHow.phone}</span>
              <span className="ih-contact-value">{company.phone}</span>
            </a>
          </div>
        </section>

        <section className="ih-recruit-section">
          <h2 className="ih-section-title">{t.sectionFAQ.title}</h2>
          <div className="ih-faq-list">
            {faqs.map((faq, i) => (
              <details key={i} className="ih-faq-item">
                <summary className="ih-faq-question">{faq.question}</summary>
                <p className="ih-faq-answer">{faq.answer}</p>
              </details>
            ))}
          </div>
        </section>

        <footer className="ih-footer">
          <div className="ih-foot-rule" aria-hidden="true" />
          <div className="ih-foot-copy">{t.footer}</div>
        </footer>
      </main>
    </div>
  );
}