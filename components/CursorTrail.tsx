"use client";
import { useState, useEffect } from "react";

export default function CursorTrail() {
	const [windowsWidth, setWindowsWidth] = useState(0);

	useEffect(() => {
		setWindowsWidth(window.innerWidth);
	}, []);

	const getBlocks = () => {
		const blockSize = windowsWidth * 0.05;
		const nbOfBlocks = Math.ceil(window.innerHeight / blockSize);
		return [...Array(nbOfBlocks).keys()].map((_, index) => {
			return (
				<div
					className="w-full h-[5vw]"
					onMouseEnter={(e) => {
						colorize(e.target);
					}}
					key={index}></div>
			);
		});
	};

	const colorize = (el: EventTarget): void => {
		const divElement = el as HTMLDivElement;
		divElement.style.backgroundColor = "black";
		setTimeout(() => {
			divElement.style.backgroundColor = "transparent";
		}, 300);
	};

	return (
		<div className="flex h-screen items-center justify-center bg-white">
			<div className="text-[6vw] text-center font-bold relative w-[70%] z-10 pointer-events-none uppercase text-white mix-blend-difference">
				<p>We specialize in turning space into complexe shapes</p>
			</div>
			<div className="flex h-full w-full overflow-hidden absolute">
				{windowsWidth > 0 &&
					[...Array(20).keys()].map((_, index) => {
						return (
							<div
								key={index}
								className="w-[5vw]">
								{getBlocks()}
							</div>
						);
					})}
			</div>
		</div>
	);
}
