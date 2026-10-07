import { ImageIcon } from 'lucide-react';
import { portrait } from '@/app/data/content';
import { label } from '@/app/lib/styles';

/** The portrait as a figure plate with crop marks (Fig. 04.1); a placeholder until a photo is set in data/content.ts. */
export function Portrait() {
  return (
    <figure className="w-full max-w-80 lg:col-span-4 xl:col-span-3">
      <div className="plate">
        {portrait ? (
          <img
            src={portrait.src}
            alt={portrait.alt}
            width={800}
            height={993}
            loading="lazy"
            decoding="async"
            className="aspect-4/5 w-full object-cover"
          />
        ) : (
          <div className="placeholder aspect-4/5">
            <ImageIcon aria-hidden="true" className="size-5" />
            Photo
          </div>
        )}
      </div>
      <figcaption className={`${label} mt-3`}>Fig. 04.1 / Zeeshan Ahmed, Islamabad</figcaption>
    </figure>
  );
}
