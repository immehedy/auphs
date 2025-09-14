"use client"

import React from "react"
import {
  Users,
  GraduationCap,
  BookOpen,
  UserCheck,
  Building,
  ClipboardList,
  Camera,
  Trophy,
  ArrowRight,
  ChevronRight,
} from "lucide-react"

export function ContentGrid({ items }) {

  console.log("items", items[0]?.fields?.title);
  console.log("items", items[0]?.fields?.sectionTitle?.fields?.title);

  // Static sections configuration - now without hardcoded items
  const sections = [
    {
      title: "আমাদের সম্পর্কে",
      icon: Users,
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50",
      textColor: "text-blue-700",
    },
    {
      title: "একাডেমিক তথ্য",
      icon: GraduationCap,
      color: "from-green-500 to-green-600",
      bgColor: "bg-green-50",
      textColor: "text-green-700",
    },
    {
      title: "শিক্ষার্থী কর্নার",
      icon: UserCheck,
      color: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-50",
      textColor: "text-purple-700",
    },
    {
      title: "সুবিধাসমূহ",
      icon: Building,
      color: "from-orange-500 to-orange-600",
      bgColor: "bg-orange-50",
      textColor: "text-orange-700",
    },
    {
      title: "ফলাফল",
      icon: ClipboardList,
      color: "from-red-500 to-red-600",
      bgColor: "bg-red-50",
      textColor: "text-red-700",
    },
    {
      title: "ভর্তি",
      icon: BookOpen,
      color: "from-teal-500 to-teal-600",
      bgColor: "bg-teal-50",
      textColor: "text-teal-700",
    },
    {
      title: "গ্যালারি",
      icon: Camera,
      color: "from-pink-500 to-pink-600",
      bgColor: "bg-pink-50",
      textColor: "text-pink-700",
    },
    {
      title: "সহ-পাঠক্রম",
      icon: Trophy,
      color: "from-yellow-500 to-yellow-600",
      bgColor: "bg-yellow-50",
      textColor: "text-yellow-700",
    },
  ]

  // Function to handle item click
  const handleItemClick = (contentfulData) => {
    console.log("Clicked item:", contentfulData.fields?.title)
    console.log("Contentful data:", contentfulData)
    
    // Navigate to the slug if it exists
    if (contentfulData?.fields?.slug) {
      // Using window.location for navigation (works in all environments)
      window.location.href = `/${contentfulData.fields.slug}`
      
      // Alternative: If you're using Next.js router, uncomment below and import useRouter
      // import { useRouter } from 'next/navigation'
      // const router = useRouter()
      // router.push(`/${contentfulData.fields.slug}`)
    } else {
      console.warn("No slug found for item:", contentfulData.fields?.title)
    }
  }

  // Create sections with their matching contentful items
  const sectionsWithData = sections.map(section => {
    // Find all contentful items that belong to this section
    const matchingItems = items?.filter(item => {
      const itemSectionTitle = item.fields?.sectionTitle?.fields?.title
      return itemSectionTitle === section.title
    }) || []
    
    return {
      ...section,
      matchingItems
    }
  }).filter(section => section.matchingItems.length > 0) // Only show sections that have data

  // Handle unmatched contentful items (items that don't belong to any predefined section)
  const unmatchedItems = items?.filter(contentfulItem => {
    const itemSectionTitle = contentfulItem.fields?.sectionTitle?.fields?.title
    return itemSectionTitle && !sections.some(section => 
      section.title === itemSectionTitle
    )
  }) || []

  console.log("Sections with data:", sectionsWithData)
  console.log("Unmatched items:", unmatchedItems)

  if (sectionsWithData.length === 0 && unmatchedItems.length === 0) {
    return (
      <div className="py-16 bg-gradient-to-b from-white to-gray-50 mt-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-600">কোনো তথ্য পাওয়া যায়নি।</p>
        </div>
      </div>
    )
  }

  return (
    <div className="py-16 bg-gradient-to-b from-white to-gray-50 mt-8">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">বিভাগসমূহ</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            আমাদের বিদ্যালয়ের সকল বিভাগ ও সেবা সম্পর্কে জানুন। প্রতিটি বিভাগে ক্লিক করে বিস্তারিত তথ্য দেখুন।
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {sectionsWithData.map((section, index) => {
            const IconComponent = section.icon

            return (
              <div
                key={index}
                className="group hover:shadow-2xl transition-all duration-300 border-0 shadow-lg hover:-translate-y-2 bg-white overflow-hidden rounded-lg"
              >
                <div className={`${section.bgColor} border-b-0 relative overflow-hidden py-2 px-6`}>
                  <div
                    className={`absolute inset-0 bg-gradient-to-r ${section.color} opacity-10 group-hover:opacity-20 transition-opacity duration-300`}
                  ></div>
                  <div className={`flex items-center justify-between ${section.textColor} relative z-10`}>
                    <div className="flex items-center gap-3">
                      <div
                        className={`p-2 rounded-lg bg-gradient-to-r ${section.color} text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}
                      >
                        <IconComponent className="h-6 w-6" />
                      </div>
                      <span className="font-bold text-lg">{section.title}</span>
                    </div>
                    <ChevronRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </div>
                <div className="px-6 py-2">
                  <ul className="space-y-1">
                    {section.matchingItems.map((item, itemIndex) => (
                      <li
                        key={itemIndex}
                        className="group/item flex items-center gap-3 text-gray-700 hover:text-blue-600 cursor-pointer transition-all duration-200 p-2 rounded-lg hover:bg-gray-50"
                        onClick={() => handleItemClick(item)}
                      >
                        <div
                          className={`w-2 h-2 bg-gradient-to-r ${section.color} rounded-full flex-shrink-0 group-hover/item:scale-125 transition-transform duration-200`}
                        ></div>
                        <span className="text-sm font-medium flex-1">{item.fields?.title}</span>
                        <ArrowRight className="h-3 w-3 opacity-0 group-hover/item:opacity-100 group-hover/item:translate-x-1 transition-all duration-200" />
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )
          })}

          {/* Show unmatched items as separate cards */}
          {unmatchedItems.length > 0 && (
            <div className="group hover:shadow-2xl transition-all duration-300 border-0 shadow-lg hover:-translate-y-2 bg-white overflow-hidden rounded-lg">
              <div className="bg-gray-50 border-b-0 relative overflow-hidden py-2 px-6">
                <div className="absolute inset-0 bg-gradient-to-r from-gray-500 to-gray-600 opacity-10 group-hover:opacity-20 transition-opacity duration-300"></div>
                <div className="flex items-center justify-between text-gray-700 relative z-10">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-gradient-to-r from-gray-500 to-gray-600 text-white shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <BookOpen className="h-6 w-6" />
                    </div>
                    <span className="font-bold text-lg">অন্যান্য</span>
                  </div>
                  <ChevronRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </div>
              <div className="px-6 py-2">
                <ul className="space-y-3">
                  {unmatchedItems.map((contentfulItem, itemIndex) => (
                    <li
                      key={itemIndex}
                      className="group/item flex items-center gap-3 text-gray-700 hover:text-blue-600 cursor-pointer transition-all duration-200 p-2 rounded-lg hover:bg-gray-50"
                      onClick={() => handleItemClick(contentfulItem)}
                    >
                      <div className="w-2 h-2 bg-gradient-to-r from-gray-500 to-gray-600 rounded-full flex-shrink-0 group-hover/item:scale-125 transition-transform duration-200"></div>
                      <span className="text-sm font-medium flex-1">{contentfulItem.fields?.title}</span>
                      <ArrowRight className="h-3 w-3 opacity-0 group-hover/item:opacity-100 group-hover/item:translate-x-1 transition-all duration-200" />
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}