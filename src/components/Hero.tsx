"use client";

import Image from "next/image";

import { heroIcons } from "@/assets";

export const Hero = () => {
	return (
		<div className="grid h-screen place-items-center">
			<div>
				<div className="flex flex-col items-center justify-center gap-y-3 font-light capitalize">
					<div className="flex items-center justify-center">
						<Image
							src="/person.png"
							alt="Person Image"
							width={400}
							height={400}
							priority
							className="h-auto w-[150px]"
						/>
						<span className="absolute text-3xl font-semibold text-white">Hi</span>
					</div>
					<h1 className="text-center text-3xl font-bold tracking-wider text-gray-500">
						My Name is Mueed Ahmad &
					</h1>
					<p className="text-lg tracking-wider text-gray-700">I like animations 😊</p>
				</div>
				<div className="mt-8 flex justify-center gap-x-10 text-3xl text-yellow-600">
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
				>
					Talk to me
				</a>
			</div>
		</div>
	);
};
