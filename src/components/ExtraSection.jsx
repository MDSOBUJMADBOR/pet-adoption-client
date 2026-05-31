const ExtraSections = () => {
  return (
    <div className="space-y-20 py-16 px-4 md:px-10">

      {/* Why Adopt Pets */}
      <section className="text-center max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-4">🐾 Why Adopt Pets</h2>
        <p className="text-gray-600 mb-8">
          Adopting pets saves lives and gives animals a loving home. You gain a loyal companion and make a meaningful difference.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="p-6 shadow-lg rounded-xl">
            <h3 className="font-semibold text-lg">❤️ Save Lives</h3>
            <p className="text-gray-500 text-sm mt-2">
              Give homeless animals a second chance.
            </p>
          </div>
          <div className="p-6 shadow-lg rounded-xl">
            <h3 className="font-semibold text-lg">😊 Companionship</h3>
            <p className="text-gray-500 text-sm mt-2">
              Pets bring joy and reduce loneliness.
            </p>
          </div>
          <div className="p-6 shadow-lg rounded-xl">
            <h3 className="font-semibold text-lg">🏡 Support Shelters</h3>
            <p className="text-gray-500 text-sm mt-2">
              Help reduce overcrowded shelters.
            </p>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="bg-gray-50 py-12 rounded-2xl">
        <h2 className="text-3xl font-bold text-center mb-10">❤️ Success Stories</h2>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto px-4">
          <div className="bg-white p-5 rounded-xl shadow">
            <h3 className="font-semibold">Buddy’s Story</h3>
            <p className="text-gray-500 text-sm mt-2">
              Once abandoned, Buddy now lives happily with his new family.
            </p>
          </div>
          <div className="bg-white p-5 rounded-xl shadow">
            <h3 className="font-semibold">Milo’s Journey</h3>
            <p className="text-gray-500 text-sm mt-2">
              Rescued from the streets, Milo found love and care.
            </p>
          </div>
          <div className="bg-white p-5 rounded-xl shadow">
            <h3 className="font-semibold">Luna’s Home</h3>
            <p className="text-gray-500 text-sm mt-2">
              Luna now enjoys a safe and warm home.
            </p>
          </div>
        </div>
      </section>

      {/* Pet Care Tips */}
      <section className="text-center max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-6">🐶 Pet Care Tips</h2>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="p-5 border rounded-xl">
            <h3 className="font-semibold">🍖 Healthy Food</h3>
            <p className="text-sm text-gray-500 mt-2">
              Always provide balanced and nutritious meals.
            </p>
          </div>
          <div className="p-5 border rounded-xl">
            <h3 className="font-semibold">🧼 Hygiene</h3>
            <p className="text-sm text-gray-500 mt-2">
              Regular grooming keeps pets clean and happy.
            </p>
          </div>
          <div className="p-5 border rounded-xl">
            <h3 className="font-semibold">💉 Vaccination</h3>
            <p className="text-sm text-gray-500 mt-2">
              Keep vaccinations up to date for safety.
            </p>
          </div>
        </div>
      </section>

      {/* Extra Section 1: Our Mission */}
      <section className="bg-indigo-50 py-12 rounded-2xl text-center">
        <h2 className="text-3xl font-bold mb-4">🌟 Our Mission</h2>
        <p className="text-gray-600 max-w-3xl mx-auto">
          Our mission is to connect loving families with pets in need, ensuring every animal gets a safe and caring home.
        </p>
      </section>

      {/* Extra Section 2: Testimonials */}
      <section className="text-center max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-10">💬 Testimonials</h2>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="p-6 shadow rounded-xl">
            <p className="text-gray-600 text-sm">
              “This platform helped me find my best friend. Amazing experience!”
            </p>
            <h4 className="mt-4 font-semibold">– Rahim</h4>
          </div>
          <div className="p-6 shadow rounded-xl">
            <p className="text-gray-600 text-sm">
              “Adopting was so easy and smooth. Highly recommended!”
            </p>
            <h4 className="mt-4 font-semibold">– Ayesha</h4>
          </div>
          <div className="p-6 shadow rounded-xl">
            <p className="text-gray-600 text-sm">
              “Now my home is full of joy thanks to my adopted cat.”
            </p>
            <h4 className="mt-4 font-semibold">– Karim</h4>
          </div>
        </div>
      </section>

    </div>
  );
};

export default ExtraSections;