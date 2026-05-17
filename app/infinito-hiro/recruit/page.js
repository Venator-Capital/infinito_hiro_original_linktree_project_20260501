import RecruitClient from './RecruitClient';
import { metadata as pageMetadata, generateRecruitmentLD } from './metadata';

export const metadata = pageMetadata;

export default function RecruitPage() {
  const jsonLd = generateRecruitmentLD();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <RecruitClient />
    </>
  );
}