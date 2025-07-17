// src/components/Home.jsx
const Home = () => {
  return (
    <section className="text-center py-20 px-4">
      <h1 className="text-4xl font-bold mb-4">Selamat Datang di WashMyCar!</h1>
      <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
        Kami memberikan layanan cuci mobil terbaik, cepat, dan ramah lingkungan. Booking sekarang dan nikmati layanan kami!
      </p>
      <div className="mt-8">
        <button className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition duration-300">
          Booking Sekarang
        </button>
      </div>
    </section>
  );
};

export default Home;
