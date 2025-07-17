import React, { useState, useEffect } from "react";

export default function App() {
  const [activeSection, setActiveSection] = useState("home");
  const [darkMode, setDarkMode] = useState(false);
  const [queueNumber, setQueueNumber] = useState("");
  const [queueStatus, setQueueStatus] = useState("");
  const [filter, setFilter] = useState("all");
  const [bookingSuccess, setBookingSuccess] = useState(false);
  const [paymentMethod] = useState("BCA - 123123321 a/n PT. WashMyCar");
  const [bookingData, setBookingData] = useState({
    name: "",
    plate: "",
    service: "",
    datetime: ""
  });

  // Handle Input Change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBookingData(prev => ({ ...prev, [name]: value }));
    {/* Payment Section */}
    <div className="mt-4">
      <label className="block mb-2 text-sm font-medium">Metode Pembayaran</label>
      <div className="bg-indigo-100 dark:bg-indigo-900 p-4 rounded-lg text-gray-800 dark:text-white font-medium">
        {paymentMethod}
      </div>
      <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
        Harap lakukan pembayaran setelah konfirmasi dari admin.
      </p>
    </div>
  };

  // Submit Form Booking
const handleSubmit = (e) => {
  e.preventDefault();

  if (!bookingData.name || !bookingData.plate || !bookingData.service || !bookingData.datetime) {
    alert("Harap lengkapi semua data!");
    return;
  }

  console.log("Data Booking:", bookingData);
  setBookingSuccess(true);

  // Reset form setelah 3 detik
  setTimeout(() => {
    setBookingSuccess(false);
    setBookingData({ name: "", plate: "", service: "", datetime: "" });
  }, 3000);

  window.scrollTo({ top: 0, behavior: "smooth" });
};

  // Simulasi cek antrian
  const checkQueueStatus = () => {
    if (queueNumber.trim()) {
      const statuses = ["Menunggu", "Dalam Proses", "Selesai"];
      const randomIndex = Math.floor(Math.random() * statuses.length);
      setQueueStatus(statuses[randomIndex]);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  // Scroll to Top
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Efek tombol scroll muncul saat scroll >500px
  useEffect(() => {
    const handleScroll = () => {
      const btn = document.getElementById("scrollTopBtn");
      if (btn) {
        btn.style.display = window.scrollY > 500 ? "block" : "none";
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Daftar layanan
  const services = [
    { id: 1, name: "Cuci Basic", price: 25000, type: "basic" },
    { id: 2, name: "Cuci Premium", price: 45000, type: "premium" },
    { id: 3, name: "Detailing Mobil", price: 90000, type: "detailing" },
  ];

  // Testimoni pelanggan
  const testimonials = [
    { name: "Andi S.", text: "Pelayanan cepat dan hasil memuaskan!", image: "/rev1.jpg" },
    { name: "Siti R.", text: "Mobil saya kinclong seperti baru!", image: "/rev2.jpg" },
    { name: "Budi T.", text: "Saya pasti akan kembali lagi.", image: "/rev3.jpg" },
  ];


  return (
    <div className={`min-h-screen font-sans transition-colors duration-300 ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'}`}>

      {/* Header / Navbar */}
      <header className="sticky top-0 z-50 bg-white dark:bg-gray-800 shadow-md">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <img src="/logo.jpg" alt="Logo Car Wash" className="w-10 h-10 rounded-full object-contain" />
            <h1 className="text-xl font-bold text-indigo-600">WashMyCar</h1>
          </div>
          <nav className="space-x-8 hidden md:flex">
            {["Beranda", "Paket", "Booking", "Antrian", "Testimoni"].map((item, i) => (
              <button
                key={i}
                onClick={() => setActiveSection(item.toLowerCase().replace(" ", ""))}
                className={`hover:text-indigo-600 relative group ${
                  activeSection === item.toLowerCase().replace(" ", "") ? "text-indigo-600" : "text-gray-700"
                }`}
              >
                {item}
                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-indigo-600 group-hover:w-full transition-all duration-300"></span>
              </button>
            ))}
          </nav>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition"
          >
            {darkMode ? "☀️" : "🌙"}
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className={`${activeSection === "home" ? "block" : "hidden"} transition-opacity duration-500`}>
        <div
          style={{ backgroundImage: "url('bg1.jpg')" }}
          className="bg-cover bg-center bg-no-repeat bg-fixed min-h-[60vh] flex items-center relative"
        >
          {/* Overlay untuk teks lebih jelas */}
          <div className="absolute inset-0 bg-black opacity-50"></div>

          <img
            src="/ilustrasi-cuci.jpg"
            alt="Ilustrasi Cuci Mobil"
            className="mx-auto mt-10 rounded-xl shadow-lg w-full max-w-3xl"
          />

          {/* Konten utama */}
          <div className="container mx-auto px-6 py-24 text-center text-white z-10">
            <h2 className="text-6xl font-bold mb-4">Selamat Datang di WashMyCar</h2>
            <p className="mb-8 text-lg max-w-xl mx-auto">
              Website pemesanan layanan cuci mobil online yang kami buat sebagai proyek UAS Pemrograman Web.
            </p>
            <button
              onClick={() => setActiveSection("booking")}
              className="px-6 py-3 bg-white text-indigo-600 hover:bg-indigo-50 rounded-lg transform hover:scale-105 transition shadow-md"
            >
              Booking Sekarang
            </button>
          </div>
        </div>

        {/* Statistik Singkat + CTA Sekunder */}
        <div className="bg-white dark:bg-gray-900 py-12 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center mb-8">
              <div>
                <h3 className="text-4xl font-bold text-indigo-600">1.2K+</h3>
                <p className="text-gray-600 dark:text-gray-300">Mobil Dicuci</p>
              </div>
              <div>
                <h3 className="text-4xl font-bold text-indigo-600 flex justify-center items-center gap-1">
                  4.9 <span role="img" aria-label="star">⭐</span>
                </h3>
                <p className="text-gray-600 dark:text-gray-300">Rating Pelanggan</p>
              </div>
              <div>
                <h3 className="text-4xl font-bold text-indigo-600">5 Tahun</h3>
                <p className="text-gray-600 dark:text-gray-300">Pengalaman</p>
              </div>
            </div>

            {/* CTA Sekunder */}
            <div className="text-center mt-8">
              <p className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">
                Ingin mobilmu bersih tanpa antri?
              </p>
              <button
                onClick={() => setActiveSection("paket")}
                className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition shadow-md hover:shadow-lg transform hover:scale-105 duration-300"
              >
                Lihat Paket Layanan
              </button>
            </div>
          </div>
        </div>  

        <div className="grid md:grid-cols-3 gap-6 mt-12">
          {[
            { icon: "🧽", title: "Bersih Maksimal", desc: "Menggunakan peralatan modern dan shampo berkualitas tinggi." },
            { icon: "⏱️", title: "Cepat & Efisien", desc: "Waktu cuci hanya 15–30 menit tergantung paket." },
            { icon: "💳", title: "Booking & Bayar Online", desc: "Tanpa antre! Booking dan bayar dari rumah." },
          ].map((f, i) => (
            <div key={i} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow text-center">
              <div className="text-4xl mb-3">{f.icon}</div>
              <h4 className="font-semibold text-lg mb-2">{f.title}</h4>
              <p className="text-gray-500 dark:text-gray-300">{f.desc}</p>
            </div>
          ))}
        </div>

        {/* About Us / Tentang Aplikasi */}
        <div className="container mx-auto px-6 py-16">
          <h3 className="text-2xl font-bold text-gray-800 dark:text-white text-center mb-6">Tentang Website Ini</h3>
          <p className="text-gray-600 dark:text-gray-300 text-center max-w-3xl mx-auto leading-relaxed">
            Website ini dibuat sebagai proyek akhir semester (UAS) untuk mengelola sistem pemesanan cuci mobil secara sederhana.
            Dengan fitur navigasi halaman, filter harga, form booking, dan status antrian, kami berharap website ini dapat menjadi contoh penggunaan React + Tailwind CSS yang kreatif dan bermanfaat.
          </p>
        </div>

        {/* Team Members */}
        <div className="container mx-auto px-6 py-10">
          <h3 className="text-2xl font-bold text-center mb-10 text-gray-800 dark:text-white">Anggota Kelompok</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6">
            {[
              { name: "Atar as Aditya H (230401307)", role: "Head of Development", photo: "/adit.jpeg" },
              { name: "Mulia Agustina (230401345)", role: "Backend Developer", photo: "/mulia.jpeg" },
              { name: "Irgi Kurniawan (220401108)", role: "Frontend Engineer", photo: "/irgi.jpeg" },
              { name: "Abdelillah Nadhir (230401200)", role: "QA & Deployment Specialist", photo: "/nade.jpeg" },
              { name: "Muhammad Dhuhan (230401181)", role: "Lead UI/UX Designer", photo: "/duhan.jpeg" }
            ].map((member, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 p-5 rounded-lg shadow hover:shadow-xl transition-shadow text-center border border-gray-100 dark:border-gray-700 group relative overflow-hidden">
                {/* Hover Effect */}
                <div className="absolute inset-0 bg-indigo-600 opacity-0 group-hover:opacity-50 transition duration-300"></div>

                {/* Profile Picture */}
                <img src={member.photo} alt={member.name} className="w-20 h-20 mx-auto rounded-full object-cover mb-4" />

                {/* Name and Role */}
                <h4 className="font-semibold text-lg">{member.name}</h4>
                <p className="text-sm text-gray-500 dark:text-gray-400">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="paket" className={`${activeSection === "paket" ? "block" : "hidden"} py-16 bg-white dark:bg-gray-900 transition-opacity duration-500`}>
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-10">Paket Layanan & Harga</h2>
          <div className="flex justify-center gap-4 mb-8 flex-wrap">
            {["Semua", "Basic", "Premium", "Detailing"].map((type) => (
              <button
                key={type}
                onClick={() => setFilter(type === "Semua" ? "all" : type.toLowerCase())}
                className={`px-4 py-2 rounded-full transition-all duration-300 ${filter === (type === "Semua" ? "all" : type.toLowerCase())
                    ? "bg-indigo-600 text-white"
                    : "bg-gray-200 dark:bg-gray-700"
                  }`}
              >
                {type}
              </button>
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services
              .filter((s) => filter === "all" || s.type === filter)
              .map((service) => (
                <div
                  key={service.id}
                  className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow hover:shadow-xl transition-all border border-gray-100 dark:border-gray-700"
                >
                  <h3 className="text-xl font-semibold mb-2">{service.name}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    Paket layanan {service.type}
                  </p>
                  <p className="font-bold text-indigo-600 mb-4">
                    Rp {service.price.toLocaleString()}
                  </p>
                  <button
                    onClick={() => {
                      setBookingData(prev => ({ ...prev, service: service.type }));
                      setActiveSection("booking");
                    }}
                    className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
                  >
                    Pesan Sekarang
                  </button>
                </div>
              ))}
          </div>
        </div>
      </section>

      {/* Booking Form */}
      <section id="booking" className={`${activeSection === "booking" ? "block" : "hidden"} py-16 bg-white dark:bg-gray-900 transition-opacity duration-500`}>
        <div className="container mx-auto max-w-lg px-6">
          <h2 className="text-3xl font-bold text-center mb-8">Form Booking Cuci Mobil</h2>

          {/* Notifikasi Sukses */}
          {bookingSuccess && (
            <div className="mb-6 p-4 bg-green-100 text-green-800 dark:bg-green-800 dark:text-green-100 rounded shadow-md animate-fade-in">
              <p>✅ Booking berhasil! Silakan lakukan pembayaran melalui:</p>
              <p className="font-semibold mt-2">{paymentMethod}</p>
              <p className="text-sm mt-1">Lakukan pembayaran dalam waktu 1x24 jam.</p>
            </div>
          )}
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block mb-2 text-sm font-medium">Nama Anda</label>
              <input
                type="text"
                placeholder="Masukkan nama lengkap"
                name="name"
                value={bookingData.name}
                onChange={handleInputChange}
                required
                className="w-full p-3 border rounded dark:bg-gray-700 dark:border-gray-600 focus:ring-2 focus:ring-indigo-500 outline-none transition"
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium">Nomor Polisi</label>
              <input
                type="text"
                placeholder="Contoh: B 1234 XYZ"
                name="plate"
                value={bookingData.plate}
                onChange={handleInputChange}
                required
                className="w-full p-3 border rounded dark:bg-gray-700 dark:border-gray-600 focus:ring-2 focus:ring-indigo-500 outline-none transition"
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium">Pilih Paket</label>
              <select
                name="service"
                value={bookingData.service}
                onChange={handleInputChange}
                required
                className="w-full p-3 border rounded dark:bg-gray-700 dark:border-gray-600 focus:ring-2 focus:ring-indigo-500 outline-none transition"
              >
                <option value="">Pilih Paket</option>
                <option value="basic">Cuci Basic</option>
                <option value="premium">Cuci Premium</option>
                <option value="detailing">Detailing Mobil</option>
              </select>
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium">Tanggal & Jam</label>
              <input
                type="datetime-local"
                name="datetime"
                value={bookingData.datetime}
                onChange={handleInputChange}
                required
                className="w-full p-3 border rounded dark:bg-gray-700 dark:border-gray-600 focus:ring-2 focus:ring-indigo-500 outline-none transition"
              />
            </div>
            <button
              type="submit"
              className="w-full py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg hover:from-indigo-700 hover:to-purple-700 transition shadow-md hover:shadow-lg transform hover:scale-105 duration-300"
            >
              Kirim Booking
            </button>
          </form>
        </div>
      </section>

      {/* Queue Status */}
      <section id="queue" className={`${activeSection === "antrian" ? "block" : "hidden"} py-16 bg-gray-100 dark:bg-gray-800 transition-opacity duration-500`}>
        <div className="container mx-auto max-w-lg px-6">
          <h2 className="text-3xl font-bold text-center mb-8">Cek Status Antrian</h2>
          <div className="space-y-4">
            <input
              type="text"
              placeholder="Masukkan Nomor Polisi"
              value={queueNumber}
              onChange={(e) => setQueueNumber(e.target.value)}
              className="w-full p-3 border rounded dark:bg-gray-700 dark:border-gray-600"
            />
            <button
              onClick={checkQueueStatus}
              className="w-full py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg transition"
            >
              Cek Status
            </button>
            {queueStatus && (
              <div className="mt-4 p-4 bg-green-100 text-green-800 dark:bg-green-800 dark:text-green-100 rounded">
                <p>Status Antrian: <strong>{queueStatus}</strong></p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimoni" className={`${activeSection === "testimoni" ? "block" : "hidden"} py-16 bg-white dark:bg-gray-900 transition-opacity duration-500`}>
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-10">Testimoni Pelanggan</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow">
                {/* Gambar Profil */}
                <img src={t.image} alt={`${t.name} Profile`} className="w-12 h-12 rounded-full object-cover mb-4" />
                <p className="italic mb-4">{t.text}</p>
                <p className="font-semibold">— {t.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-center py-6 mt-16">
        <p className="text-gray-500">© 2025 WashMyCar - Dibuat untuk memenuhi tugas Ujian Akhir Semester</p>
      </footer>

      {/* Scroll to Top Button */}
      <button
        id="scrollTopBtn"
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 hidden p-3 bg-indigo-600 text-white rounded-full shadow-lg hover:bg-indigo-700 transition transform hover:scale-110"
        style={{ display: "none" }}
      >
        ↑
      </button>
    </div>
  );
}   