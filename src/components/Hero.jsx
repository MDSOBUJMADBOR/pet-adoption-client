"use client";

import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="bg-gradient-to-r from-gray-100 to-white py-16 px-6 md:px-12 lg:px-20 overflow-hidden">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 items-center gap-10">

        {/* LEFT CONTENT */}
        <div>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            A New Home <br />
            A New{" "}
            <span className="bg-gradient-to-r from-green-600 to-red-400 bg-clip-text text-transparent">
              Life
            </span>
          </h1>

          <p className="mt-4 text-gray-600 max-w-md">
            Adopt a pet and give them the love they deserve. Find your new best friend today!
          </p>

          <div className="mt-6 flex gap-4">
            <Link href="/pets">
              <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg shadow transition duration-300">
                Adopt Now
              </button>
            </Link>

            <Link href="/all-pets">
              <button className="border border-gray-300 px-6 py-2 rounded-lg hover:bg-gray-100 transition duration-300">
                View All Pets
              </button>
            </Link>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative flex justify-center">

          <Image
            src="/cat-dogs.png"
            alt="Pets"
            width={500}
            height={500}
            className="object-contain rounded-lg animate-float hover:scale-105 transition duration-400 "
          />

          {/* Decorative Paw */}
          <span className="absolute top-10 right-10 text-3xl animate-bounce">
            🐾
          </span>

          {/* Decorative Heart */}
          <span className="absolute bottom-10 left-10 text-2xl animate-bounce">
            💚
          </span>
          

        </div>

      </div>
    </section>
  );
};

export default Hero;