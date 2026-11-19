import { Fact } from '@/app/components/drawing/Fact';
import { LETTERS } from './copy';

/** The fixed rows of the hero's facts: role, stack and the kinds of builds. Hero adds the language switch. */
export function HeroFacts() {
  return (
    <>
      <Fact term="Role">Full-stack developer, 2.5 years in production</Fact>
      <Fact term="Stack">React, Next.js, TypeScript, Node.js</Fact>
      {/* On phones the letters carry no callouts, so the same list lives here. Screen readers get it here on
          every size (the callouts are hidden from them). */}
      <Fact term="Builds" className="md:sr-only">
        <ul className="grid gap-1">
          {LETTERS.map(([, kind]) => (
            <li key={kind}>{kind}</li>
          ))}
        </ul>
      </Fact>
    </>
  );
}
