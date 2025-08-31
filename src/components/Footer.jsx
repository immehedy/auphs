import { Mail, Phone, MapPin, Facebook, Twitter, Instagram } from "lucide-react"
import Link from "next/link"

export function Footer() {
  return (
    <footer id="contact" className="bg-gray-900 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        {/* Top grid */}
        <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-4">
          {/* Brand + socials */}
          <div className="md:col-span-2 text-center md:text-left">
            <h3 className="text-2xl sm:text-3xl font-bold text-primary mb-4">
            আজিমনগর ইউনিয়ন উচ্চ বিদ্যালয়
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              মানসম্পন্ন শিক্ষার মাধ্যমে আগামী প্রজন্মের উজ্জ্বল ভবিষ্যৎ গড়তে আমরা প্রতিশ্রুতিবদ্ধ।
              জ্ঞান, নৈতিকতা ও মানবিক মূল্যবোধের সমন্বয়ে গড়ে তুলছি দেশের ভবিষ্যৎ নেতৃত্ব।
            </p>

            <div className="flex items-center justify-center md:justify-start gap-5 flex-wrap">
              <a aria-label="Facebook" href="#" className="text-gray-400 hover:text-primary transition-colors">
                <Facebook className="h-6 w-6 flex-shrink-0" />
              </a>
              <a aria-label="Twitter" href="#" className="text-gray-400 hover:text-primary transition-colors">
                <Twitter className="h-6 w-6 flex-shrink-0" />
              </a>
              <a aria-label="Instagram" href="#" className="text-gray-400 hover:text-primary transition-colors">
                <Instagram className="h-6 w-6 flex-shrink-0" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="text-center sm:text-left">
            <h4 className="text-lg font-semibold text-white mb-4">দ্রুত লিংক</h4>
            <ul className="grid grid-cols-2 sm:grid-cols-1 gap-2">
              {[
                { bengali: "আমাদের সম্পর্কে", href: "#" },
                { bengali: "শিক্ষাক্রম", href: "#" },
                { bengali: "ভর্তি", href: "#" },
                { bengali: "শিক্ষকমণ্ডলী", href: "#" },
                { bengali: "ফলাফল", href: "#" },
                { bengali: "গ্যালারি", href: "#" },
              ].map((link) => (
                <li key={link.bengali}>
                  <a href={link.href} className="text-gray-300 hover:text-primary transition-colors">
                    {link.bengali}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="text-center sm:text-left">
            <h4 className="text-lg font-semibold text-white mb-4">যোগাযোগ</h4>
            <div className="space-y-3">
              <div className="flex items-start justify-center sm:justify-start">
                <MapPin className="h-5 w-5 text-primary mr-3 flex-shrink-0 mt-0.5" />
                <div className="text-gray-300 text-sm">
                  <div>ইউনিয়ন : আজিমনগর</div>
                  <div>থানা : হরিরামপুর</div>
                  <div>জেলা : মানিকগঞ্জ</div>
                </div>
              </div>
              <div className="flex items-center justify-center sm:justify-start">
                <Phone className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                <span className="text-gray-300 text-sm">+880 1710-125514</span>
              </div>
              <div className="flex items-center justify-center sm:justify-start">
                <Mail className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                <span className="text-gray-300 text-sm break-words">
                  info@azimnagorunionhs.edu.bd
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
            <p className="text-gray-400">
              © ২০২৫ আজিমনগর ইউনিয়ন উচ্চ বিদ্যালয়। সকল অধিকার সংরক্ষিত।
            </p>
            <p className="text-gray-500 text-sm">
              তৈরি করেছেন <span className="text-primary font-medium"><Link href="https://fourbit.io">fourbit.io</Link></span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
