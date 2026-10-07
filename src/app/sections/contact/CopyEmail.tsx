'use client';

import { useEffect, useState } from 'react';
import { Check, Copy } from 'lucide-react';
import { profile } from '@/app/data/content';

type CopyState = 'idle' | 'copied' | 'failed';

/** Copies the email address, confirms for two seconds, then resets. */
export function CopyEmail() {
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
