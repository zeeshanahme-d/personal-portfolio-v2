import { Screenshot } from '@/app/components/ui/Screenshot';
import { showScreenshots, type CaseStudy } from '@/app/data/content';
import { ScreenshotFrame } from './ScreenshotFrame';
import { StampySchematic } from './StampySchematic';

/**
 * A sheet's visual, on the left two-thirds from lg: the screenshots in a browser frame (with a phone capture where
 * there is one), or a drawn schematic for a private app without screenshots. Placed explicitly in the sheet's grid,
 * so a sheet without a visual still lines up.
 */
export function CaseVisual({ project }: { project: CaseStudy }) {
  if (showScreenshots && project.images?.length) {
    return (
      // Whole screenshots, never cropped: on a short window the frame narrows instead, so it fits on screen with
      // the header, rule and name above it (about 19rem; the captures are 16:10). Extra room under a phone
      // capture, which hangs below the frame.
      <div className={`relative lg:col-span-8 lg:row-start-1 lg:max-w-[calc((100svh-19rem)*1.6)] ${project.phone ? 'md:mb-10' : ''}`}>
        <ScreenshotFrame
          name={project.name}
          url={project.url}
          screens={project.images.map((s) => (
            <Screenshot key={s.src} image={s} sizes="(min-width: 64rem) 50rem, 92vw" />
          ))}
          paths={project.images.map((s) => s.path)}
        />
        {project.phone && (
          <img
            src={project.phone.src}
            width={project.phone.width}
            height={project.phone.height}
            alt={project.phone.alt}
            loading="lazy"
            decoding="async"
            className="absolute right-6 -bottom-12 hidden w-[15%] rounded-[1.25rem] border-[5px] border-night-2 shadow-[0_30px_60px_-20px_rgb(0_0_0/0.8)] ring-1 ring-white/10 md:block lg:right-10"
          />
        )}
      </div>
    );
  }

  if (project.name === 'Stampy') {
    return (
      <div className="lg:col-span-8 lg:row-start-1">
        <StampySchematic />
      </div>
    );
  }

  return null;
}
