import { useEffect } from "react";

const WhyUs = () => {
  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("why-us");
      const sectionTop = section.getBoundingClientRect().top;
      const triggerPoint = window.innerHeight / 1.3;

      if (sectionTop < triggerPoint) {
        const counters = document.querySelectorAll(".counter");
        counters.forEach((counter) => {
          const updateCount = () => {
            const target = +counter.getAttribute("data-target");
            const count = +counter.innerText;
            let increment;

            if (target === 9) {
              increment = 0.1; // Count by 0.1
            } else if (target === 500) {
              increment = 25; // Count by 25
            } else if (target === 95) {
              increment = 5; // Count by 5
            }

            if (count < target) {
              counter.innerText = Math.ceil(count + increment);
              setTimeout(updateCount, 50); // Slower update interval
            } else {
              counter.innerText = target;
            }
          };
          updateCount();
        });
        window.removeEventListener("scroll", handleScroll);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="why-us" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-serif text-primary text-center mb-12 animate-fadeIn">Neden Biz?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center animate-slideInUp">
            <h3 className="text-2xl font-bold text-primary mb-4">
              <span className="counter animate-count" data-target="9">0</span>+ Yıllık Deneyim
            </h3>
            <p className="text-gray-600 animate-fadeIn">9 yılı aşkın süredir hukuk alanında hizmet veriyoruz.</p>
          </div>
          <div className="text-center animate-slideInUp">
            <h3 className="text-2xl font-bold text-primary mb-4">
              <span className="counter animate-count" data-target="500">0</span>+ Başarılı Dava
            </h3>
            <p className="text-gray-600 animate-fadeIn">500'den fazla başarılı dava ile müvekkillerimize güven veriyoruz.</p>
          </div>
          <div className="text-center animate-slideInUp">
            <h3 className="text-2xl font-bold text-primary mb-4">
              <span className="counter animate-count" data-target="95">0</span>% Müvekkil Memnuniyeti
            </h3>
            <p className="text-gray-600 animate-fadeIn">Müvekkillerimizin %95'i hizmetlerimizden memnun kaldı.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;