"use client";
import React from "react";
import Image from "next/image";
// import HeaderSect from "@/../public/images/headersection.png";
import { H1, Large_Text } from "../components/general/Text";
import SectionsGap from "../components/general/SectionsGap";
import { FormButton } from "../components/general/button";

export default function Header() {
  return (
    <>
      <main className="bg-[#FEF3F3] w-full h-screen flex items-center justify-center">
        <SectionsGap>
          <div className="flex flex-col items-center gap-[28px] text-center">
            <H1 className="text-black">Yuk Gunakan Hak Suara Kalian Untuk Pemilihan Ketua Sub-Organisasi</H1>
            <Large_Text variant="REGULAR" className="text-black">
              Pemilihan ini sangat berdampak besar untuk masa depan SMK Telkom
              Malang. Ayo gunakan hak suara kalian!
            </Large_Text>
            <FormButton
              onClick={() => console.log("Vote")}
              variant="PRIMARY"
              className="max-w-[210px]"
            >
              Yuk Vote Sekarang!
            </FormButton>
          </div>
        </SectionsGap>
      </main>
    </>
  );
}
