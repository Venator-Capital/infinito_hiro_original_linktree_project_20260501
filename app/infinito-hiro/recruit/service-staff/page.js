import ServiceStaffClient from './ServiceStaffClient';
import { metadata as pageMetadata, generateJobPostingLD } from './metadata';

export const metadata = pageMetadata;

export default function ServiceStaffPage() {
  const jsonLd = generateJobPostingLD();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ServiceStaffClient />
    </>
  );
}