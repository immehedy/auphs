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
            <div className="flex-shrink-0">
              <div className="w-24 h-24 md:w-28 md:h-28 bg-white rounded-full flex items-center justify-center shadow-lg">
                <div
                  className="w-20 h-20 md:w-24 md:h-24 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: "#188753" }}
                >
                  <span className="text-white font-bold text-lg md:text-xl">
                    আ.ইউ.হা
                  </span>
                </div>
              </div>
            </div>
  
            <div className="flex-1 text-white">
              <h1 className="text-2xl md:text-4xl font-bold mb-3 drop-shadow-lg">
                আজিমনগর ইউনিয়ন হাই স্কুল
              </h1>
              <p className="text-base md:text-lg mb-2">
                ইউনিয়ন : আজিমনগর থানা : হরিরামপুর জেলা : মানিকগঞ্জ
              </p>
              <p className="text-sm md:text-base">EIIN : 110959</p>
            </div>
          </div>
        </div>
      </section>
    )
  }
  