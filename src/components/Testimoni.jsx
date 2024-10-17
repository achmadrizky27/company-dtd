import { useEffect, useState } from "react";

// Tambahkan URL gambar di setiap testimoni
const testimonials = [
  {
    id: 1,
    text: "Kolaborasi dengan PT. Drafire Tech Development benar-benar mengubah bisnis kami. Solusi teknologi yang mereka tawarkan sangat inovatif dan tepat sasaran! Jangan ragu percayakan produk kalian!",
    author: "CEO Blue Bird - Thom Haye",
    image: "../patners/bluebird.png",
  },
  {
    id: 2,
    text: "Tim Drafire Tech Development sangat profesional dan cepat tanggap. Mereka mampu menerjemahkan kebutuhan kami menjadi platform yang user-friendly dan fungsional!",
    author: "Direktur Garuda Indonesia - Ragnar Oratmangoen",
    image: "../patners/garudaindonesia.png",
  },
  {
    id: 3,
    text: "Kami sangat puas dengan hasil kerja PT. Drafire Tech Development. Aplikasi yang mereka bangun membantu meningkatkan efisiensi operasional kami secara signifikan!",
    author: "Manager Gojek - Ivan Jenner",
    image: "../patners/gojek.png",
  },
  {
    id: 4,
    text: "Drafire Tech Development benar-benar partner teknologi yang dapat diandalkan. Kami mendapat dukungan penuh mulai dari tahap perencanaan hingga implementasi!",
    author: "Lead Kominfo - Rafael Struck",
    image: "../patners/kominfo.png",
  },
  {
    id: 5,
    text: "Layanan PT. Drafire Tech Development benar-benar luar biasa. Mereka tidak hanya membangun sistem yang kami butuhkan, tetapi juga memberikan saran yang tepat untuk masa depan teknologi perusahaan kami.",
    author: "Lead Shopee - Marteen Paes",
    image: "../patners/shopee.png",
  },
  {
    id: 6,
    text: "Drafire Tech Development selalu memberikan solusi terbaik untuk setiap tantangan teknis kami. Kami sangat terkesan dengan dedikasi dan keahlian mereka!",
    author: "Lead of IT Tokopedia - Jordi Amat",
    image: "../patners/tokopedia.png",
  },
  {
    id: 7,
    text: "PT. Drafire Tech Development mampu menghadirkan aplikasi mobile yang efisien dan menarik, sesuai dengan harapan kami. Pekerjaan yang sangat memuaskan!",
    author: "Founder Toyota - Eliano",
    image: "../patners/toyota.png",
  },
  {
    id: 8,
    text: "Kerja sama kami dengan PT. Drafire Tech Development telah melahirkan solusi digital yang memudahkan operasional dan meningkatkan kepuasan pelanggan kami.",
    author: "Lead Traveloka - Mees Hilgers",
    image: "../patners/traveloka.png",
  },
  {
    id: 9,
    text: "Drafire Tech Development adalah mitra teknologi yang sangat profesional. Hasil kerja mereka tak hanya memenuhi kebutuhan bisnis kami, tetapi juga membawa efisiensi jangka panjang.",
    author: "Manajer United Tractors - Kevin Disk",
    image: "../patners/unitedtractors.png",
  },
];

const Testimonial = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000); // ganti setiap 5 detik

    return () => clearInterval(interval); // bersihkan interval saat komponen unmount
  }, []);

  return (
    <div className="max-w-7xl mx-auto text-slate-700">
      <div className="bg-white flex flex-col items-center p-5 rounded-md shadow-lg space-y-2">
        <img src={testimonials[currentTestimonial].image} alt={testimonials[currentTestimonial].author} className="w-28 object-cover" />
        <div className="space-y-2">
          <p className="text-lg italic ">"{testimonials[currentTestimonial].text}"</p>
          <p className="text-right font-bold">{testimonials[currentTestimonial].author}</p>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
