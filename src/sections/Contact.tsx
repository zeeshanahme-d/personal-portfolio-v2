import { useEffect, useState } from 'react';
import { Check, Copy } from 'lucide-react';
import { profile, socials } from '../content';
import { Fact } from '../components/Drawing';
import { ExternalLink } from '../components/ExternalLink';
import { label } from '../styles';

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

/**
 * The close of the page, as the set's last sheet: the one ask on the left (headline, what I'm looking for, the email
 * and two ways to send it), a title block of the other ways to reach me on the right. SiteFooter continues the pine.
 */
export function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-title" className="dark bg-night text-snow">
      <div className="container-page py-20 md:py-28">
        <p className={`${label} border-t border-night-line pt-8`}>
          <span className="tabular-nums">05</span> / Contact
        </p>

        <div className="mt-5 grid gap-x-10 gap-y-14 lg:grid-cols-12">
          <div className="lg:col-span-7">
            {/* The page's one large headline after the hero: this is the ask. */}
            <h2 id="contact-title" className="max-w-[18ch] text-4xl font-semibold">
              Need someone to own your front end?
            </h2>
            <p className="mt-6 flex items-center gap-2.5 text-snow-2">
              <span className="live-dot" aria-hidden="true" />
              {profile.status}
            </p>
            <a href={`mailto:${profile.email}`} className="link mt-12 inline-block text-xl font-medium break-all md:text-2xl md:break-normal">
              {profile.email}
            </a>
            <div className="mt-6 flex flex-wrap gap-3">
              <CopyEmail />
              <a href={`mailto:${profile.email}`} className="btn btn-solid">
                Email me
              </a>
            </div>
          </div>

          {/* The title block: where I am and the other ways to reach me, as handles (short enough for one line).
              <address> marks it as the page's contact details. */}
          <address className="not-italic lg:col-span-5 lg:col-start-8 lg:self-end">
            <dl>
              <Fact term="Based in">Islamabad, Pakistan (GMT+5)</Fact>
              {socials.map((s) => (
                <Fact key={s.label} term={s.label}>
                  <ExternalLink href={s.href} className="font-medium">
                    @{s.href.split('/').pop()}
                  </ExternalLink>
                </Fact>
              ))}
              <Fact term="Resume">
                <ExternalLink href={profile.resume} className="font-medium">
                  Download (PDF)
                </ExternalLink>
              </Fact>
            </dl>
          </address>
        </div>
      </div>
    </section>
  );
}
