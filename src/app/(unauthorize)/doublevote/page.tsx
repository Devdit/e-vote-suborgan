import React from "react";
import Image from "next/image";
import DoubleVote from "@/../public/images/DoubleVoteIcon.png";
import { H1, Large_Text } from "@/app/components/general/Text";

export default function RejectedDoubleVote() {
  return (
    <div className="bg-red-light-6 w-full h-screen flex items-center justify-center py-10">
      <div className="bg-white w-full max-w-[1050px] mx-4 h-auto rounded-[15px] flex flex-col items-center text-center shadow-md p-4">
        <div className="w-full flex justify-center -mt-16 md:-mt-0">
          <Image
            src={DoubleVote}
            alt="gambar not found"
            className="w-[150px] h-[150px] md:w-[328px] md:h-[314px]"
          />
        </div>
        <div className="w-full mt-10 md:mx-[85px]">
          <H1>Waduh.. Kamu Sudah Melakukan Vote</H1>
          <Large_Text
            variant="REGULAR"
            className="text-secondary-text-color mt-[18px]"
          >
            User tidak boleh melakukan vote lebih dari satu kali
          </Large_Text>
        </div>
      </div>
    </div>
  );
}
