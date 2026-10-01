import { useEffect, useState } from 'react';
import { Check, Copy } from 'lucide-react';
import { profile, socials } from '../content';
import { ExternalLink } from '../components/ExternalLink';
import { SiteFooter } from '../components/SiteFooter';
import { stagger } from '../hooks/useReveal';

type CopyState = 'idle' | 'copied' | 'failed';

function CopyEmail() {
  const [state, setState] = useState<CopyState>('idle');

  useEffect(() => {
    if (state === 'idle') return;
    const id = setTimeout(() => setState('idle'), 2000);
    return () => clearTimeout(id);
  }, [state]);

  // navigator.clipboard is undefined outside secure contexts, so guard before calling it.
  const copy = () => {
    if (!navigator.clipboard) return setState('failed');
    navigator.clipboard.writeText(profile.email).then(
      () => setState('copied'),
      () => setState('failed'),
    );
  };

  return (
    <button type="button" onClick={copy} className="btn btn-line">
      {state === 'copied' ? (
        <Check aria-hidden="true" className="swap-in size-4 text-accent-bright" />
      ) : (
        <Copy aria-hidden="true" className="size-4" />
      )}
      <span aria-live="polite" key={state} className={state === 'idle' ? undefined : 'swap-in'}>
        {state === 'copied' ? 'Copied' : state === 'failed' ? 'Copy failed' : 'Copy email'}
      </span>
    </button>
  );
}

/** The dark close of the page: one ask, the ways to reach me, then the footer. */
export function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-title" className="dark bg-night text-snow">
      <div className="container-page pt-24 md:pt-32">
        <p data-reveal="up" className="flex items-center gap-2.5 text-snow-2">
          <span className="live-dot" aria-hidden="true" />
          {profile.status}
        </p>
        <h2 id="contact-title" data-reveal="up" style={stagger(1)} className="mt-6 max-w-[18ch] text-4xl font-semibold">
          Need someone to own your front end?
        </h2>

        <div data-reveal="up" style={stagger(2)} className="mt-12 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <a
            href={`mailto:${profile.email}`}
            className="link text-xl font-medium break-all md:text-2xl md:break-normal"
          >
            {profile.email}
          </a>
          <div className="flex flex-wrap gap-3">
            <CopyEmail />
            <a href={`mailto:${profile.email}`} className="btn btn-solid">
              Email me
            </a>
          </div>
        </div>

        <div
          data-reveal="up"
          style={stagger(3)}
          className="mt-14 grid gap-8 border-t border-night-line py-8 sm:grid-cols-2 md:grid-cols-4"
        >
          {[...socials, { label: 'Resume', href: profile.resume }].map((s) => (
            <ExternalLink key={s.label} href={s.href} className="justify-between text-lg font-medium">
              {s.label}
            </ExternalLink>
          ))}
        </div>
      </div>
    </section>
  );
}
