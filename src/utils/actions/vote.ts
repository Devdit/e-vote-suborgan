"use server";
import {
	getUserVoteResult,
	createVoteUserAccess,
	findVoteSession,
	createVoteSession,
} from "../database/vote.query";
import { findSuborgan } from "../database/suborgan.query";
import { findManyUser } from "../database/user.query";

export const handleUserVote = async (
	vote_session_id: string,
	id_user: string
) => {};

export const handleCreateVoteSession = async (formData: FormData) => {
	const title = formData.get("title") as string;
	const openedAt = formData.get("openedAt") as string;
	const closedAt = formData.get("closedAt") as string;
	const isPublic =
		(formData.get("isPublic") as string) === "true" ? true : false;
	const max_vote = Number(formData.get("max_vote") as string);
	const suborgan_id = formData.get("suborgan_id") as string;

	await createVoteSession({
		title,
		max_vote,
		isPublic,
		closedAt,
		openedAt,
		suborgan: {
			connect: { id: suborgan_id },
		},
	});
};

export const handleCreateVoteSessionAccess = async (
	vote_session_id: string
) => {
	const voteSession = await findVoteSession({ id: vote_session_id });
	if (!voteSession)
		return { success: false, message: "Vote session not found" };
	const suborgan = await findSuborgan({
		id: voteSession.suborgan_id,
	});
	if (!suborgan) return { success: false, message: "Vote session not found" };
	const users = await findManyUser({ suborgan_id: suborgan.id });
	const voteUserAccessData = users.map((user) => ({
		vote_session_id: voteSession.id,
		user_id: user.id,
	}));
	await createVoteUserAccess(voteUserAccessData);
};
