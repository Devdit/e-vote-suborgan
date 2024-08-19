import { StaticImageData } from "next/image";

export interface dataProps {
  name: string;
  ImgUrl: string | StaticImageData;
  job: string;
  gen: string;
}

export const Contributor: dataProps[] = [
  {
    name: "Naufal Nabil Ramadhan",
    ImgUrl: "/images/contoh_kandidat.jpg",
    gen: "32nd",
    job: "FullStack",
  },
  {
    name: "Muhammad Zuhair Zuhdi",
    ImgUrl: "/images/zuhdi.png", 
    gen: "32nd",
    job: "Backend",
  },
  {
    name: "Fahrell Shandy Zhariif",
    ImgUrl: "/images/fahrell.png", 
    gen: "32nd",
    job: "Frontend",
  },
  {
    name: "Rakha Adrian Nur Tanaya",
    ImgUrl: "/images/rakha.png", 
    gen: "32nd",
    job: "Frontend",
  },
  {
    name: "Moh Abdul Aziz",
    ImgUrl: "/images/aziz.png", 
    gen: "32nd",
    job: "UI UX Design",
  },
  {
    name: "Juang Bagus Arya Mukti",
    ImgUrl: "/images/juang.png", 
    gen: "32nd",
    job: "UI UX Design",
  },
];
