import { profile } from '@/app/data/content';
import { label } from '@/app/lib/styles';
import { ContactDetails } from './ContactDetails';
import { CopyEmail } from './CopyEmail';

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

          <ContactDetails />
        </div>
      </div>
    </section>
  );
}
