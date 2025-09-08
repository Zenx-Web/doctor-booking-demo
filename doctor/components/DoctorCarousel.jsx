function DoctorCarousel({ photos = [], intervalMs = 3000 }) {
  const [idx, setIdx] = React.useState(0);
  const hasPhotos = photos && photos.length > 0;

  React.useEffect(() => {
    if (!hasPhotos) return;
    const id = setInterval(() => {
      setIdx((i) => (i + 1) % photos.length);
    }, intervalMs);
    return () => clearInterval(id);
  }, [photos, intervalMs, hasPhotos]);

  if (!hasPhotos) {
    return (
      <div className="h-full bg-gradient-to-br from-blue-600 via-purple-600 to-cyan-500 flex items-center justify-center text-white/80">
        Add doctor photos to /assets and list them in assets/photos.json
      </div>
    );
  }

  return (
    <div className="relative h-full overflow-hidden">
      {photos.map((src, i) => (
        <img
          key={src + i}
          src={src}
          alt="Doctor"
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${i === idx ? 'opacity-100' : 'opacity-0'}`}
          loading="lazy"
        />
      ))}
      <div className="absolute bottom-4 right-4 flex gap-2">
        {photos.map((_, i) => (
          <span key={i} className={`h-2 w-2 rounded-full transition-all ${i === idx ? 'bg-white shadow-lg' : 'bg-white/50'}`}></span>
        ))}
      </div>
    </div>
  );
}
window.DoctorCarousel = DoctorCarousel;
