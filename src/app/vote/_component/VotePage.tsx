"use client";

import React, { useState } from "react";
import Image from "next/image";
import { H1, H5, Large_Text, Medium_Text } from "@/app/components/general/Text";
import { FormButton } from "@/app/components/general/button";
import { ModalDialog, VoteModal } from "@/app/components/general/Modal";

const candidates = [
  {
    id: "1",
    candidate: {
      id: "1",
      name: "Haza Nasrullah",
      kandidat_kelas: "XI RPL 4",
      img: "/images/contoh_kandidat.jpg",
      visi: "memajukan sekolah",
      misi: "makan siang gratis, bangun IKN",
      motto: "yg penting hidup",
      pengalaman: [
        { desc: "hidup" },
        { desc: "belum mati" }
      ],
      progja: "makan siang gratis",
      video_profile: "https://www.youtube.com/embed/dQw4w9WgXcQ"
    },
    candidates_number: "01"
  },
  {
    id: "2",
    candidate: {
      id: "2",
      name: "Santoso",
      kandidat_kelas: "XI PG 2",
      img: "/images/contoh_kandidat.jpg",
      visi: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      misi: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      motto: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      pengalaman: [
        { desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
        { desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." }
      ],
      progja: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      video_profile: "https://www.youtube.com/embed/dQw4w9WgXcQ"
    },
    candidates_number: "02"
  }
];

export default function VotePage() {
  const [modal, setModal] = useState(null);
  const [selected, setIsSelected] = useState<string[]>([]);
  const [dialouge, setDialouge] = useState(false);
  const maxVote = 2;

  const selectedCandidates = (candidateId: string) => {
    if (selected.length >= maxVote && !selected.includes(candidateId))
      return alert("Batas memilih adalah " + maxVote + " kandidat");

    setIsSelected((prev) =>
      prev.includes(candidateId)
        ? prev.filter((candidate) => candidate !== candidateId)
        : [...prev, candidateId],
    );
  };

  const openDetailModal = (candidates: any) => {
    setModal((prev) => (prev === candidates ? null : candidates));
  };

  const handleDialouge = () => {
    if (selected.length < maxVote)
      return alert("Anda harus memilih " + maxVote + " kandidat");

    setDialouge(!dialouge);
  };

  const handleSubmit = () => {
    alert("Voting submitted!");
    setDialouge(false);
  };

  return (
    <div className="max-w-full w-full mx-auto grid grid-cols-1 xl:grid-cols-2 gap-6 mt-20 mb-20 px-8 min-h-[60vh]">
      {candidates.map((candidate) => (
        <div key={candidate.id} className={`relative mx-5 lg:mx-0 `}>
          <div className="max-w-full bg-white rounded-2xl z-20 mx-auto transition-all">
            {selected.includes(candidate.candidate.id) && (
              <div className="px-8 pt-8 w-full mx-auto">
                <div className="bg-primary-color flex justify-center gap-x-3 rounded-lg py-3">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12ZM12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4Z" fill="white"/>
                    <path fillRule="evenodd" clipRule="evenodd" d="M16.6402 8.2318C17.0645 8.58537 17.1218 9.21593 16.7682 9.64021L11.7682 15.6402C11.5937 15.8497 11.3411 15.9788 11.0691 15.9976C10.797 16.0165 10.5291 15.9234 10.3273 15.74L7.32733 13.0127C6.91868 12.6412 6.88856 12.0087 7.26007 11.6001C7.63157 11.1914 8.26402 11.1613 8.67268 11.5328L10.9002 13.5578L15.2318 8.35984C15.5854 7.93556 16.2159 7.87824 16.6402 8.2318Z" fill="white"/>
                  </svg>
                  <Medium_Text variant="MEDIUM" className="text-white">
                    Kandidat Dipilih
                  </Medium_Text>
                </div>
              </div>
            )}
            <div className="p-8 lg:flex gap-x-[28px] w-fit h-auto mx-auto">
              <div>
                <Image
                  src={candidate.candidate.img}
                  alt="Foto Kandidat"
                  className="mx-auto mb-4 lg:mb-0 h-auto"
                  width={200}
                  height={300}
                />
              </div>
              <div className="">
                <div className="flex gap-x-3 mb-4 w-full justify-between">
                  <H1 className="text-primary-color">
                    {candidate.candidates_number}
                  </H1>
                  <div>
                    <H5 className="">{candidate.candidate.name}</H5>
                    <Large_Text variant="SEMIBOLD">
                      {candidate.candidate.kandidat_kelas}
                    </Large_Text>
                  </div>
                </div>
                <div className="flex flex-col gap-y-4">
                  {selected.includes(candidate.candidate.id) ? (
                    <FormButton
                      onClick={() => selectedCandidates(candidate.candidate.id)}
                      variant="SECONDARY"
                      className="w-full"
                    >
                      <Large_Text variant="BOLD">Batalkan Pilihan</Large_Text>
                    </FormButton>
                  ) : (
                    <FormButton
                      onClick={() => selectedCandidates(candidate.candidate.id)}
                      variant="PRIMARY"
                      className="w-full"
                    >
                      <Large_Text variant="BOLD">Pilih Kandidat</Large_Text>
                    </FormButton>
                  )}
                  <FormButton
                    onClick={() => openDetailModal(candidate.id)}
                    variant="BLACK"
                    className="w-full"
                  >
                    <Large_Text variant="BOLD">Lihat Detail</Large_Text>
                  </FormButton>
                </div>
              </div>
            </div>
            <div className="z-40">
              {modal === candidate.id && (
                <VoteModal onClose={() => setModal(null)}>
                  <div className="my-3">
                    <Large_Text variant="BOLD" className="mb-2 text-center">
                      Visi
                    </Large_Text>
                    <Medium_Text
                      variant="REGULAR"
                      className="text-center my-3 bg-dark-8 py-2 rounded-md"
                    >
                      {candidate.candidate.visi}
                    </Medium_Text>
                  </div>
                  <div className="my-3">
                    <Large_Text variant="BOLD" className="mb-2 text-center">
                      Misi
                    </Large_Text>
                    <Medium_Text
                      variant="REGULAR"
                      className="text-center my-3 bg-dark-8 py-2 rounded-md"
                    >
                      {candidate.candidate.misi}
                    </Medium_Text>
                  </div>
                  <div className="my-3">
                    <Large_Text variant="BOLD" className="mb-2 text-center">
                      Motto
                    </Large_Text>
                    <Medium_Text
                      variant="REGULAR"
                      className="text-center my-3 bg-dark-8 py-2 rounded-md"
                    >
                      {candidate.candidate.motto}
                    </Medium_Text>
                  </div>
                  <Large_Text variant="BOLD" className="mb-2 text-center">
                    Pengalaman
                  </Large_Text>
                  {candidate.candidate.pengalaman.map((pengalaman, index) => (
                    <div
                      key={index}
                      className="my-3 bg-dark-8 py-2 rounded-md"
                    >
                      <Medium_Text
                        variant="REGULAR"
                        className="text-center"
                      >
                        {pengalaman.desc}
                      </Medium_Text>
                    </div>
                  ))}
                  <div className="my-3">
                    <Large_Text variant="BOLD" className="mb-2 text-center">
                      Program Kerja
                    </Large_Text>
                    <Medium_Text
                      variant="REGULAR"
                      className="text-center my-3 bg-dark-8 py-2 rounded-md"
                    >
                      {candidate.candidate.progja}
                    </Medium_Text>
                  </div>
                  {candidate.candidate.video_profile && (
                    <div className="mb-3 mt-6">
                      <Large_Text variant="BOLD" className="mb-2 text-center">
                        Video Profil Kandidat
                      </Large_Text>
                      <iframe
                        src={candidate.candidate.video_profile}
                        title="YouTube video player"
                        className="rounded-[15px] w-full h-[320px] mx-auto duration-500 ease-in-out"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                      ></iframe>
                    </div>
                  )}
                </VoteModal>
              )}
            </div>
          </div>
        </div>
      ))}
      {selected.length > 0 && (
        <div className="fixed bottom-6 right-6 z-50">
          <FormButton onClick={handleDialouge} variant="PRIMARY">
            Submit Pilihanmu
          </FormButton>
        </div>
      )}
      {dialouge && (
        <ModalDialog
                    isOpen={dialouge}
                    onClose={() => setDialouge(false)}
                    handleSubmit={handleSubmit}
                  >
                    <div className="flex flex-col justify-center items-center">
                      <Large_Text variant="BOLD" className="text-[18px] font-[700]">Apakah Anda yakin ingin mengirim suara?</Large_Text>
                    </div>
                  </ModalDialog>
      )}
    </div>
  );
}

// "use client";

// import SectionsGap from "@/app/components/general/SectionsGap";
// import Image from "next/image";
// import React, { useState } from "react";
// import { H1, H5, Large_Text, Medium_Text } from "@/app/components/general/Text";
// import { FormButton } from "@/app/components/general/button";
// import { ModalDialog, VoteModal } from "@/app/components/general/Modal";
// import toast from "react-hot-toast";

// export default function VotePage() {
//   const [modal, setModal] = useState<string | null>(null);
//   const [selected, setIsSelected] = useState<string[]>([]);
//   const [dialouge, setDialouge] = useState(false);

//   const maxVote = 1; // Set the maximum number of votes you want
//   const candidates = [
//     {
//       id: "1",
//       name: "Haza Nasrullah Kuswantoro",
//       img: "/path-to-image/haza.jpg",
//       visi: "Visi text here",
//       misi: "Misi text here",
//       motto: "Motto text here",
//       pengalaman: [{ desc: "Pengalaman text here" }],
//       progja: "Program Kerja text here",
//     },
//     {
//       id: "2",
//       name: "Naufal Nabil Ramadhan",
//       img: "/path-to-image/naufal.jpg",
//       visi: "Visi text here",
//       misi: "Misi text here",
//       motto: "Motto text here",
//       pengalaman: [{ desc: "Pengalaman text here" }],
//       progja: "Program Kerja text here",
//     },
//   ];

//   const selectedCandidates = (candidateId: string) => {
//     if (selected.length >= maxVote && !selected.includes(candidateId)) {
//       return alert("Batas memilih adalah " + maxVote + " kandidat");
//     }
//     setIsSelected((prev) =>
//       prev.includes(candidateId)
//         ? prev.filter((candidate) => candidate !== candidateId)
//         : [...prev, candidateId],
//     );
//   };

//   const openDetailModal = (candidateId: string) => {
//     setModal((prev) => (prev === candidateId ? null : candidateId));
//   };

//   const handleDialouge = () => {
//     if (selected.length < maxVote) {
//       return toast.error("Anda harus memilih " + maxVote + " kandidat");
//     }
//     setDialouge(!dialouge);
//   };

//   const handleSubmit = async () => {
//     const loading = toast.loading("Loading...");
//     // Simulate submission and sign out
//     toast.success("Vote submitted successfully!", { id: loading });
//   };

//   return (
//     <SectionsGap>
//       <section className="max-w-full w-full mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 mt-10 mb-10 px-4 min-h-[60vh]">
//         {candidates.map((candidate) => (
//           <div key={candidate.id} className="relative p-4 bg-white rounded-md shadow-md">
//             <div className="flex flex-col items-center">
//               <Image
//                 src={candidate.img}
//                 alt="Foto Kandidat"
//                 className="mb-4 rounded-md"
//                 width={150}
//                 height={225}
//               />
//               <div className="text-center">
//                 <H1 >{candidate.name}</H1>
//                 <H5 >{candidate.progja}</H5>
//                 <div className="mt-4 flex flex-col gap-2">
//                   <FormButton
//                     onClick={() => selectedCandidates(candidate.id)}
//                     variant={selected.includes(candidate.id) ? "SECONDARY" : "PRIMARY"}
//                     className="w-full text-[16px] font-[400]"
//                   >
//                     {selected.includes(candidate.id) ? "Batalkan Pilihan" : "Pilih Kandidat"}
//                   </FormButton>
//                   <FormButton
//                     onClick={() => openDetailModal(candidate.id)}
//                     variant="BLACK"
//                     className="w-full text-[16px] font-[400]"
//                   >
//                     Lihat Detail
//                   </FormButton>
//                 </div>
//               </div>
//               {modal === candidate.id && (
//                 <VoteModal onClose={() => setModal(null)}>
//                   <div className="my-3">
//                     <Large_Text variant="BOLD" className="mb-2 text-center text-[18px] font-[700]">Visi</Large_Text>
//                     <Medium_Text variant="REGULAR" className="text-center my-3 bg-gray-200 py-2 rounded-md text-[18px] font-[700]">
//                       {candidate.visi}
//                     </Medium_Text>
//                   </div>
//                   <div className="my-3">
//                     <Large_Text variant="BOLD" className="mb-2 text-center text-[18px] font-[700]">Misi</Large_Text>
//                     <Medium_Text variant="REGULAR" className="text-center my-3 bg-gray-200 py-2 rounded-md text-[18px] font-[700]">
//                       {candidate.misi}
//                     </Medium_Text>
//                   </div>
//                   <div className="my-3">
//                     <Large_Text variant="BOLD" className="mb-2 text-center text-[18px] font-[700]">Motto</Large_Text>
//                     <Medium_Text variant="REGULAR" className="text-center my-3 bg-gray-200 py-2 rounded-md text-[18px] font-[700]">
//                       {candidate.motto}
//                     </Medium_Text>
//                   </div>
//                   <div className="my-3">
//                     <Large_Text variant="BOLD" className="mb-2 text-center text-[18px] font-[700]">Pengalaman</Large_Text>
//                     {candidate.pengalaman.map((exp, index) => (
//                       <Medium_Text key={index} variant="REGULAR" className="text-center my-2 bg-gray-200 py-2 rounded-md text-[18px] font-[700]">
//                         {exp.desc}
//                       </Medium_Text>
//                     ))}
//                   </div>
//                   <div className="my-3">
//                     <Large_Text variant="BOLD" className="mb-2 text-center text-[18px] font-[700]">Program Kerja</Large_Text>
//                     <Medium_Text variant="REGULAR" className="text-center my-3 bg-gray-200 py-2 rounded-md text-[18px] font-[700]">
//                       {candidate.progja}
//                     </Medium_Text>
//                   </div>
//                 </VoteModal>
//               )}
//             </div>
//           </div>
//         ))}
//         {selected.length > 0 && (
//           <div className="fixed bottom-6 right-6 z-50">
//             <FormButton onClick={handleDialouge} variant="PRIMARY" className="text-[16px] font-[400]">
//               Submit Pilihanmu
//             </FormButton>
//           </div>
//         )}
//         {dialouge && (
//           <ModalDialog
//             isOpen={dialouge}
//             onClose={() => setDialouge(false)}
//             handleSubmit={handleSubmit}
//           >
//             <div className="flex flex-col justify-center items-center">
//               <Large_Text variant="BOLD" className="text-[18px] font-[700]">Apakah Anda yakin ingin mengirim suara?</Large_Text>
//             </div>
//           </ModalDialog>
//         )}
//       </section>
//     </SectionsGap>
//   );
// }
