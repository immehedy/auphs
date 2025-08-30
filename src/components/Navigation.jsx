"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Home, Info, BookOpen, UserPlus, Phone } from "lucide-react"

export function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const navItems = [
    { name: "প্রধান", href: "#home", icon: Home },
    { name: "পরিচিতি", href: "#about", icon: Info },
    { name: "শিক্ষাক্রম", href: "#academics", icon: BookOpen },
    { name: "ভর্তি", href: "#admissions", icon: UserPlus },
    { name: "যোগাযোগ", href: "#contact", icon: Phone },
  ]

  return (
    <nav className="bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0 flex items-center space-x-3">
            <div className="w-14 h-14 bg-primary rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-xs">আ.ইউ.হা</span>
            </div>
            <div className="hidden sm:block">
              <h1 className="text-base font-bold text-gray-900">আজিমনগর ইউনিয়ন হাই স্কুল</h1>
            </div>
          </div>

          <div className="hidden md:block">
            <div className="flex items-center space-x-1">
              {navItems.map((item) => {
                const IconComponent = item.icon
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    className="flex items-center space-x-2 px-3 py-2 rounded-md text-gray-700 hover:text-primary hover:bg-gray-50 transition-colors duration-200"
                  >
                    <IconComponent className="h-4 w-4" />
                    <span className="text-sm">{item.name}</span>
                  </a>
                )
              })}
            </div>
          </div>

          <div className="md:hidden">
            <Button variant="ghost" size="sm" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              {isMobileMenuOpen ? <X className="h-5 w-5 text-primary" /> : <Menu className="h-5 w-5 text-primary" />}
            </Button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-gray-50 rounded-lg mt-2">
              {navItems.map((item) => {
                const IconComponent = item.icon
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    className="flex items-center space-x-3 px-3 py-2 text-gray-700 hover:text-primary hover:bg-white transition-colors duration-200 rounded-md"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <IconComponent className="h-4 w-4" />
                    <span className="text-sm">{item.name}</span>
                  </a>
                )
              })}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
