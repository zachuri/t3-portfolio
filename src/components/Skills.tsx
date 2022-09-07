import Image from "next/image";
import React, { useState } from "react";

function Skills() {
	function importAll(r: __WebpackModuleApi.RequireContext) {
		const images = {};
		r.keys().map((item) => {
			images[item.replace("./", "/assets/skills/")] = r(item);
		});

		return Object.keys(images);
	}

	const images = importAll(
		require.context(
			"../../public/assets/skills/",
			false,
			/\.(png|jpe?g|svg)$/
		)
	);

	return (
		<div className="w-full lg:h-screen p-2">
			<div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
				<p className="text-xl tracking-widest uppercase text-[#5651e5]">
					Skills
				</p>
				<h2 className="py-4">What I Can Do</h2>
				<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
					{/* Later make a map for all the pictures */}

					{images.map((image) => {
						return (
							<div
								key={image}
								className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300"
							>
								<div className="grid grid-cols-2 gap-4 justify-center items-center">
									<div className="m-auto">
										<Image
											src={image}
											alt={image.replace(
												"../../public/assets/skills/",
												""
											)}
											width="64px"
											height="64px"
										/>
									</div>
									<div className="flew flex-col items-center justify-center">
										<h3 className="uppercase">
											{image
												.replace("/assets/skills/", "")
												.replace(".png", "")
												.replace(".jpeg", "")
												.replace(".sv2", "")}
										</h3>
									</div>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
}

export default Skills;
