"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, Calendar, ArrowRight, Bell } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export function NoticeSection() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    {
      image: "/azimnagar.jpg",
      title: "বিদ্যালয়ের প্রবেশদ্বার",
    },
    {
      image: "/classroom.jpg",
      title: "সকালের সমাবেশ",
    },
    {
      image: "/outdoor-class.jpg",
      title: "শ্রেণিকক্ষে পাঠদান",
    },
  ]

  const notices = [
    {
      date: "৭ নভেম্বর, ২০২৪",
      title: "নতুন ওয়েবসাইট প্রকাশ",
      description: "আমাদের বিদ্যালয়ের নতুন ওয়েবসাইট চালু হয়েছে। সকল তথ্য এখানে পাবেন।",
      isNew: true,
    },
    {
      date: "৫ নভেম্বর, ২০২৪",
      title: "বার্ষিক ক্রীড়া প্রতিযোগিতা",
      description: "আগামী ১৫ নভেম্বর বার্ষিক ক্রীড়া প্রতিযোগিতা অনুষ্ঠিত হবে।",
      isNew: false,
    },
    {
      date: "৩ নভেম্বর, ২০২৪",
      title: "অভিভাবক সভা",
      description: "আগামী ১০ নভেম্বর সকাল ১০টায় অভিভাবক সভা অনুষ্ঠিত হবে।",
      isNew: false,
    },
  ]

  const scrollingNotice =
    "আগামী ১৫ নভেম্বর বার্ষিক ক্রীড়া প্রতিযোগিতা অনুষ্ঠিত হবে • অভিভাবক সভা ১০ নভেম্বর সকাল ১০টায় • নতুন ভর্তির আবেদন শুরু হয়েছে • পরীক্ষার ফলাফল প্রকাশিত হয়েছে"

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  // 🔹 Auto-slide effect
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide()
    }, 5000) // change slide every 5s
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="bg-gradient-to-r from-primary to-primary/80 text-white px-2 md:px-6 py-2 mb-8 rounded-t-lg shadow-lg">
          <div className="flex items-center space-x-3">
            <div className="flex items-center gap-2 flex-shrink-0">
            <Bell className="h-6 w-6" />
            <h2 className="text-base md:text-xl font-bold">সর্বশেষ নোটিশ</h2>
            </div>
            <div className="overflow-hidden px-4 py-2">
              <div className="animate-marquee whitespace-nowrap text-sm font-medium">{scrollingNotice}</div>
            </div>
          </div>
        </div>

        <div className="relative mb-12">
          <div className="overflow-hidden rounded-xl shadow-2xl">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {slides.map((slide, index) => (
                <div key={index} className="w-full flex-shrink-0 relative">
                  <img
                    src={slide.image || "/placeholder.svg"}
                    alt={slide.title}
                    className="w-full h-72 md:h-96 object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                    <h3 className="text-white text-xl font-semibold">{slide.title}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Controls */}
          <Button
            variant="outline"
            size="icon"
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white border-0 shadow-lg hover:scale-110 transition-all duration-200"
            onClick={prevSlide}
          >
            <ChevronLeft className="h-5 w-5 text-gray-700" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white border-0 shadow-lg hover:scale-110 transition-all duration-200"
            onClick={nextSlide}
          >
            <ChevronRight className="h-5 w-5 text-gray-700" />
          </Button>

          {/* Indicators */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {slides.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  index === currentSlide ? "bg-white shadow-lg" : "bg-white/50"
                }`}
                onClick={() => setCurrentSlide(index)}
              />
            ))}
          </div>
        </div>

        {/* Notice Board */}
        <Card className="shadow-xl border-0 bg-white">
          <CardContent className="p-8">
            <div className="flex items-center space-x-3 mb-6">
              <Calendar className="h-6 w-6 text-primary" />
              <h3 className="text-2xl font-bold text-gray-900">নোটিশ বোর্ড</h3>
            </div>

            <div className="space-y-4">
              {notices.map((notice, index) => (
                <div
                  key={index}
                  className="group p-4 rounded-lg border border-gray-100 hover:border-primary/20 hover:shadow-md transition-all duration-200"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <span className="text-sm bg-primary/10 text-primary px-3 py-1 rounded-full font-medium">
                          {notice.date}
                        </span>
                        {notice.isNew && (
                          <span className="text-xs bg-red-100 text-red-600 px-2 py-1 rounded-full font-semibold animate-pulse">
                            নতুন
                          </span>
                        )}
                      </div>
                      <h4 className="font-semibold text-gray-900 mb-1 group-hover:text-primary transition-colors duration-200">
                        {notice.title}
                      </h4>
                      <p className="text-gray-600 text-sm leading-relaxed">{notice.description}</p>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                    >
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 text-center">
              <Button className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200">
                সকল নোটিশ দেখুন
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* marquee keyframes */}
      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(-100%);
          }
        }
        .animate-marquee {
          animation: marquee 20s linear infinite;
        }
      `}</style>
    </section>
  )
}
