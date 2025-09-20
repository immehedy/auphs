"use client"

import React from "react"
import { 
  Home, 
  ArrowLeft, 
  Search, 
  BookOpen,
  AlertTriangle,
  Compass
} from "lucide-react"

export default function NotFound() {
  const handleGoHome = () => {
    window.location.href = "/"
  }

  const handleGoBack = () => {
    window.history.back()
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex items-center justify-center px-4">
      <div className="max-w-4xl mx-auto text-center">
        {/* Animated 404 */}
        <div className="relative mb-8">
          <div className="text-8xl md:text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 animate-pulse">
            ৪০৪
          </div>
          <div className="absolute -top-4 -right-4 text-yellow-400 animate-bounce">
            <AlertTriangle size={48} />
          </div>
        </div>

        {/* Main Message */}
        <div className="mb-12 space-y-4">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            দুঃখিত! পৃষ্ঠাটি খুঁজে পাওয়া যায়নি
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            আপনি যে পৃষ্ঠাটি খোঁজ করছেন সেটি সরানো হয়েছে, মুছে ফেলা হয়েছে বা হয়তো কখনো ছিলই না। 
            চিন্তা করবেন না, আমরা আপনাকে সঠিক পথে নিয়ে যাব!
          </p>
        </div>

        {/* Illustration */}
        <div className="mb-12 flex justify-center">
          <div className="relative">
            <div className="w-64 h-64 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full flex items-center justify-center shadow-lg">
              <Compass size={120} className="text-blue-500 animate-spin" style={{ animationDuration: '8s' }} />
            </div>
            <div className="absolute -bottom-4 -right-4 bg-white rounded-full p-3 shadow-lg animate-bounce">
              <Search size={24} className="text-purple-500" />
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="space-y-4 md:space-y-0 md:space-x-4 md:flex md:justify-center mb-12">
          <button
            onClick={handleGoHome}
            className="group bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 flex items-center gap-3 justify-center w-full md:w-auto"
          >
            <Home size={24} className="group-hover:scale-110 transition-transform" />
            হোম পেজে যান
          </button>
          
          <button
            onClick={handleGoBack}
            className="group bg-gradient-to-r from-gray-600 to-gray-700 text-white px-8 py-4 rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 flex items-center gap-3 justify-center w-full md:w-auto"
          >
            <ArrowLeft size={24} className="group-hover:scale-110 transition-transform" />
            পূর্ববর্তী পৃষ্ঠা
          </button>
        </div>

        {/* Footer Message */}
        <div className="mt-8 text-gray-500 text-sm">
          <p>যদি সমস্যা অব্যাহত থাকে, তাহলে আমাদের সাথে যোগাযোগ করুন।</p>
        </div>

        {/* Floating Elements */}
        <div className="fixed top-20 left-10 text-blue-200 animate-pulse">
          <BookOpen size={32} />
        </div>
        <div className="fixed bottom-20 right-10 text-purple-200 animate-pulse">
          <Search size={28} />
        </div>
        <div className="fixed top-1/3 right-20 text-yellow-200 animate-bounce">
          <Compass size={24} />
        </div>
      </div>
    </div>
  )
}