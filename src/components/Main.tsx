import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function Main() {
	return (
		<div className="w-full h-screen text-center">
			{/* Main container */}
			<div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
				<div>
					<p className="uppercase text-sm tracking-widest">
						Lets build something together
					</p>

					<h1 className="py-4 text-gray-700">
						Hi, I'm <span className="text-[#5651e5]">ZACHURI</span>
					</h1>
					<h1 className="py-4 text-gray-700">
						I'm a Full-Stack Web Developer
					</h1>
					<p className="py-4 text-gray-600 max-w-[70%] m-auto">
						I'm a full stack developer specializing in building
						exceptional digital experiences. Currently, I'm focused on
						building responseive front-end web application while learning
						back-end technologies.
					</p>

					{/* Container for logos */}
					<div className="flex items-center justify-between max-w-[330px] m-auto py-4">
						<div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
							<FaLinkedin />
						</div>
						<div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
							<FaGithub />
						</div>
						<div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
							<AiOutlineMail />
						</div>
						<div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
							<BsFillPersonLinesFill />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Main;
