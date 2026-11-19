import { profile } from '@/app/data/content';
import { ContactDetails } from './ContactDetails';
import { CopyEmail } from './CopyEmail';

/**
 * The close of the page: the one ask on the left (headline, what I'm looking for, the email and two ways to send
 * it), the other ways to reach me on the right. SiteFooter continues the colour.
 */
export function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-title" className="dark bg-night text-snow">
      <div className="container-page py-20 md:py-28">
        <div className="grid grid-cols-1 gap-x-10 gap-y-14 border-t border-night-line pt-8 lg:grid-cols-12">
          <div className="lg:col-span-7">
            {/* The page's one large headline after the hero: this is the ask. */}
            <h2 id="contact-title" className="max-w-[18ch] text-4xl font-semibold">
              Need someone to own the whole stack?
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
