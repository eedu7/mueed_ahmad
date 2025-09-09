"use client";

import Image from "next/image";

import { heroIcons } from "@/assets";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useState } from "react";

export const Hero = () => {
	const [windowOffset, setWindowOffset] = useState({ innerWidth: 0, innerHeight: 0 });
	const [mouseMove, setMouseMove] = useState(false);
	const [buttonHover, setButtonHover] = useState(false);

	const x = useMotionValue(0);
	const y = useMotionValue(0);

	const handleMouseMove = (e: React.MouseEvent) => {
		const { clientX, clientY } = e;

		x.set(clientX);
		y.set(clientY);
	};

	const handleMouseEnter = () => {
		setWindowOffset({ innerWidth: window.innerWidth, innerHeight: window.innerHeight });
		setMouseMove(true);
	};

	const { innerWidth, innerHeight } = windowOffset;

	const xSpring = useSpring(x, {
		stiffness: 100,
		damping: 10,
	});
	const ySpring = useSpring(y, {
		stiffness: 100,
		damping: 10,
	});

	const rotateY = useTransform(xSpring, [0, innerWidth], [-30, 30]);
	const rotateX = useTransform(ySpring, [0, innerHeight], [10, -50]);

	return (
		<div className="grid h-screen place-items-center" onMouseMove={handleMouseMove} onMouseEnter={handleMouseEnter}>
			<div>
				<div className="flex flex-col items-center justify-center gap-y-3 font-light capitalize">
					<motion.div
						className="flex items-center justify-center"
						style={{
							rotateX: mouseMove ? rotateX : 0,
							rotateY: mouseMove ? rotateY : 0,
							transition: "0.1s",
						}}
					>
						<Image
							src="/person.png"
							alt="Person Image"
							width={400}
							height={400}
							priority
							className="h-auto w-[150px]"
						/>
						<motion.span
							className="absolute text-3xl font-semibold text-white"
							initial={{
								scale: 0,
							}}
							animate={{
								opacity: buttonHover ? 0 : 1,
								scale: buttonHover ? 2 : 0,
								y: buttonHover ? -40 : 0,
							}}
							transition={{
								opacity: {
									delay: 0.4,
								},
							}}
						>
							Hi
						</motion.span>
					</motion.div>
					<h1 className="text-center text-3xl font-bold tracking-wider text-gray-500 sm:text-2xl">
						My Name is Mueed Ahmad &
					</h1>
					<p className="text-lg tracking-wider text-gray-700">I like animations 😊</p>
				</div>
				<div className="mt-8 flex justify-center gap-x-10 text-3xl text-yellow-600 sm:text-2xl">
					{heroIcons.map(({ id, icon: Icon, url }) => (
						<a
							href={url}
							key={id}
							className="rounded-lg transition-colors hover:bg-red-400 hover:text-white"
						>
							<Icon />
						</a>
					))}
				</div>
				<a
					href="#"
					className="mx-auto mt-7 block w-max rounded-lg bg-red-400 px-3 py-1 font-light tracking-wider text-white capitalize transition-colors hover:bg-red-500"
					onMouseEnter={() => setButtonHover(true)}
					onMouseLeave={() => setButtonHover(false)}
				>
					Talk to me
				</a>
			</div>
		</div>
	);
};
