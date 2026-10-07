import { Fact } from '@/app/components/drawing/Fact';
import { ExternalLink } from '@/app/components/ui/ExternalLink';
import { profile, socials } from '@/app/data/content';

/**
 * The title block: where I am and the other ways to reach me, as handles (short enough for one line).
 * <address> marks it as the page's contact details.
 */
export function ContactDetails() {
  return (
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
  );
}
