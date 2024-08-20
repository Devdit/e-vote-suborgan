"use client"
import { error } from "console";
import { FormButton } from "../components/general/button";
import { TextField } from "../components/general/Input";
import { H2, Large_Text, Small_Text } from "../components/general/Text";
import { useState } from "react";

export default function AdminLoginPage() {
    const [error, setError] = useState<string | null>("");
    return (
        <main className="px-4 lg:px-20">
            <div className="w-full h-full my-20 z-20 relative">
                <form>
                    <div className="bg-white max-w-[624px] w-full py-[72px] md:py-[92px] px-[24px] md:px-[88px] flex-col items-center mx-auto shadow-shadow-2">
                        <H2 className="text-center text-primary-text-color">
                            Yuk Login Untuk Pantau Kegiatan Voting
                        </H2>
                        <Large_Text
                            variant="REGULAR"
                            className="text-secondary-text-color text-center mt-2 mb-8"
                        >
                            Jangan lupa login menggunakan akun yang telah diberikan oleh
                            developer ya..
                        </Large_Text>
                        <TextField
                            placeholder="Masukkan Email Anda"
                            type="email"
                            name="email"
                            required
                        />
                        <TextField
                            placeholder="Masukkan Password Anda"
                            type="password"
                            name="password"
                            required
                        />
                        <FormButton
                            type="submit"
                            variant="PRIMARY"
                            className="flex items-center gap-x-4 w-full justify-center group"
                        >
                            <Large_Text variant="BOLD">Login</Large_Text>
                        </FormButton>
                        {error && (
                            <Small_Text variant="MEDIUM" className="text-red-500 mt-4">
                                {error}
                            </Small_Text>
                        )}
                    </div>
                </form>
            </div>
        </main>
    );
}