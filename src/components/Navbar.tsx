import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { AiOutlineClose, AiOutlineMenu, AiOutlineMail } from "react-icons/ai";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";

function Navbar() {
	const [nav, setNav] = useState<boolean>(false);
	const [shadow, setShadow] = useState<boolean>(false);

	const handleNav = () => {
		setNav(!nav);
	};

	useEffect(() => {
		const handleShadow = () => {
			// when scroll is greater than 90 pixels -> show shadow
			window.scrollY >= 90 ? setShadow(true) : setShadow(false);
		};

		window.addEventListener("scroll", handleShadow);
	}, []);

	return (
		<div
			className={
				shadow
					? "fixed w-full h-20 shadow-xl z-[100]"
					: "fixed w-full h-20  z-[100]"
			}
		>
			<div className="flex justify-between items-center w-full h-full px-2">
				<Image
					src="/assets/navLogo.png"
					alt="Navbar logo"
					width="125"
					height="50"
				/>

				{/* For Medium and up display  */}
				<div>
					{/* show hidden when mobile/ above medium flex */}
					<ul className="hidden md:flex">
						<Link href="/">
							<li className="ml-10 text-sm uppercase hover:border-b">
								Home
							</li>
						</Link>
						<Link href="/">
							<li className="ml-10 text-sm uppercase hover:border-b">
								About
							</li>
						</Link>
						<Link href="/">
							<li className="ml-10 text-sm uppercase hover:border-b">
								Skills
							</li>
						</Link>
						<Link href="/">
							<li className="ml-10 text-sm uppercase hover:border-b">
								Contact
							</li>
						</Link>
					</ul>

					{/* For mobile hamburger menu*/}
					{/* anything above hidden medium this hidden */}
					<div onClick={handleNav} className="md:hidden">
						<AiOutlineMenu size={25} />
					</div>
				</div>
			</div>

			{/* Sidebar Drawer Menu */}
			{/* This div will display the background opacity */}

			<div
				className={
					// make hidden when above medium screen
					nav
						? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70"
						: ""
				}
			>
				{/* This div will display the side bar menu */}
				<div
					className={
						nav
							? "fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500"
							: "fixed left-[-100%] top-0 w-[75%] p-10 ease-in duration-500"
					}
				>
					{/* Put it in a container where all all the items will be in the middle */}
					<div>
						{/* Div for Logo and Exit */}
						<div className="flex w-full items-center justify-between">
							<Image
								src="/assets/navLogo.png"
								alt="/"
								width="87"
								height="35"
							/>
							<div
								onClick={handleNav}
								className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer"
							>
								<AiOutlineClose size={25} />
							</div>
						</div>

						{/* Div for description  */}
						<div className="border-b border-gray-300 my-4">
							<p className="w-[85%] md:w[90%] py-4">
								{/* // eslint-disable-next-line react/no-unescaped-entities */}
								Let's build something legendary together
							</p>
						</div>

						{/* Menu List */}
						<div className="py-4 flex flex-col">
							<ul>
								<Link href="/">
									<li className="py-4 text-sm">Home</li>
								</Link>
								<Link href="/">
									<li className="py-4 text-sm">About</li>
								</Link>
								<Link href="/">
									<li className="py-4 text-sm">Skills</li>
								</Link>
								<Link href="/">
									<li className="py-4 text-sm">Projects</li>
								</Link>
								<Link href="/">
									<li className="py-4 text-sm">Contact</li>
								</Link>
							</ul>

							{/* Let Connect logos */}
							<div className="pt-40">
								<p className="uppercase tracking-widest text-[#5651e5]">
									Let's Connect
								</p>
								<div className="container mx-auto flex items-center justify-between my-4 w-full sm:w-[80%]">
									<div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
										<FaLinkedin />
									</div>
									<div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
										<FaGithub />
									</div>
									<div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
										<AiOutlineMail />
									</div>
									<div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
										<BsFillPersonLinesFill />
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Navbar;
