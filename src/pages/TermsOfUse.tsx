import { useEffect } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const TermsOfUse = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <style jsx>{`
        ::selection {
          background-color: #ffff99; /* Light yellow color */
        }
      `}</style>
      <Navbar />
      <div className="flex-grow pt-16">
        <div className="bg-[#1A365D] py-8">
          <h1 className="text-3xl font-serif text-white text-center mb-0 tracking-wide">Kullanım Koşulları</h1>
        </div>
        <div className="container mx-auto px-4 py-8">
          <div className="prose max-w-4xl mx-auto">
            <p className="text-gray-700 mb-6">
              Av. Gülten Ayana, Öğretmenler Cd. Kardelen Apt No: 5/5, 06510 Çankaya/Ankara, Türkiye. Avukatlık Reklamı. Bir avukat seçimi önemli bir karardır ve yalnızca reklamlara dayanarak yapılmamalıdır. Sunulacak hukuki hizmetlerin kalitesinin diğer avukatların sunduğu hizmetlerin kalitesinden daha yüksek olduğuna dair hiçbir beyan yapılmamaktadır. Hizmetler tüm yargı bölgelerinde mevcut değildir. Bu firma ortak sorumluluğu sürdürmekle birlikte, bazı davalar ortak avukatlar içerebilir veya diğer firmalara yönlendirilebilir. Geçmiş veya önceki sonuçlar, gelecekteki sonuçlar veya benzer sonuçlar için garanti teşkil etmez. Her dava farklıdır ve kendi koşullarına göre değerlendirilmelidir. Bu web sitesindeki bilgiler hukuki tavsiye olarak yorumlanmamalıdır. Bu web sitesini kullanmanız, bir avukat-müvekkil ilişkisi oluşturmaz. Bu web sitesi aracılığıyla sağladığınız bilgiler, temsil yeteneğimizi belirlemek için diğer avukatlarla paylaşılabilir.
            </p>
            <h2 className="text-2xl font-serif text-primary mb-4">Sosyal Medya ve Sosyal Medya Doğrudan Mesajlaşma Kullanım Koşulları</h2>
            <p className="text-gray-700 mb-6">
              Bu site ve bu siteye doğrudan mesajlaşma yoluyla gönderilen bilgiler, tüm insanlar ve tüm durumlar için geçerli olması amaçlanmayan genel bilgiler içermektedir. Koşullarınız değişebilir. Hukuki sorunlarınız için bir avukatın tavsiyesini almak isteyebilirsiniz. Bu sitedeki veya site üzerinden doğrudan mesajlaşma yoluyla alınan içeriklere dayanarak yapılan veya yapılmayan eylemlerle ilgili tüm sorumluluğu açıkça reddediyorum.
            </p>
            <p className="text-gray-700 mb-6">
              Bu sitedeki hiçbir bilgi veya bize doğrudan mesajlaşma yoluyla sağlanan bilgiler, aramızda bir avukat-müvekkil ilişkisi oluşturmaz veya yaratmaz.
            </p>
            <p className="text-gray-700 mb-6">
              Belirli bir konuyla ilgili olarak bize herhangi bir bilgi sağlamayın, aksi takdirde bir avukat-müvekkil ilişkisi kurulana ve uygun bir iletişim yöntemi üzerinde anlaşılana kadar. Belirli bir konuyla ilgili bilgi sağlarsanız, bu bilginin diğer müvekkilleri temsil etme amacıyla kullanılmasına izin vermiş olursunuz.
            </p>
            <h2 className="text-2xl font-serif text-primary mb-4">Web Sitesi Kullanım Koşulları</h2>
            <p className="text-gray-700 mb-6">
              Bu kullanım koşulları, bu web sitesini kullanımınızı düzenler. Bu web sitesini kullanarak, bu kullanım koşullarını tamamen kabul etmiş olursunuz. Bu kullanım koşullarına veya bu kullanım koşullarının herhangi bir kısmına katılmıyorsanız, bu web sitesini kullanmamalısınız. Bu web sitesinde yer alan bilgiler yalnızca bilgilendirme amaçlıdır ve hukuki bilgi, tavsiye veya temsil olarak yorumlanmamalıdır. Bu web sitesinden alınan bilgiler aramızda bir avukat-müvekkil ilişkisi oluşturmaz veya oluşturması amaçlanmamaktadır. Bu web sitesinin tamamının veya bir kısmının iletimi ve/veya bu site veya başka bir şekilde e-posta yoluyla benimle iletişim kurulması, bir avukat-müvekkil ilişkisi oluşturmaz veya yaratmaz. Firmaya e-posta veya web sitesi aracılığıyla gönderilen herhangi bir bilgi güvenli olmayabilir ve gizli olmayan bir şekilde yapılır.
            </p>
            <p className="text-gray-700 mb-6">
              Bu site, tüm insanlar ve durumlar için geçerli olması amaçlanmayan genel bilgiler içermektedir. Koşullarınız değişebilir. Hukuki sorunlarınız için bir avukatın tavsiyesini almak isteyebilirsiniz. Bu sitedeki içeriklere dayanarak yapılan veya yapılmayan eylemlerle ilgili tüm sorumluluğu açıkça reddediyorum. Bu web sitesinin içeriği genel bilgiler içermektedir ve en güncel hukuki gelişmeleri, kararları veya anlaşmaları yansıtmayabilir.
            </p>
            <p className="text-gray-700 mb-6">
              Belirli bir konuyla ilgili olarak bize herhangi bir bilgi sağlamayın, aksi takdirde bir avukat-müvekkil ilişkisi kurulana ve uygun bir iletişim yöntemi üzerinde anlaşılana kadar. Belirli bir konuyla ilgili bilgi sağlarsanız, bu bilginin diğer müvekkilleri temsil etme amacıyla kullanılmasına izin vermiş olursunuz.
            </p>
            <p className="text-gray-700 mb-6">
              Bu web sitesi ve içeriği, herhangi bir türde garanti olmaksızın "OLDUĞU GİBİ" sağlanmaktadır, açık veya zımni, ticarete elverişlilik, belirli bir amaca uygunluk veya ihlal etmeme garantileri dahil ancak bunlarla sınırlı olmamak üzere. Ayrıca, bu web sitesini görüntüleyerek temsil edilmek isteyen herhangi bir kişiyi temsil etmek istemiyorum.
            </p>
            <p className="text-gray-700 mb-6">
              Web sitesinde yer alan materyalin çoğaltılması, dağıtılması, yeniden yayımlanması ve/veya yeniden iletilmesi, önceden yazılı iznim alınmadıkça yasaktır.
            </p>
            <p className="text-gray-700 mb-6">
              Bu kullanım koşullarının herhangi bir mahkeme veya diğer yetkili makam tarafından yasa dışı ve/veya uygulanamaz olduğuna karar verilirse, diğer hükümler yürürlükte kalmaya devam edecektir. Herhangi bir yasa dışı ve/veya uygulanamaz hüküm, bir kısmı silinirse yasal veya uygulanabilir olacaksa, o kısım silinmiş kabul edilecek ve geri kalan hüküm yürürlükte kalmaya devam edecektir. Bu kullanım koşulları, Türkiye Cumhuriyeti yasalarına göre yönetilecek ve yorumlanacaktır ve bu kullanım koşullarıyla ilgili herhangi bir anlaşmazlık, Türkiye Cumhuriyeti mahkemelerinin münhasır yargı yetkisine tabi olacaktır.
            </p>
            <p className="text-gray-700 mb-6">
              Bu koşullar, bu web sitesinin bu bölümünde belirtilmek dışında size bildirilmeden değiştirilebilir.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default TermsOfUse;
