"use client"

import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { GraduationCap } from "lucide-react"

export default function PrincipalSection() {
  // You can later fetch these from CMS
  const principal = {
    name: "প্রধান শিক্ষক",
    photo: "/principal.png",
    message:
      "শিক্ষার্থীদের নৈতিক, সামাজিক ও একাডেমিক উৎকর্ষতা অর্জনে আমাদের অঙ্গীকার অটুট। শিক্ষা শুধু তথ্য নয়—চরিত্র গঠনের মাধ্যম।",
  }

  return (
    <div className="space-y-6 border">
      <Card className="shadow-xl border overflow-hidden max-w-md mx-auto">
        {/* Header (same structure & feel as ImportantLinks) */}
        <CardHeader className="bg-gradient-to-r from-primary to-primary/80 text-white relative">
          <div className="absolute inset-0 bg-black/10" />
          <CardTitle className="text-xl font-bold flex items-center space-x-3 relative z-10 py-2">
            <GraduationCap className="h-6 w-6" />
            <span>প্রধান শিক্ষকের বাণী</span>
          </CardTitle>
        </CardHeader>

        {/* Content */}
        <CardContent className="p-6">
          <div className="text-center">
            <div className="relative w-40 h-52 md:w-48 md:h-64 mx-auto mb-5 rounded-lg overflow-hidden shadow-md">
              <Image
                src={principal.photo || "/placeholder.svg"}
                alt="প্রধান শিক্ষক"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 200px, 240px"
                priority
              />
            </div>

            <h3 className="text-lg font-semibold text-gray-900">{principal.name}</h3>

            {/* small divider for elegance */}
            <div className="mx-auto my-3 h-[2px] w-12 bg-primary/30 rounded-full" />

            <p className="text-sm text-gray-600 leading-relaxed">
              {principal.message}
            </p>

            <div className="mt-4">
              <Button variant="link" className="text-primary p-0 h-auto font-medium">
                আরও দেখুন
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
