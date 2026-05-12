'use client';

import React, { useState } from 'react';
import { COMPANY_INFO, JOBS, generateJobPostingLD } from '../recruitData';
import '../../../../card.css';

export default function KitchenStaffPage() {
  const [lang, setLang] = useState("ja");
  const toggle = () => setLang((l) => l === "ja" ? "en" : "ja");

  const job = JOBS.find(j => j.id === "kitchen-staff");
  const otherJobs = JOBS.filter(j => j.id !== "kitchen-staff");
  const company = COMPANY_INFO[lang];
  const jobData = job[lang];

  const COPY = {
    ja: {
      backToRecruit: "← 採用トップへ戻る",
      backToStore: "← 店舗トップへ戻る",
      otherPositions: "他の職種を見る",
      jobDetails: "募集要項",
      employmentType: "雇用形態",
      salary: "給与",
      workHours: "勤務時間",
      averageWorkHours: "平均所定労働時間",
      workDays: "勤務日",
      holidays: "定休日",
      location: "勤務地",
      socialInsurance: "社会保険",
      smokingPolicy: "受動喫煙防止措置",
      jobDescription: "仕事内容",
      appeal: "アピールポイント",
      requirements: "必須条件",
      welcome: "歓迎条件",
      howToApply: "応募方法",
      applyByEmail: "メールで応募",
      applyByPhone: "電話で問い合わせ",
      applyItems: [
        "氏名",
        "電話番号",
        "希望職種（キッチンスタッフ）",
        "希望雇用形態（正社員/アルバイト・パート）",
        "これまでの飲食経験",
        "面談希望日時"
      ],
      footer: "© Infinito Hiro",
      langSwitch: "EN"
    },
    en: {
      backToRecruit: "← Back to Careers",
      backToStore: "← Back to Restaurant",
      otherPositions: "View Other Positions",
      jobDetails: "Job Details",
      employmentType: "Employment Type",
      salary: "Salary",
      workHours: "Work Hours",
      averageWorkHours: "Average Monthly Hours",
      workDays: "Work Days",
      holidays: "Days Off",
      location: "Location",
      socialInsurance: "Social Insurance",
      smokingPolicy: "Smoking Policy",
      jobDescription: "Job Description",
      appeal: "Why Join Us",
      requirements: "Requirements",
      welcome: "Preferred Qualifications",
      howToApply: "How to Apply",
      applyByEmail: "Apply by Email",
      applyByPhone: "Apply by Phone",
      applyItems: [
        "Name",
        "Phone number",
        "Position (Kitchen Staff)",
        "Employment type preference (Full-time/Part-time)",
        "Restaurant experience",
        "Interview availability"
      ],
      footer: "© Infinito Hiro",
      langSwitch: "日本語"
    }
  };

  const t = COPY[lang];
  const jsonLd = generateJobPostingLD(job, lang);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd }}
      />
      <div className="ih-page" lang={lang === "ja" ? "ja" : "en"}>
        <div className="ih-grain" aria-hidden="true" />

        <button className="ih-lang" onClick={toggle} aria-label="Switch language">
          {t.langSwitch}
        </button>

        <main className="ih-stack ih-job-detail">
          <header className="ih-hero">
            <div className="ih-rule-top" aria-hidden="true" />
            <h1 className="ih-title-large">{jobData.title}</h1>
            <p className="ih-job-subtitle">{jobData.jobTitle}</p>
          </header>

          <nav className="ih-recruit-nav">
            <a href="/infinito-hiro/recruit" className="ih-nav-link">
              {t.backToRecruit}
            </a>
            <a href="/infinito-hiro" className="ih-nav-link">
              {t.backToStore}
            </a>
          </nav>

          <section className="ih-job-section">
            <h2 className="ih-section-title">{t.jobDetails}</h2>
            <dl className="ih-job-specs">
              <div className="ih-spec-row">
                <dt>{t.employmentType}</dt>
                <dd>{jobData.employmentType}</dd>
              </div>
              <div className="ih-spec-row">
                <dt>{t.salary}</dt>
                <dd>{jobData.salary}</dd>
              </div>
              <div className="ih-spec-row">
                <dt>{t.workHours}</dt>
                <dd>{jobData.workHours}</dd>
              </div>
              <div className="ih-spec-row">
                <dt>{t.averageWorkHours}</dt>
                <dd>{jobData.averageWorkHours}</dd>
              </div>
              <div className="ih-spec-row">
                <dt>{t.workDays}</dt>
                <dd>{company.workDays}</dd>
              </div>
              <div className="ih-spec-row">
                <dt>{t.holidays}</dt>
                <dd>{company.holidays}</dd>
              </div>
              <div className="ih-spec-row">
                <dt>{t.location}</dt>
                <dd>{company.address}</dd>
              </div>
              <div className="ih-spec-row">
                <dt>{t.socialInsurance}</dt>
                <dd>{company.socialInsurance}</dd>
              </div>
              <div className="ih-spec-row">
                <dt>{t.smokingPolicy}</dt>
                <dd>{company.smokingPolicy}</dd>
              </div>
            </dl>
          </section>

          <section className="ih-job-section">
            <h2 className="ih-section-title">{t.jobDescription}</h2>
            <p className="ih-job-text">{jobData.jobDescription}</p>
          </section>

          <section className="ih-job-section">
            <h2 className="ih-section-title">{t.appeal}</h2>
            <p className="ih-job-text">{jobData.appeal}</p>
          </section>

          <section className="ih-job-section">
            <h2 className="ih-section-title">{t.requirements}</h2>
            <p className="ih-job-text">{jobData.requirements}</p>
          </section>

          <section className="ih-job-section">
            <h2 className="ih-section-title">{t.welcome}</h2>
            <p className="ih-job-text">{jobData.welcome}</p>
          </section>

          <section className="ih-job-section ih-apply-section">
            <h2 className="ih-section-title">{t.howToApply}</h2>
            <ul className="ih-apply-list">
              {t.applyItems.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
            <div className="ih-apply-buttons">
              <a href={`mailto:${company.email}?subject=【求人応募】キッチンスタッフ`} className="ih-apply-button ih-apply-email">
                {t.applyByEmail}
                <span className="ih-apply-detail">{company.email}</span>
              </a>
              <a href={`tel:${company.phone.replace(/-/g, '')}`} className="ih-apply-button ih-apply-phone">
                {t.applyByPhone}
                <span className="ih-apply-detail">{company.phone}</span>
              </a>
            </div>
          </section>

          <section className="ih-job-section">
            <h2 className="ih-section-title">{t.otherPositions}</h2>
            <div className="ih-other-jobs">
              {otherJobs.map(otherJob => {
                const otherJobData = otherJob[lang];
                return (
                  <a key={otherJob.id} href={otherJob.path} className="ih-other-job-card">
                    <h3 className="ih-other-job-title">{otherJobData.title}</h3>
                    <span className="ih-other-job-type">{otherJobData.employmentType}</span>
                    <span className="ih-other-job-arrow" aria-hidden="true">→</span>
                  </a>
                );
              })}
            </div>
          </section>

          <footer className="ih-footer">
            <div className="ih-foot-rule" aria-hidden="true" />
            <div className="ih-foot-copy">{t.footer}</div>
          </footer>
        </main>
      </div>
    </>
  );
}