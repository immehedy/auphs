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

  const handleSearch = () => {
    // You can implement search functionality here
    console.log("Search functionality")
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

        {/* Helpful Links */}
        <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-white/20">
          <h3 className="text-xl font-bold text-gray-800 mb-6">সহায়ক লিংক</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <a 
              href="/"
              className="group flex flex-col items-center p-4 rounded-lg hover:bg-blue-50 transition-colors duration-200"
            >
              <div className="bg-blue-100 p-3 rounded-full mb-3 group-hover:bg-blue-200 transition-colors">
                <Home size={24} className="text-blue-600" />
              </div>
              <span className="text-sm font-medium text-gray-700">হোম</span>
            </a>
            
            <a 
              href="/about"
              className="group flex flex-col items-center p-4 rounded-lg hover:bg-purple-50 transition-colors duration-200"
            >
              <div className="bg-purple-100 p-3 rounded-full mb-3 group-hover:bg-purple-200 transition-colors">
                <BookOpen size={24} className="text-purple-600" />
              </div>
              <span className="text-sm font-medium text-gray-700">আমাদের সম্পর্কে</span>
            </a>
            
            <a 
              href="/contact"
              className="group flex flex-col items-center p-4 rounded-lg hover:bg-green-50 transition-colors duration-200"
            >
              <div className="bg-green-100 p-3 rounded-full mb-3 group-hover:bg-green-200 transition-colors">
                <Search size={24} className="text-green-600" />
              </div>
              <span className="text-sm font-medium text-gray-700">যোগাযোগ</span>
            </a>
            
            <button 
              onClick={handleSearch}
              className="group flex flex-col items-center p-4 rounded-lg hover:bg-yellow-50 transition-colors duration-200"
            >
              <div className="bg-yellow-100 p-3 rounded-full mb-3 group-hover:bg-yellow-200 transition-colors">
                <Compass size={24} className="text-yellow-600" />
              </div>
              <span className="text-sm font-medium text-gray-700">খোঁজ করুন</span>
            </button>
          </div>
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