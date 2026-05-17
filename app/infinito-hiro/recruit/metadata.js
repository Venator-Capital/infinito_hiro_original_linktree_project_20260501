export const metadata = {
  title: '採用情報 | インフィニートヒロ (Infinito Hiro / バスタヒロ)',
  description: 'インフィニートヒロ（Infinito Hiro）赤坂の高級予約制イタリアンレストランで働きませんか。山田宏巳シェフのもとで本格的な料理とサービスを学べる環境です。',
  keywords: 'インフィニートヒロ 求人, バスタヒロ 採用, 赤坂 イタリアン 求人, 山田宏巳, 高級レストラン 求人, Infinito Hiro, Basta Hiro',
  openGraph: {
    title: '採用情報 | インフィニートヒロ (Infinito Hiro)',
    description: 'インフィニートヒロ 赤坂の高級予約制イタリアンで料理長候補・キッチンスタッフ・サービススタッフを募集中',
    type: 'website',
    url: 'https://infinito.yamadafooddev.com/infinito-hiro/recruit',
    siteName: 'インフィニートヒロ | Infinito Hiro',
  },
  alternates: {
    languages: {
      'ja': 'https://infinito.yamadafooddev.com/infinito-hiro/recruit',
      'en': 'https://infinito.yamadafooddev.com/infinito-hiro/recruit?lang=en',
    }
  },
  other: {
    'restaurant:name': 'インフィニートヒロ (Infinito Hiro / バスタヒロ)',
    'restaurant:location': '東京都港区赤坂',
    'restaurant:type': '高級イタリアン',
    'restaurant:chef': '山田宏巳',
  }
};

export const generateRecruitmentLD = () => {
  const today = new Date().toISOString().split('T')[0];

  return {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    "name": "インフィニートヒロ",
    "alternateName": ["Infinito Hiro", "バスタヒロ", "Basta Hiro"],
    "url": "https://infinito.yamadafooddev.com/infinito-hiro",
    "telephone": "080-9380-6911",
    "priceRange": "¥¥¥¥",
    "servesCuisine": ["イタリアン", "Italian"],
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "赤坂5-1-38 赤坂東商ビル3階",
      "addressLocality": "港区",
      "addressRegion": "東京都",
      "postalCode": "107-0052",
      "addressCountry": "JP"
    },
    "hasMap": "https://goo.gl/maps/infinitohiro",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        "opens": "17:30",
        "closes": "22:30"
      }
    ],
    "chef": {
      "@type": "Person",
      "name": "山田宏巳",
      "jobTitle": "料理長",
      "worksFor": {
        "@type": "Organization",
        "name": "山田食品開発株式会社"
      }
    },
    "potentialAction": {
      "@type": "ReserveAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://omakase.in/r/rp424507"
      }
    },
    "hiringOrganization": {
      "@type": "Organization",
      "name": "山田食品開発株式会社",
      "alternateName": [
        "山田フードエンタープライズ株式会社",
        "Yamada Food Enterprise Co., Ltd.",
        "Yamada Food Development Co., Ltd."
      ],
      "owns": {
        "@type": "Restaurant",
        "name": "インフィニートヒロ",
        "alternateName": ["Infinito Hiro", "バスタヒロ", "Basta Hiro"]
      }
    },
    "isAccessibleForFree": false,
    "acceptsReservations": "予約制",
    "keywords": "インフィニートヒロ, バスタヒロ, Infinito Hiro, Basta Hiro, 赤坂 イタリアン, 山田宏巳, 予約制レストラン, 高級イタリアン",
    "dateModified": today
  };
};