function DoctorHero({ name, title, tagline, photos, profilePhoto }) {
  return (
    <section className="relative h-screen overflow-hidden">
      {/* Background carousel */}
      <div className="absolute inset-0">
        <window.DoctorCarousel photos={photos} />
      </div>
      
      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30"></div>
      
      {/* Content overlay */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-6 md:px-8 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Left side - Text content */}
            <div className="text-white">
              {/* Logo/Brand card */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-8 border border-white/20 max-w-md">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-3xl">🩺</span>
                  <div>
                    <div className="text-xl font-bold">{name}</div>
                    <div className="text-sm text-white/90">{title}</div>
                  </div>
                </div>
              </div>
              
              {/* Main headline */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                <span className="text-cyan-400">Compassionate</span>{' '}
                <span className="text-yellow-400">Medical Care</span>{' '}
                <span className="text-white">You Deserve</span>
              </h1>
              
              {/* Subtext */}
              <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed max-w-2xl">
                {tagline}. Schedule your consultation with ease, receive timely reminders, and experience healthcare made simple.
              </p>
              
              {/* CTA Button */}
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="#/booking" 
                  className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold rounded-xl transition-all transform hover:scale-105 shadow-lg"
                >
                  Schedule Consultation
                </a>
                <a 
                  href="#services" 
                  className="inline-flex items-center justify-center px-8 py-4 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white font-semibold rounded-xl border border-white/30 transition-all"
                >
                  ↓ View Our Services ↓
                </a>
              </div>
            </div>

            {/* Right side - Doctor profile photo */}
            <div className="hidden lg:flex justify-center items-center">
              <div className="relative">
                {profilePhoto ? (
                  <div className="relative w-80 h-80 xl:w-96 xl:h-96">
                    <img 
                      src={profilePhoto} 
                      alt={name}
                      className="w-full h-full object-cover rounded-3xl shadow-2xl border-4 border-white/20"
                    />
                    {/* Decorative elements */}
                    <div className="absolute -top-4 -right-4 w-8 h-8 bg-cyan-400 rounded-full shadow-lg"></div>
                    <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-yellow-400 rounded-full shadow-lg"></div>
                    <div className="absolute top-1/2 -left-8 w-4 h-4 bg-white/60 rounded-full"></div>
                  </div>
                ) : (
                  <div className="w-80 h-80 xl:w-96 xl:h-96 bg-white/10 backdrop-blur-sm rounded-3xl border-2 border-white/20 flex items-center justify-center text-white/70">
                    <div className="text-center">
                      <div className="text-6xl mb-4">👨‍⚕️</div>
                      <div className="text-lg">Add profile photo</div>
                    </div>
                  </div>
                )}
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
}
window.DoctorHero = DoctorHero;
