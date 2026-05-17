import { COMPANY_INFO, JOBS } from '../recruitData';

const job = JOBS.find(j => j.id === 'kitchen-staff');
const company = COMPANY_INFO.ja;
const jobData = job.ja;
const baseUrl = 'https://infinito.yamadafooddev.com';

export const metadata = {
  title: jobData.metaTitle,
  description: jobData.metaDescription,
  keywords: 'インフィニートヒロ 求人, バスタヒロ 採用, 赤坂 イタリアン 求人, キッチンスタッフ',
  openGraph: {
    title: jobData.metaTitle,
    description: jobData.metaDescription,
    type: 'website',
    url: baseUrl + job.path,
    siteName: 'インフィニートヒロ | Infinito Hiro',
  },
  alternates: {
    languages: {
      'ja': baseUrl + job.path,
      'en': baseUrl + job.path + '?lang=en',
    }
  },
  other: {
    'restaurant:name': 'インフィニートヒロ (Infinito Hiro / バスタヒロ)',
    'restaurant:location': '東京都港区赤坂',
  }
};

export const generateJobPostingLD = () => {
  const today = new Date().toISOString().split('T')[0];
  const nextYear = new Date(new Date().setFullYear(new Date().getFullYear() + 1)).toISOString().split('T')[0];

  return {
    "@context": "https://schema.org/",
    "@type": "JobPosting",
    "title": jobData.jobTitle,
    "description": `${jobData.jobDescription}\n\n${jobData.appeal}`,
    "identifier": {
      "@type": "PropertyValue",
      "name": "山田食品開発株式会社",
      "value": `recruit-kitchen-${today}`
    },
    "datePosted": "2024-05-01",
    "validThrough": nextYear,
    "employmentType": ["FULL_TIME", "PART_TIME"],
    "hiringOrganization": {
      "@type": "Organization",
      "name": "山田食品開発株式会社",
      "alternateName": [
        "山田フードエンタープライズ株式会社",
        "Yamada Food Enterprise Co., Ltd.",
        "Yamada Food Development Co., Ltd."
      ],
      "sameAs": [
        baseUrl,
        "https://infinito.yamadafooddev.com/infinito-hiro"
      ],
      "logo": baseUrl + "/logo.png",
      "description": "東京都港区赤坂の高級イタリアンレストラン「インフィニートヒロ」を運営"
    },
    "jobLocation": {
      "@type": "Place",
      "name": "インフィニートヒロ",
      "alternateName": ["Infinito Hiro", "バスタヒロ", "Basta Hiro"],
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "赤坂5-1-38 赤坂東商ビル3階",
        "addressLocality": "港区",
        "addressRegion": "東京都",
        "postalCode": "107-0052",
        "addressCountry": "JP"
      }
    },
    "baseSalary": [
      {
        "@type": "MonetaryAmount",
        "currency": "JPY",
        "value": {
          "@type": "QuantitativeValue",
          "minValue": jobData.salaryMin,
          "maxValue": jobData.salaryMax,
          "unitText": "MONTH"
        }
      },
      {
        "@type": "MonetaryAmount",
        "currency": "JPY",
        "value": {
          "@type": "QuantitativeValue",
          "minValue": jobData.hourlyMin,
          "maxValue": jobData.hourlyMax,
          "unitText": "HOUR"
        }
      }
    ],
    "experienceRequirements": jobData.requirements,
    "qualifications": jobData.welcome,
    "responsibilities": jobData.jobDescription,
    "skills": "調理補助, 食材準備, 衛生管理",
    "benefits": company.socialInsurance,
    "workHours": jobData.workHours,
    "jobBenefits": `${company.holidays}, ${company.socialInsurance}`,
    "industry": "飲食業, 高級レストラン, イタリアン",
    "occupationalCategory": "調理スタッフ, キッチンスタッフ",
    "keywords": "インフィニートヒロ 求人, バスタヒロ 求人, 赤坂 キッチンスタッフ, イタリアン 調理",
    "url": baseUrl + job.path,
    "directApply": true,
    "applicantLocationRequirements": {
      "@type": "Country",
      "name": "JP"
    },
    "jobLocationType": "TELECOMMUTE_NOT_ALLOWED",
    "employmentUnit": {
      "@type": "Organization",
      "name": "インフィニートヒロ",
      "sameAs": "https://infinito.yamadafooddev.com/infinito-hiro"
    },
    "applicationContact": {
      "@type": "ContactPoint",
      "email": company.email,
      "telephone": company.phone,
      "contactType": "採用担当"
    }
  };
};