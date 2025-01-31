const Hero = () => {
  return (
    <div id="home" className="relative bg-gray-900 min-h-screen flex items-center overflow-hidden">
      {/* İçerik */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white text-center">
        <div className="animate-fadeIn">
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6">
            Hukuki Sorunlarınızda Yanınızdayız
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
            Ayana Avukatlık Bürosu olarak, modern ve etkili hukuki çözümler sunuyoruz. Uzman avukatlarımızla her zaman yanınızdayız.
          </p>
          <div className="space-x-4">
            <a
              href="/contact"
              className="inline-block bg-accent hover:bg-accent-light text-white font-bold py-3 px-8 rounded-md transition-colors"
              style={{ userSelect: 'none' }}
            >
              Randevu Alın
            </a>
            <a
              href="tel:+0312 433 66 23"
              className="inline-block bg-transparent border-2 border-white hover:border-accent text-white font-bold py-3 px-8 rounded-md transition-colors"
              style={{ userSelect: 'none' }}
            >
              Hemen Ara
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;