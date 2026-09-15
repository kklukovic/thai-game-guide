import "./PimGallery.css";

const pimPhotos = [
  { src: "/pim-resort.png", alt: "Pim at a seaside resort", label: "Pim · Thailand" },
  { src: "/pim-beach.png", alt: "Pim on the beach", label: "Beach evening" },
  { src: "/pim-balcony.png", alt: "Pim relaxing on a balcony", label: "Pim's day" },
];

const PimGallery = () => (
  <section className="pim-gallery" aria-label="Pim lifestyle photos">
    {pimPhotos.map((photo, index) => (
      <figure key={photo.src} className={`pim-gallery-item pim-gallery-item-${index + 1}`}>
        <img src={photo.src} alt={photo.alt} loading="eager" />
        <figcaption>{photo.label}</figcaption>
      </figure>
    ))}
  </section>
);

export default PimGallery;
