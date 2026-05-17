import ChefCandidateClient from './ChefCandidateClient';
import { metadata as pageMetadata, generateJobPostingLD } from './metadata';

export const metadata = pageMetadata;

export default function ChefCandidatePage() {
  const jsonLd = generateJobPostingLD();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ChefCandidateClient />
    </>
  );
}