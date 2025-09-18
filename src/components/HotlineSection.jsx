"use client"

import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Phone } from "lucide-react"

export function HotlineSection() {
  return (
    <div className="space-y-6">
      <Card className="shadow-xl border-0 overflow-hidden">
        <CardHeader className="bg-gradient-to-r from-red-500 to-red-600 text-white relative">
          <div className="absolute inset-0 bg-black/10" />
          <CardTitle className="text-xl font-bold flex items-center space-x-3 relative z-10">
            <div className="p-2">
              <Phone className="h-6 w-6" />
            </div>
            <span>জরুরি হটলাইন</span>
          </CardTitle>
        </CardHeader>

        {/* Image only (responsive) */}
        <CardContent className="px-4 md:px-6">
          {/* 
            Put the image file at: /public/hotline.jpg 
            (dimensions in the example were tall portrait ~1206x377)
          */}
          <Image
            src="/hotline.png"
            alt="বাংলাদেশের গুরুত্বপূর্ণ জরুরি হটলাইন নম্বরসমূহ"
            width={277}
            height={500}
            // Make it fluid and keep the original aspect ratio
            style={{ width: "100%", height: 500 }}
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 70vw, 600px"
            priority
          />
        </CardContent>
      </Card>
    </div>
  )
}
