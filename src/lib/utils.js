import { clsx } from "clsx";
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

  // Function to convert English date/numbers to Bengali
  export const convertToBengali = (text) => {
    if (!text) return text;
    
    const englishToBengali = {
      '0': '০', '1': '১', '2': '২', '3': '৩', '4': '৪',
      '5': '৫', '6': '৬', '7': '৭', '8': '৮', '9': '৯',
      'January': 'জানুয়ারি', 'February': 'ফেব্রুয়ারি', 'March': 'মার্চ',
      'April': 'এপ্রিল', 'May': 'মে', 'June': 'জুন',
      'July': 'জুলাই', 'August': 'আগস্ট', 'September': 'সেপ্টেম্বর',
      'October': 'অক্টোবর', 'November': 'নভেম্বর', 'December': 'ডিসেম্বর',
      'Sunday': 'রবিবার', 'Monday': 'সোমবার', 'Tuesday': 'মঙ্গলবার',
      'Wednesday': 'বুধবার', 'Thursday': 'বৃহস্পতিবার', 'Friday': 'শুক্রবার',
      'Saturday': 'শনিবার',
      'AM': 'পূর্বাহ্ন', 'PM': 'অপরাহ্ন', 'am': 'পূর্বাহ্ন', 'pm': 'অপরাহ্ন'
    };

    let bengaliText = text.toString();
    
    // Replace each English character/word with Bengali equivalent
    Object.keys(englishToBengali).forEach(english => {
      const bengali = englishToBengali[english];
      bengaliText = bengaliText.replace(new RegExp(english, 'g'), bengali);
    });
    
    return bengaliText;
  };

  // Function to format date in Bengali
  export const formatBengaliDate = (dateString) => {
    if (!dateString) return 'তারিখ নেই';
    
    try {
      // If it's already in Bengali format, return as is
      if (/[০-৯]/.test(dateString) || /জানুয়ারি|ফেব্রুয়ারি|মার্চ|এপ্রিল|মে|জুন|জুলাই|আগস্ট|সেপ্টেম্বর|অক্টোবর|নভেম্বর|ডিসেম্বর/.test(dateString)) {
        return dateString;
      }
      
      // Try to parse as Date if it's in English format
      const date = new Date(dateString);
      if (!isNaN(date.getTime())) {
        const options = { 
          year: 'numeric', 
          month: 'long', 
          day: 'numeric' 
        };
        const englishDate = date.toLocaleDateString('en-US', options);
        return convertToBengali(englishDate);
      }
      
      // If not a valid date, just convert numbers to Bengali
      return convertToBengali(dateString);
    } catch {
      return convertToBengali(dateString);
    }
  };
