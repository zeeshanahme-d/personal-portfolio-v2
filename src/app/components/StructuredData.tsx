import { structuredData } from '@/app/data/structuredData';

/** The page's JSON-LD. `<` is escaped so no string in the data can close the script tag. */
export function StructuredData() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, '\\u003c') }}
    />
  );
}
