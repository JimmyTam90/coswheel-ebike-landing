'use client';
import { useState } from 'react';
import { FEATURED_VIDEO_ID } from '@/lib/config';

// Single featured video: high-res thumbnail facade, iframe loads only on click.
export default function VideoShowcase() {
  const [playing, setPlaying] = useState(false);
  const [thumb, setThumb] = useState(`https://img.youtube.com/vi/${FEATURED_VIDEO_ID}/maxresdefault.jpg`);
  if (!FEATURED_VIDEO_ID) return null;

  return (
    <div className="mt-10">
      <h3 className="text-xl font-extrabold text-white sm:text-2xl">See a COSWHEEL in action</h3>
      <div className="relative mt-4 aspect-video w-full overflow-hidden rounded-2xl border border-slate-700 bg-black">
        {playing ? (
          <iframe
            className="absolute inset-0 h-full w-full"
            src={`https://www.youtube-nocookie.com/embed/${FEATURED_VIDEO_ID}?autoplay=1&rel=0`}
            title="COSWHEEL e-bike featured video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ) : (
          <button type="button" onClick={() => setPlaying(true)} aria-label="Play featured COSWHEEL video" className="group absolute inset-0 h-full w-full">
            <img
              src={thumb}
              alt="Featured COSWHEEL e-bike video thumbnail"
              className="h-full w-full object-cover object-center"
              onError={() => setThumb(`https://img.youtube.com/vi/${FEATURED_VIDEO_ID}/hqdefault.jpg`)}
            />
            <span className="absolute left-3 top-3 rounded-full bg-amber-400 px-3 py-1 text-xs font-extrabold text-slate-950">🔥 Watch in Action</span>
            <span className="absolute inset-0 flex items-center justify-center bg-black/20 transition group-hover:bg-black/30">
              <span className="flex h-16 w-16 items-center justify-center rounded-full bg-red-600 shadow-xl sm:h-20 sm:w-20">
                <svg viewBox="0 0 24 24" className="ml-1 h-7 w-7 text-white sm:h-9 sm:w-9" fill="currentColor" aria-hidden="true"><path d="M8 5v14l11-7z" /></svg>
              </span>
            </span>
          </button>
        )}
      </div>
    </div>
  );
}
