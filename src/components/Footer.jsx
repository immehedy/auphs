import { Mail, Phone, MapPin, Facebook, Twitter, Instagram } from "lucide-react"

export function Footer() {
  return (
    <footer id="contact" className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold text-primary mb-4">আজিমনগর ইউনিয়ন হাই স্কুল</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              মানসম্পন্ন শিক্ষার মাধ্যমে আগামী প্রজন্মের উজ্জ্বল ভবিষ্যৎ গড়তে আমরা প্রতিশ্রুতিবদ্ধ। জ্ঞান, নৈতিকতা ও মানবিক মূল্যবোধের সমন্বয়ে
              গড়ে তুলছি দেশের ভবিষ্যৎ নেতৃত্ব।
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-6 w-6 text-gray-400 hover:text-primary cursor-pointer transition-colors" />
              <Twitter className="h-6 w-6 text-gray-400 hover:text-primary cursor-pointer transition-colors" />
              <Instagram className="h-6 w-6 text-gray-400 hover:text-primary cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">দ্রুত লিংক</h4>
            <ul className="space-y-2">
              {[
                { bengali: "আমাদের সম্পর্কে", english: "About Us" },
                { bengali: "শিক্ষাক্রম", english: "Academics" },
                { bengali: "ভর্তি", english: "Admissions" },
                { bengali: "শিক্ষকমণ্ডলী", english: "Faculty" },
                { bengali: "ফলাফল", english: "Results" },
                { bengali: "গ্যালারি", english: "Gallery" },
              ].map((link) => (
                <li key={link.english}>
                  <a href="#" className="text-gray-300 hover:text-primary transition-colors">
                    {link.bengali}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">যোগাযোগ</h4>
            <div className="space-y-3">
              <div className="flex items-start">
                <MapPin className="h-5 w-5 text-primary mr-3 flex-shrink-0 mt-0.5" />
                <div className="text-gray-300 text-sm">
                  <div>ইউনিয়ন : আজিমনগর</div>
                  <div>থানা : হরিরামপুর</div>
                  <div>জেলা : মানিকগঞ্জ</div>
                </div>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                <span className="text-gray-300 text-sm">+৮৮০-১৭১২-৩৪৫৬৭৮</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                <span className="text-gray-300 text-sm">info@azimnagorunionhs.edu.bd</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 text-center">
          <p className="text-gray-400">© ২০২৫ আজিমনগর ইউনিয়ন হাই স্কুল। সকল অধিকার সংরক্ষিত।</p>
        </div>
      </div>
    </footer>
  )
}
