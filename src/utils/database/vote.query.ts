"use server";

import prisma from "@/lib/prisma";
import { Prisma } from "@prisma/client";

export const createVoteSession = async (
	data: Prisma.Vote_SessionCreateInput
) => {
	return await prisma.vote_Session.create({ data });
};

export const findVoteSession = async (
	where: Prisma.Vote_SessionWhereUniqueInput
) => {
	return await prisma.vote_Session.findUnique({ where });
};

export const createVoteUserAccess = async (
	data: Prisma.Vote_Session_AccessCreateManyInput[]) => {
	return await prisma.vote_Session_Access.createMany({ data });
};
export const getVoteSession = async (
	where: Prisma.Vote_SessionWhereUniqueInput
) => {
	return await prisma.vote_Session.findUnique({
		where,
		include: {
			Vote_Session_Candidate: true,
		},
	});
};

export const getUserVoteResult = async (vote_session_id: string) => {
	return await prisma.user_Vote.groupBy({
		by: ["candidate_id"],
		where: { vote_session_id },
		_count: {
			candidate_id: true,
		},
		orderBy: {
			_count: {
				candidate_id: "desc",
			},
		},
	});
};
