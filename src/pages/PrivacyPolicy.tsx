import React from 'react';
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const PrivacyPolicy = () => {
  return (
    <>
      <style jsx>{`
        ::selection {
          background-color: #ffff99; /* Light yellow color */
        }
      `}</style>
        <Navbar />
      <section className="pt-16 py-0 bg-gray-50 flex flex-col min-h-screen">
        <div className="bg-[#1A365D] py-8">
          <h2 className="text-3xl font-serif text-white text-center mb-0 tracking-wide">Gizlilik Politikası</h2>
        </div>
        <div className="container mx-auto px-6 lg:px-12 flex-grow py-8">
          <div className="text-gray-800 space-y-6">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Hangi bilgileri topluyoruz?</h3>
            <p className="text-base">Web sitemize kayıt olduğunuzda veya bir form doldurduğunuzda sizden bilgi topluyoruz.</p>
            <p className="text-base">Bu siteye kayıt olurken, uygun olduğunda, adınızı, e-posta adresinizi, telefon numaranızı veya diğer bilgilerinizi girmeniz istenebilir. Ancak, sitemizi anonim olarak ziyaret edebilirsiniz.</p>
            <p className="text-base">Google, üçüncü taraf bir satıcı olarak, bu sitede reklam sunmak için çerezleri kullanır. Google'ın DART çerezini kullanması, kullanıcılarınıza sitenize ve İnternet'teki diğer sitelere yaptıkları ziyaretlere dayalı olarak reklam sunmasını sağlar. Kullanıcılar, Google reklam ve içerik ağı gizlilik politikasını ziyaret ederek DART çerezinin kullanımından vazgeçebilirler.</p>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Bilgilerinizi ne için kullanıyoruz?</h3>
            <p className="text-base">Topladığımız bilgilerden herhangi biri aşağıdaki şekillerde kullanılabilir:</p>
            <ul className="list-disc pl-6 space-y-2 text-base">
              <li>Deneyiminizi kişiselleştirmek için (bilgileriniz, bireysel ihtiyaçlarınıza daha iyi yanıt vermemize yardımcı olur)</li>
              <li>Web sitemizi geliştirmek için (bilgileriniz ve geri bildirimleriniz temelinde web sitemiz tekliflerini sürekli olarak geliştirmeye çalışıyoruz)</li>
              <li>Müşteri hizmetlerini geliştirmek için (bilgileriniz, müşteri hizmetleri taleplerinize ve destek ihtiyaçlarınıza daha etkili bir şekilde yanıt vermemize yardımcı olur)</li>
            </ul>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Bilgilerinizi nasıl koruyoruz?</h3>
            <p className="text-base">Kişisel bilgilerinizin güvenliğini sağlamak için çeşitli güvenlik önlemleri uyguluyoruz.</p>
            <p className="text-base">Güvenli bir sunucu kullanımı sunuyoruz. Sağlanan tüm hassas/kredi bilgileri, Güvenli Yuva Katmanı (SSL) teknolojisi aracılığıyla iletilir ve ardından yalnızca özel erişim haklarına sahip olanlar tarafından erişilebilen ve bilgileri gizli tutmakla yükümlü olan sistemlerimize şifrelenir.</p>
            <p className="text-base">Bir işlemden sonra, özel bilgileriniz (kredi kartları, sosyal güvenlik numaraları, finansal bilgiler vb.) 60 günden fazla dosyada tutulmaz.</p>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Çerez kullanıyor muyuz?</h3>
            <p className="text-base">Evet (Çerezler, bir site veya hizmet sağlayıcısının, web tarayıcınız aracılığıyla (izin verirseniz) bilgisayarınızın sabit diskine aktardığı küçük dosyalardır ve bu dosyalar, site veya hizmet sağlayıcı sistemlerinin tarayıcınızı tanımasını ve belirli bilgileri hatırlamasını sağlar.)</p>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Metin Mesajları</h3>
            <p className="text-base">Cep telefonu numaranızı sağlayarak, size hesabınızla ilgili bilgi sağlamak için metin mesajları gönderme izni vermiş olursunuz. Bu izni vererek, otomatik telefon arama sistemleri, otomatik metin mesajı sistemleri ve yapay veya önceden kaydedilmiş mesajlar kullanarak sizinle iletişime geçmemize izin vermiş olursunuz. Bu izni vererek, bize sağladığınız herhangi bir cep telefonu numarasının sahibi veya alışılmış kullanıcısı olduğunuzu da beyan etmiş olursunuz. Hücresel sağlayıcınızın Mesaj ve Veri Ücretleri Uygulanabilir.</p>
            <p className="text-base">Gönderdiğimiz metin mesajlarının telefonunuza erişimi olan herkes tarafından görülebileceğini anlıyorsunuz ve bu tür mesajlara erişen herhangi bir kişiden sorumlu olmadığımızı kabul ediyorsunuz. Buna göre, telefonunuzu ve metin mesajlarınızı özel tutmak istiyorsanız, telefonunuzu ve metin mesajlarınızı korumak için önlemler almalısınız.</p>
            <p className="text-base">SMS hizmetini istediğiniz zaman iptal edebilirsiniz. Sadece STOP yazıp gönderin. Bize STOP SMS mesajını gönderdikten sonra, aboneliğinizin iptal edildiğini onaylamak için size bir SMS mesajı göndereceğiz. Bundan sonra, bizden SMS mesajları almayacaksınız. Tekrar katılmak isterseniz, ilk kez yaptığınız gibi kaydolun ve size tekrar SMS mesajları göndermeye başlayacağız.</p>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Bilgilerinizi dış taraflara açıklıyor muyuz?</h3>
            <p className="text-base">Kişisel olarak tanımlanabilir bilgilerinizi dış taraflara satmıyoruz, ticaretini yapmıyoruz veya başka bir şekilde aktarmıyoruz. Bu, web sitemizi işletmemize, işimizi yürütmemize veya size hizmet etmemize yardımcı olan güvenilir üçüncü tarafları içermez, bu tür taraflar bu bilgileri gizli tutmayı kabul ettikleri sürece. Ayrıca, yasaya uymak, site politikalarımızı uygulamak veya bizim veya başkalarının haklarını, mülkünü veya güvenliğini korumak gerektiğine inandığımızda bilgilerinizi serbest bırakabiliriz. Ancak, kişisel olarak tanımlanabilir olmayan ziyaretçi bilgileri, pazarlama, reklam veya diğer kullanımlar için diğer taraflara sağlanabilir.</p>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Üçüncü taraf bağlantıları</h3>
            <p className="text-base">Zaman zaman, kendi takdirimize bağlı olarak, web sitemizde üçüncü taraf ürün veya hizmetler sunabilir veya bunları içerebiliriz. Bu üçüncü taraf sitelerinin ayrı ve bağımsız gizlilik politikaları vardır. Bu nedenle, bu bağlantılı sitelerin içeriği ve faaliyetleri için hiçbir sorumluluk veya yükümlülük kabul etmiyoruz. Bununla birlikte, sitemizin bütünlüğünü korumaya çalışıyoruz ve bu siteler hakkında her türlü geri bildirimi memnuniyetle karşılıyoruz.</p>
          </div>
        </div>
        <Footer />
      </section>
    </>
  );
};

export default PrivacyPolicy;
