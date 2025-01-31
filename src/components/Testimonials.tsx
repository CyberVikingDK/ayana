import { useState } from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Berat Sönmez",
      comment: "Profesyonel ve güler yüzlü ekip 👍 …",
      avatar: "https://lh3.googleusercontent.com/a/ACg8ocIqBP93WEDUs7FDCmd6ilTbJPsujZV2dl05VXmg6y5mmGLA9g=w45-h45-p-rp-mo-br100",
      rating: 5,
    },
    {
      id: 2,
      name: "AYŞEGÜL HÖÇÜK",
      comment: "Başarılı bir hukuk bürosu. Güler yüzlü ekiplerinden ve dava sürecindeki desteklerinden dolayı çok teşekkür ederim.",
      avatar: "https://lh3.googleusercontent.com/a/ACg8ocL-CBpCfUEAcMI8QpkOxdKBtzE9eJuSjUwfo4JATvRht8pluA=w45-h45-p-rp-mo-br100",
      rating: 4,
    },
    {
      id: 3,
      name: "Büşra SÖNMEZ",
      comment: "İlgili ve başarılı çalışan ve avukatların bulunduğu bir hukuk bürosu.  Tavsiye edilir.",
      avatar: "https://lh3.googleusercontent.com/a-/ALV-UjXXE3kZuFjBzTBd7fe1mMJeFDPW7VViK7PMj1p6A-oI7scs6mE=w45-h45-p-rp-mo-br100",
      rating: 5,
    },
    {
      id: 4,
      name: "John Doe",
      comment: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt voluptatem alias ut provident sapiente repellendus.",
      avatar: "https://via.placeholder.com/150",
      rating: 3,
    },
    {
      id: 5,
      name: "Jane Doe",
      comment: "Great service and professional team. Highly recommended!",
      avatar: "https://via.placeholder.com/150",
      rating: 4,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 3 : prevIndex - 1));
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 3 ? 0 : prevIndex + 1));
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <svg key={index} fill={index < rating ? "currentColor" : "none"} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={`w-5 h-5 ${index < rating ? 'text-green-500' : 'text-gray-300'}`}>
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
      </svg>
    ));
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-serif text-primary text-center mb-12">Müvekkil Yorumları</h2>
        <div className="relative overflow-hidden">
          <div 
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * (100 / 3)}%)` }}
          >
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="w-1/3 flex-shrink-0 px-2">
                <div className="card bg-gray-100 p-8 rounded-lg shadow-lg">
                  <div className="header flex items-center gap-4">
                    <img src={testimonial.avatar} alt={testimonial.name} className="image w-16 h-16 rounded-full" />
                    <div>
                      <div className="stars flex gap-1">
                        {renderStars(testimonial.rating)}
                      </div>
                      <p className="name text-lg font-semibold text-gray-800 mt-1">{testimonial.name}</p>
                    </div>
                  </div>
                  <p className="message text-gray-600 mt-4">{testimonial.comment}</p>
                </div>
              </div>
            ))}
          </div>
          <button onClick={handlePrevClick} className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-primary text-white p-2 rounded-full shadow-md hover:bg-primary-dark">‹</button>
          <button onClick={handleNextClick} className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-primary text-white p-2 rounded-full shadow-md hover:bg-primary-dark">›</button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;