"use client";

import React, { useEffect } from 'react';
import { H1, Medium_Text } from "@/app/components/general/Text";

export default function ThankYouPage() {
  useEffect(() => {
    const timer = setTimeout(() => {
      console.log("Auto log out dilakukan");
      // Implementasi log out di sini
      // window.location.href = "/login";
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#FDF7F7] px-4 py-8">
      <div className="bg-white rounded-lg shadow-lg p-6 sm:p-8 max-w-sm sm:max-w-md w-full text-center">
        <H1 className="text-[#C1121F] text-2xl sm:text-3xl md:text-4xl mb-2">
          Terima Kasih
        </H1>
        <H1 className="text-[#C1121F] text-xl sm:text-2xl md:text-3xl mb-4 sm:mb-6">
          Telah Melakukan Voting
        </H1>
        <Medium_Text variant="REGULAR" className="text-gray-600 text-sm sm:text-base">
          Setelah selesai melakukan voting, akan dilakukan auto log out
        </Medium_Text>
      </div>
    </div>
  );
}