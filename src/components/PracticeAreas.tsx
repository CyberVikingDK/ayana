import { useEffect, useRef } from "react";
import { Scale, Briefcase, Building, Users, Shield, Gavel } from "lucide-react";

const practices = [
  {
    title: "Şirketler Hukuku",
    description: "Her büyüklükteki işletme için kapsamlı hukuki çözümler",
    icon: Building,
  },
  {
    title: "Medeni Dava",
    description: "Medeni anlaşmazlıklar ve davalarda uzman temsil",
    icon: Gavel,
  },
  {
    title: "Aile Hukuku",
    description: "Aile hukuku konularında şefkatli rehberlik",
    icon: Users,
  },
  {
    title: "Ceza Savunması",
    description: "Haklarınız ve özgürlüğünüz için güçlü savunma",
    icon: Shield,
  },
  {
    title: "Ticaret Hukuku",
    description: "Ticari işlemler için stratejik danışmanlık",
    icon: Briefcase,
  },
  {
    title: "İş Hukuku",
    description: "Çalışan ve işveren haklarının korunması",
    icon: Scale,
  },
];

const PracticeAreas = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const section = sectionRef.current;
      if (section) {
        const rect = section.getBoundingClientRect();
        if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
          section.classList.add("fadeInUp");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="practice-areas" className="py-20 bg-secondary" ref={sectionRef}>
      <style jsx>{`
        ::selection {
          background-color: #ffff99; /* Light yellow color */
        }
        .fadeInUp {
          animation: fadeInUp 1s ease-in-out;
        }
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-serif text-center text-primary mb-12">
          Çalışma Alanlarımız
        </h2>
        <p className="text-center text-gray-700 mb-12">
          Ticaret Hukuku, Gayrimenkul Hukuku, Aile Hukuku, Fikri ve Sınai Haklar Hukuku, Marka ve Patent Hukuku, İdare Hukuku, Ceza Hukuku, Vergi Hukuku, İş Hukuku, İcra ve İflas Hukuku, Deniz Hukuku, Sözleşmeler, Şirket Hisse Devirleri ve Birleşmeleri alanında uzman avukat ve danışman ekibiyle hizmet vermektedir.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {practices.map((practice) => (
            <div
              key={practice.title}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <practice.icon className="w-12 h-12 text-accent mb-4" />
              <h3 className="text-xl font-serif text-primary mb-2">{practice.title}</h3>
              <p className="text-gray-600">{practice.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PracticeAreas;