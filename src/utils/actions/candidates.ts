"use server";
import { revalidatePath } from "next/cache";
import { createCandidate, updateCandidate } from "../database/candidates.query";

export const handleCreateCandidate = async (formData: FormData) => {
	const candidateData = {
		img: formData.get("img") as string,
		name: formData.get("name") as string,
		kelas: formData.get("kelas") as string,
		visi: formData.get("visi") as string,
		misi: formData.get("misi") as string,
		pengalaman: formData.get("pengalaman") as string,
		moto: formData.get("moto") as string,
		progja: formData.get("progja") as string,
		video_profil: formData.get("video_profil") as string,
		suborgan: {
			connect: { id: formData.get("suborgan_id") as string },
		},
	};

	await createCandidate(candidateData);
	revalidatePath("/", "layout");
};

export const handleUpdateCandidate = async (id: string, formData: FormData) => {
	const candidateData = {
		img: formData.get("img") as string,
		name: formData.get("name") as string,
		kelas: formData.get("kelas") as string,
		visi: formData.get("visi") as string,
		misi: formData.get("misi") as string,
		pengalaman: formData.get("pengalaman") as string,
		moto: formData.get("moto") as string,
		progja: formData.get("progja") as string,
		video_profil: formData.get("video_profil") as string,
		suborgan: {
			connect: { id: formData.get("suborgan_id") as string },
		},
	};

	await updateCandidate({ id }, candidateData);
	revalidatePath("/", "layout");
};
