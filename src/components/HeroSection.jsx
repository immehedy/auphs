"use client"

import Image from "next/image"

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative bg-cover bg-center bg-no-repeat py-12 md:py-16"
      style={{ backgroundImage: "url('/azimnagar.jpg')" }}
    >
      {/* 🔹 Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      <div className="relative container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-8 text-center md:text-left">
          {/* 🔹 Logo */}
          <div className="flex-shrink-0">
            <div className="w-28 h-28 md:w-32 md:h-32 bg-white rounded-full flex items-center justify-center shadow-lg">
              <Image
                src="/auhs-logo.png"
                alt="আজিমনগর ইউনিয়ন উচ্চ বিদ্যালয় লোগো"
                width={120}
                height={120}
                className="w-20 h-20 md:w-24 md:h-24 object-contain"
                priority
              />
            </div>
          </div>

          {/* 🔹 Text */}
          <div className="flex-1 text-white">
            <h1 className="text-2xl md:text-4xl font-bold mb-3 drop-shadow-lg">
            আজিমনগর ইউনিয়ন উচ্চ বিদ্যালয়
            </h1>
            <p className="text-base md:text-lg mb-2">
              ইউনিয়ন : আজিমনগর থানা : হরিরামপুর জেলা : মানিকগঞ্জ
            </p>
            <p className="text-sm md:text-base">EIIN : 133850</p>
          </div>
        </div>
      </div>
    </section>
  )
}
