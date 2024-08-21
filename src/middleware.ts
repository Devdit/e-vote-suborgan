import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

export default withAuth(function middleware(req) {
	const { nextUrl, nextauth } = req;

	if (!nextauth) {
		return NextResponse.redirect(new URL("/login", nextUrl));
	}
});

export const config = {
	matcher: ["/vote"],
};
