import "@styles/globals.css";
import type { Metadata } from "next";
export const metadata: Metadata = {
	title: "Black Cursor Trail",
	description: "Black Cursor Trail",
};
export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body>{children}</body>
		</html>
	);
}
