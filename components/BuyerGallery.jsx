const J = 'https://review-images.judgeme.com/coswheel/';
const PHOTOS = [
  { src: `${J}1755655779__6111__original.jpg?quality=80&width=640`, alt: 'Customer photo of a COSWHEEL GT20 shared in a review' },
  { src: `${J}1755655780__6106__original.jpg?quality=80&width=640`, alt: 'Second customer photo of a COSWHEEL GT20 in a review' },
  { src: `${J}1755655782__6104__original.jpg?quality=80&width=640`, alt: 'Third customer photo of a COSWHEEL GT20 in a review' },
  { src: `${J}1756969270__1000001327__original.jpg?quality=80&width=640`, alt: 'Customer photo of a COSWHEEL GT20 with added accessories' },
  { src: `${J}1755072673__inbound198268754417399921__original.jpg?quality=80&width=640`, alt: 'Customer photo of a COSWHEEL GT20 from a rider review' },
];

export default function BuyerGallery() {
  return (
    <section aria-labelledby="gallery-heading" className="bg-slate-950 pb-14 sm:pb-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 id="gallery-heading" className="text-xl font-extrabold text-white sm:text-2xl">Real rider photos</h2>
        <div className="mt-5 grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-5">
          {PHOTOS.map((p) => (
            <figure key={p.src} className="overflow-hidden rounded-xl border border-slate-800 bg-slate-900">
              <div className="aspect-square w-full">
                <img src={p.src} alt={p.alt} loading="lazy" className="h-full w-full object-cover object-center" />
              </div>
              <figcaption className="px-3 py-2 text-xs text-slate-400">Customer photo · COSWHEEL reviews</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
