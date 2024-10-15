import React from "react";

import { findAllUser } from "@/utils/database/user.query";
import UserTable from "./_components/Table";
import { nextGetServerSession } from "@/lib/next-auth";
import { User } from "@prisma/client";
import client from "@/lib/prisma";

export default async function Dashboard() {
  const session = await nextGetServerSession();
  const { user } = session!;
  const VoteSiswa = await client.user_Vote.findMany({
    select: {
      user: { select: { _count: { select: { User_Vote: true } } } },
    },
    where: {
      AND: [{ NOT: { user: { role: "admin" } } }],
    },
  });

  const admin: User[] = await findAllUser();

  return (
    <main className="h-full overflow-x-hidden">
      <UserTable
        roles="Admin"
        desc="Bertugas Untuk Mengontrol dan Mengawasi Sepenuhnya atas Sistem yang sudah di buat"
        data={admin}
      />
      <div className="my-10"></div>
    </main>
  );
}
