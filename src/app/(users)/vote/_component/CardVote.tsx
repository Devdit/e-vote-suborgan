import React from "react";
import Image from "next/image";
import { H1, H5, Medium_Text } from "@/app/components/general/Text";
import { FormButton } from "@/app/components/general/button";

type CardVoteProps = {
  id: string;
  name: string;
  img: string;
  visi: string;
  misi: string;
  motto: string;
  pengalaman: Array<{ desc: string }>;
  progja: string;
  onSelect: (candidateId: string) => void;
  isSelected: boolean;
  onOpenDetails: (candidateId: string) => void;
};

const CardVote: React.FC<CardVoteProps> = ({
  id,
  name,
  img,
  visi,
  misi,
  motto,
  pengalaman,
  progja,
  onSelect,
  isSelected,
  onOpenDetails,
}) => {
  return (
    <div className="relative mx-5 lg:mx-0 ">
      {isSelected && (
        <div className="px-8 pt-8 w-full mx-auto">
          <div className="bg-primary-color flex justify-center gap-x-3 rounded-lg py-3">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12ZM12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4Z"
                fill="white"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M16.6402 8.2318C17.0645 8.58537 17.1218 9.21593 16.7682 9.64021L11.7682 15.6402C11.5937 15.8497 11.3411 15.9788 11.0691 15.9976C10.797 16.0165 10.5291 15.9234 10.3273 15.74L7.32733 13.0127C6.91868 12.6412 6.88856 12.0087 7.26007 11.6001C7.63157 11.1914 8.26402 11.1613 8.67268 11.5328L10.9002 13.5578L15.2318 8.35984C15.5854 7.93556 16.2159 7.87824 16.6402 8.2318Z"
                fill="white"
              />
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
            src={img}
            alt="Foto Kandidat"
            className="mx-auto mb-4 lg:mb-0 h-auto"
            width={200}
            height={300}
          />
        </div>
        <div className="">
          <div className="flex gap-x-3 mb-4 w-full justify-between">
            <H1 className="text-primary-color">{name}</H1>
            <div>
              <H5 className="">{name}</H5>
              <Medium_Text variant="SEMIBOLD">{visi}</Medium_Text>
            </div>
          </div>
          <div className="flex flex-col gap-y-4">
            {isSelected ? (
              <FormButton
                onClick={() => onSelect(id)}
                variant="SECONDARY"
                className="w-full"
              >
                <Medium_Text variant="BOLD">Batalkan Pilihan</Medium_Text>
              </FormButton>
            ) : (
              <FormButton
                onClick={() => onSelect(id)}
                variant="PRIMARY"
                className="w-full"
              >
                <Medium_Text variant="BOLD">Pilih Kandidat</Medium_Text>
              </FormButton>
            )}
            <FormButton
              onClick={() => onOpenDetails(id)}
              variant="BLACK"
              className="w-full"
            >
              <Medium_Text variant="BOLD">Lihat Detail</Medium_Text>
            </FormButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardVote;
